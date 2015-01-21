/**
 * @file: /tasks/config/bower_concat.js
 * @author Andrew Sednev <exantrius@gmail.com>
 */
module.exports = function (grunt) {
    grunt.config.set('bower_concat', {
        dev: {
            dest: '.tmp/public/js/_bower.js',
            cssDest: '.tmp/public/styles/_bower.css',

            bowerOptions: {
                relative: false
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-concat');
}
