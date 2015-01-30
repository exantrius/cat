Ember.ProxyView = Em.Object.extend

  id: null

  concatenatedProperties: [ 'classNames', 'classNameBindings', 'attributeBindings' ],

  classNames: [ 'ember-view' ]
  classNameBindings: [ ]

  state: 'inDOM'

  isProxy: true

  didProxyElement: Ember.K
  willProxyElement: Ember.K

  init: ->
    @_super()

    # Run the didProxyElement method
    @willProxyElement()

    # Register the view for event handling. This hash is used by
    # Ember.RootResponder to dispatch incoming events.
    Ember.View.views[@get('id')] = @

    # Setup the class name thingies
    @set 'classNameBindings', Ember.A(@get('classNameBindings').slice())
    @set 'classNames', Ember.A(@get('classNames').slice())

    jQuery =>
      # Find the element
      @set 'element', el = jQuery('#' + (@get 'id'))

      # Add the current class names
      if existingClasses = el.attr('class')
        @set 'classNames', @get('classNames').concat existingClasses.split(' ')

      # Setup class name bindings
      @_appyClassNameBindings()

      # Now we're ready to start propagating changes down to the element
      @set 'state', 'hasProxy'

      # Update the attributes on the element
      @_updateAttributes()

      # Run the didProxyElement method
      @didProxyElement()

  $: ->
    Em.$ @get('element')

  classNamesDidChange: Em.observer(->
    return unless @get('state') == 'hasProxy'

    Ember.run.schedule 'render', @, '_updateAttributes'
  , 'classNames.@each')

  _updateAttributes: ->
    # Grab the class names as an array, and ensure they
    # are unique.
    classNames = _.uniq(Ember.A(@get 'classNames'))

    @$().attr('class', classNames.join(' '))

  handleEvent: (eventName, event) ->
    # Call the event
    if @[eventName]
      @[eventName](event)

  # Stolen from Ember.View and modified
  _classStringForProperty: (property) ->
    split = property.split(":")
    className = split[1]
    property = split[0]
    val = Ember.getPath(this, property, false)
    val = Ember.getPath(window, property) if val is `undefined` and Ember.isGlobalPath(property)

    actualClassName = if className
      className
    else
      parts = property.split(".")
      Ember.String.dasherize parts[parts.length - 1]

    if (val is true) || (val isnt false and val isnt `undefined` and val isnt null)
      { status: true, className: actualClassName }
    else
      { status: false, className: actualClassName }

  # Stolen from Ember.View and modified.
  _appyClassNameBindings: ->
    elem = newClass = dasherizedClass = undefined

    classBindings = @get("classNameBindings")
    classNames = @get("classNames")
    return unless classBindings

    classBindings.forEach ((binding) ->
      oldClass = property = undefined

      observer = ->
        result = @_classStringForProperty(binding)
        elem = @$()
        unless result.status
          classNames.removeObject result.className
        if result.status
          classNames.addObject result.className
          oldClass = newClass
        else
          oldClass = null

      result = @_classStringForProperty(binding)
      if result.status
        classNames.push result.className
        oldClass = result.className

      property = binding.split(":")[0]
      Em.addObserver @, property, observer
    ), @

    return
