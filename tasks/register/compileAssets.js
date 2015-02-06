module.exports = function (grunt) {
    grunt.registerTask('compileAssets', [
        'clean:dev',
        'bower:dev',
        'jst:dev',
        'stylus:dev',
        'copy:dev',
        'coffee:dev',
        'emberTemplates',
        'build_components'
    ]);
};
