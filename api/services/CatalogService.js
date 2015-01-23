
var catalogJson = require('../../data/catalog.json');

function _CatalogService () { }

_CatalogService.getCatalog = function (catalogId, next) {
    if (!catalogId) {
        next({err: 1, msg: 'Not found'});
    }

    var catalog = catalogJson[catalogId];
    if (!catalog) {
        next({err: 1, msg: 'Not found'});
    }

    //Expand catalog
    console.log(catalog.data.length);
    for (var i = 0; i < catalog.data.length; i++) {
        var _el = catalog.data[i];
        var res;
        console.log(_el);
        try {
            res = require('../../data/products/' + _el.id + '.json');
        } catch (e) {
            sails.log.error('not found :'  + _el.id + '.json');
        }
        catalog.data[i] = {
            'id':   _el.id,
            'data': res
        };

    }
    next(null, catalog);
};

module.exports = {
    getCatalog: _CatalogService.getCatalog
};
