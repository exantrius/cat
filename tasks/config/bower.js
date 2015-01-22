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
                        'dest':       (PUBLIC_DEV_PREFIX + '/bootstrap'),
                        'js_dest':    (PUBLIC_DEV_PREFIX + '/bootstrap/js'),
                        'css_dest':   (PUBLIC_DEV_PREFIX + '/bootstrap/css'),
                        'fonts_dest': (PUBLIC_DEV_PREFIX + '/bootstrap/fonts'),
                        'files': [
                            'dist/css/bootstrap.css',
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
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower');
}
