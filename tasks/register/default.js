module.exports = function (grunt) {
    grunt.registerTask('default', [
        //'jshint',
        //'jscs',
        'compileAssets',
        'test',
        'linkAssets',
        'watch'
    ]);
};
