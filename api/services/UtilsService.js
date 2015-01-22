/**
 * UtilsService
 *
 * @description :: utils service
 * @help        :: See http://sailsjs.org/#/documentation/concepts/Services
 */
var path = require('path');

module.exports = {
    paths: {
        imagePath: '/images/products/',
        filePath: path.join(__dirname, '../../data/products/')
    }
};
