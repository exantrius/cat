///* global Category: true */
/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * CategoryController.show()
     */
    showMenCategory: function (req, res) {

        console.log('let`s try to find category');

        // Find men category and send answer
        Category.find({where: {id: 'mens'}}, function (err, category) {
            console.log('lookup of category is finished');

            if (err) {
                console.log('error occured in adapter: ', err);
                return res.negotiate(err);
            }

            if (!category) {
                console.log('not found category');
                return res.notFound();
            }

            console.log('category was found: ', category);
            res.json(category);
        });

    }
};
