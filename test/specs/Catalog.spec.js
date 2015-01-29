var Sails = require('sails');
var sinon = require('sinon');
var assert = require('chai').assert;

var CatalogController = require('../../api/controllers/CatalogController');
var CatalogService = require('../../api/services/CatalogService');

describe('Catalog', function () {

    // Future server
    var app;

    // Start server
    before(function beforeTest(done) {
        Sails.lift({
            log: {
                level: 'error'
            }
        }, function (err, sails) {
            if(err) return done(err);
            app = sails;
            done(err, sails);
        });
    });

    // Down server
    after(function afterTest(done) {
        app.lower(done);
    });

    describe('The Catalog Controller', function () {


        it('exists', function() {
            assert.isObject(app.controllers.catalog);
        });

        it('has got init method', function() {
            assert.isFunction(app.controllers.catalog.init);
        });

        describe('when we invoke the init action', function() {

            it('should return 404 status if param catalog_url_id doesn`t exist', function () {

                // Mocking res.status method
                var status = sinon.spy();

                CatalogController.init({
                    param: function() {return null;}
                }, {
                    'status': status
                });

                assert(status.called);
                assert(status.calledWith(404));
            });

            it('should render view if catalog_url_id exists', function() {
                // JSON object spy
                var view = sinon.spy();

                // Executes controller action
                CatalogController.init({
                    param: function() {return 'men';}
                }, {
                    'view': view
                });

                // Makes sure the mocked service was called
                // instead of the real one
                assert(view.called);
            });

        });
    });

    describe('The Catalog Service', function () {

        it('exists', function() {
            assert.isObject(app.services.catalogservice);
        });

        it('has got getCatalog method', function() {
            assert.isFunction(app.services.catalogservice.getCatalog);
        });

        describe('when we specify catalog id', function() {
            var catalogId = 'men';

            it('should return data for specified catalog', function () {
                app.services.catalogservice.getCatalog(catalogId, function (err, catalog) {
                    assert.isNotNull(catalog);
                    assert.isDefined(catalog);
                    assert.isObject(catalog);
                    assert.property(catalog, 'data');
                });
            });

        });
    });

});

