Handlebars.registerHelper "proxy", (module, path) ->
  proxy = Em.getPath(module)
  proxy.create(path.hash)
  null