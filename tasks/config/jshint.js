/**
 * @file: /tasks/config/js_hint.js
 * @author Andrew Sednev <exantrius@gmail.com>
 */
module.exports = function (grunt) {
    grunt.config.set('jshint', {
        options: {
            "predef": [
                "document",
                "window",
                "sails",
                // services
                "ProductService",
                "UtilsService"
            ],
            "globals": {
                "module": true
            },
            "curly":     false,
            "eqeqeq":    true,
            "funcscope": true,
            "browser":   true,
            "immed":     false,
            "strict":    false,
            "newcap":    true,
            "noempty":   false,
            "nonew":     true,
            "undef":     true,
            "unused":    true,
            "boss":      true,
            "eqnull":    true,
            "sub":       true,
            "devel":     true,
            "forin":     false,
            "noarg":     true,
            "esnext":    true,
            "node" :     true
        },
        api: {
            files: {
                src: ['api/**/*.js']
            }
        },
        assets: {
            files: {
                src: ['tasks/pipeline.js']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
}
