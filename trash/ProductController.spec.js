var sailsHelper = require('../test/helpers/sailsHelper'),
    assert = require('chai').assert,
    should = require('chai').should(),
    sinon = require('sinon');


var flatten = function (arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};

describe('Product Controller', function() {

    var app,
        testingProductController;

    before(function (done) {
        sailsHelper.lift(function(err, sails) {
            app = sails;
            // Testing Product controller
            testingProductController = app.controllers.product;
            done(err, sails);
        });
    });

    after(function (done){
        app.lower(done);
    });

    it('app should have product controller', function() {
        testingProductController.should.be.a('object');
    });

    it('product controller should have init method', function() {
        testingProductController.init.should.be.a('function');
    });

    it('product controller should call product service with correct args', function() {
        sinon.spy(app.services.productservice, 'getProduct');

        var getProduct = app.services.productservice.getProduct;

        testingProductController.init({
            url: '/product?productId=1&catName=men'
        }, {
            view: function(){ }
        } );

        assert(getProduct.called);
        flatten(getProduct.args).should.have.property('0', '1');
    });

});
