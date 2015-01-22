/**
 * ProductService
 *
 * @description :: product service
 * @help        :: See http://sailsjs.org/#/documentation/concepts/Services
 */
var fs = require('fs');

function getProduct (productId, callback) {
    var filePath = UtilsService.paths.filePath + productId + '.json';

    fs.readFile(filePath, function (err, data) {
        if (err) {
            sails.log.error('error read file ' + filePath);
            getProduct(1, callback);
            return;
        }

        try {
            var productInfo = JSON.parse(data);
            // TODO validate productInfo
        }
        catch (e) {
            sails.log.error('error parse json ' + filePath);
            getProduct(1, callback);
        }

        callback(productInfo);
    });
}

module.exports = {
    getProduct: getProduct
};
