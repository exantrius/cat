/**
 * Exec submodules
 *
 * @author: Andrew Sednev <exantrius@gmail.com>, 2015
 */

module.exports = function (grunt) {

    var CATLIB_PATH = 'cat_components';

    grunt.config.set('exec', {
        npmComponents:   {cmd: 'npm install',     cwd: CATLIB_PATH},
        bowerComponents: {cmd: 'bower install',   cwd: CATLIB_PATH},
        buildComponents: {cmd: './scripts/build', cwd: CATLIB_PATH},
        copyComponents:  {
            cmd: 'cp dist/globals/main.js ../.tmp/public/js/vendor/cat_components.js',
            cwd: CATLIB_PATH
        },
    });

    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('build_components', [
        'exec:npmComponents',
        'exec:bowerComponents',
        'exec:buildComponents',
        'exec:copyComponents'
    ]);
};
