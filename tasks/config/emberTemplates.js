/**
 * Compile ember.js templates
 *
 */

module.exports = function (grunt) {

    grunt.config.set('emberTemplates', {
        compile: {
            options: {
                templateBasePath: /assets\/js\/app\/templates\//,
                templateName: function (name) {
                    return name.replace('partials/', '');
                }
            },
            files: {
                '.tmp/public/js/app/templates.js': 'assets/js/app/templates/**/*.hbs'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ember-templates');

};
