/**
 * Run tests coverage files.
 *
 * @author: Andrew Sednev <exantrius@gmail.com>, 2015
 */

module.exports = function (grunt) {
    grunt.config.set('mocha_istanbul', {
        'coverage_api': {
            src: './tests/specs/controllers/*.spec.js',
            options: {
               coverageFolder: './.tmp/public/coverage',
               excludes: ['responses'],
               // check: {
               //      lines: 75,
               //      statements: 75
               // },

               root: './api',
               reportFormats: ['text-summary', 'lcov']
            }
        },
    });

    grunt.event.on('coverage', function (lcovFileContents, done) {
        done();
    });

    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('coverage',  [
        'mocha_istanbul:coverage_api'
    ]);
}
