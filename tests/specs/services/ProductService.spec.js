var sailsHelper = require('../../helpers/sailsHelper'),
    sinon = require('sinon'),
    should = require('chai').should();

describe('Product Service', function() {

    var app,
        testingProductService;

    before(function (done) {
        sailsHelper.lift(function(err, sails) {
            app = sails;
            // Testing Product Service
            testingProductService = app.services.productservice;
            done(err, sails);
        });
    });

    after(function (done){
        app.lower(done);
    });

    it('app should have product service', function() {
        testingProductService.should.be.a('object');
    });

    it('product service should have getProduct method', function() {
        testingProductService.getProduct.should.be.a('function');
    });

    it('product service should get correct data for a product', function(done) {
        // for example for first product
        testingProductService.getProduct('1', function(data){
            should.exist(data);
            data.should.be.an('object');
            done();
        });
    });

    it('product service should return a product if productId isn\'t defined', function(done) {
        testingProductService.getProduct( '', function(data){
            should.exist(data);
            data.should.be.an('object');
            done();
        });
    });

});
