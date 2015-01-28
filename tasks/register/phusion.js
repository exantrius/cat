module.exports = function (grunt) {
    grunt.registerTask('phusion', [
        'compileAssets',
        'test',
        'concat',
        'uglify',
        'cssmin',
        'linkAssetsBuildProd',
        'clean:phusion',
        'copy:fonts',
        'copy:phusion'
    ]);
};
