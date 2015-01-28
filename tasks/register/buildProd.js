module.exports = function (grunt) {
    grunt.registerTask('buildProd', [
        'compileAssets',
        'test',
        'concat',
        'uglify',
        'cssmin',
        'linkAssetsBuildProd',
        'clean:build',
        'copy:build'
    ]);
};
