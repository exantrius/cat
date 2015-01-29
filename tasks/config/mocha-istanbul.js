/**
 * Run tests coverage files.
 *
 * @author: Andrew Sednev <exantrius@gmail.com>, 2015
 */

module.exports = function (grunt) {
    grunt.config.set('mocha_istanbul', {
        coverage: {
            src: './tests/specs/**',
            //options: {
            //    mask: '*.spec.js'
            //}
        },
        coveralls: {
            src: './tests/specs/**/*.spec.js',
            options: {
                coverage: true,
                check: {
                    lines: 75,
                    statements: 75
                },
                root: './api'
            }
        }
    });

    grunt.event.on('coverage', function (lcovFileContents, done) {
        done();
    });

    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    grunt.registerTask('coverage',  ['mocha_istanbul:coverage']);
}
