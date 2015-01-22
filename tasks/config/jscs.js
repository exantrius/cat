/**
 * @file: /tasks/config/js_cs.js
 * @author Andrew Sednev <exantrius@gmail.com>
 */
module.exports = function (grunt) {
    grunt.config.set('jscs', {
        options: {
            config: '.jscsrc'
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

    grunt.loadNpmTasks('grunt-jscs');
}
