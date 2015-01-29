/* global CatalogService: true */
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

            //sails.log.info({
            //    'catalog':  data,
            //    'img_path': UtilsService.paths.imagePath
            //});
            //sails.log.info(data.data[0]);
            return res.view('catalog', {
                'catalog':  data,
                'catalog_id': catalogUrlId,
                'img_path': UtilsService.paths.imagePath
            });

        });
    }
};
