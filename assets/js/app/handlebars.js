
Handlebars.registerHelper('proxy', function (module, path) {
    console.log(module);

    var _id = module.hash.id;
    var _className = _id.replace(/^#/ig, '');

    var proxy = Em.get(module.hash.id);
    //proxy.create(module.hash);
    Ember.ProxyView.create(module.hash);
    return null;
});