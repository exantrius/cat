var exec = require('child_process').exec;

module.exports = function (grunt) {

    grunt.config.set('api-mock', {
        dev: {
            options: {

            },
            files: {

            }
        }
    });

	grunt.registerTask('api-mock', 'Task run mock res server for testing', function() {
		var done = this.async();
		exec('node node_modules/.bin/api-mock test/fixtures/rest-service/apiblueprint.md', function (error, stdout, stderr) {

	    	grunt.log.writeln("Test", error, stdout, stderr);
	    	done();
		});

	});
};