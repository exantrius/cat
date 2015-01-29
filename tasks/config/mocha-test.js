/**
 * Run Unit-tests files.
 *
 * @author: Andrew Sednev <exantrius@gmail.com>, 2015
 */

module.exports = function (grunt) {

    grunt.config.set('mochaTest', {
        test: {
            options: {
                reporter: 'spec'
            },
            src: ['test/**/*.spec.js']
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
};
