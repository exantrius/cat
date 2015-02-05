/**
 * Category.js
 *
 * @description :: Category model is here
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({

  connection: 'apiaryMockRest',

});
