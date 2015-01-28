/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {

	grunt.config.set('emberTemplates', {
        compile: {
            options: {
                templateBasePath: /assets\/js\/app\/templates\//,
                templateName: function(name) {
                    return name.replace('partials/', '');
                }
            },
            files: {
                'assets/js/app/templates.js': 'assets/js/app/templates/**/*.hbs'
            }
        }
	});

    grunt.loadNpmTasks('grunt-ember-templates');

};
