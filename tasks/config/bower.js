/**
 * @file: /tasks/config/bower.js
 * @author Andrew Sednev <exantrius@gmail.com>
 */

var PUBLIC_DEV_PREFIX = '.tmp/public';

module.exports = function (grunt) {
    grunt.config.set('bower', {
        dev: {
            'dest':      PUBLIC_DEV_PREFIX,
            'js_dest':  (PUBLIC_DEV_PREFIX + '/js/vendor'),
            'css_dest': (PUBLIC_DEV_PREFIX + '/styles'),
            options: {
                keepExpandedHierarchy: false,

                packageSpecific: {
                    'bootstrap': {
                        'dest':       (PUBLIC_DEV_PREFIX + '/vendor/bootstrap'),
                        'js_dest':    (PUBLIC_DEV_PREFIX + '/vendor/bootstrap/js'),
                        'css_dest':   (PUBLIC_DEV_PREFIX + '/vendor/bootstrap/css'),
                        'map_dest':   (PUBLIC_DEV_PREFIX + '/vendor/bootstrap/css'),
                        'fonts_dest': (PUBLIC_DEV_PREFIX + '/vendor/bootstrap/fonts'),
                        'files': [
                            'dist/css/bootstrap.css',
                            'dist/css/bootstrap.css.map',
                            'dist/js/bootstrap.js',
                            'dist/fonts/glyphicons-halflings-regular.eot',
                            'dist/fonts/glyphicons-halflings-regular.svg',
                            'dist/fonts/glyphicons-halflings-regular.ttf',
                            'dist/fonts/glyphicons-halflings-regular.woff'
                        ]
                    },
                    'ember-resolver': {
                        'files': [
                            'dist/ember-resolver.js'
                        ]
                    },
                    'ember-utils': {
                        'js_dest': (PUBLIC_DEV_PREFIX + '/js/vendor/ember-utils'),
                        'files': [
                            'dist/globals/main.js'
                        ]
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower');
}
