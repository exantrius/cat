module.exports = function (grunt) {
    grunt.registerTask('build', [
        'compileAssets',
        'test',
        'linkAssetsBuild',
        'clean:build',
        'copy:build'
    ]);
};
