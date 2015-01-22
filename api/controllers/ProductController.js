/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var url = require('url');

module.exports = {
    init: function (req, res) {
        var query = url.parse(req.url, true).query;

        ProductService.getProduct(query.productId , function (data) {
            return res.view('product', {
                product: data.product,
                price: data.price,
                description: data.description,
                imageSrc: UtilsService.paths.imagePath + data.image
            });
        });
    }
};
