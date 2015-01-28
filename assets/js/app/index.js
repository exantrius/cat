var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: '#ember-app'
});

App.ApplicationController = Ember.Controller.extend({
    isHamburgerMenuVisible: false,

    adjustOffset: function () {
        return 'adjust-offset';
    }.property('toggleHamburgerMenu'),

    actions: {
        toggleHamburgerMenu: function () {
            this.toggleProperty('isHamburgerMenuVisible');
        }
    }
});

App.SlideInComponent = Ember.Component.extend({
    classNames: ['slide-in'],
    classNameBindings: ['slideInOpen', 'slideInDir', 'slideIn90'],
    dir: 'up', // or 'down', or 'right', or 'left'
    slideInOpen: false,
    slideIn90: true,

    slideInDir: function () {
        return 'slide-in-dir-' + this.get('dir');
    }.property('dir')
});
