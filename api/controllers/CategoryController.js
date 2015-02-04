///* global Category: true */
/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request = require('request');

module.exports = {

    /**
     * CategoryController.show()
     */
    showMenCategory: function (req, res) {

        //request('https://private-f86be-georgiypodsvetov.apiary-mock.com/categories/mens/',
        //    function (error, response, body) {
        //        if (!error && response.statusCode == 200) {
        //            console.log(body) // Show the HTML for the Google homepage.
        //    }
        //});

        // Find men category and send answer
        Category.find({where: {id: 'mens'}}, function (err, category) {
            if (err) {
                return res.negotiate(err);
            }

            if (!category) {
                return res.notFound();
            }

            console.log(category);
        });

    }
};
