/* global CatalogService: treu */
/**
 * CatalogController
 *
 * @description :: Server-side logic for managing Catalogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `CatalogController.init()`
     */
    init: function (req, res) {

        var catalogUrlId = req.param('catalog_url_id') || null;

        if (!catalogUrlId) {
            return res.status(404);
        }

        CatalogService.getCatalog(catalogUrlId, function (err, data) {
            if (err) {
                return res.status(404);
            }

            return res.view('catalog', {catalog: data});

        });

        return res.json({
            todo: 'init() is not implemented yet!'
        });
    }
};
