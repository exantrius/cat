module.exports = function (grunt) {
    grunt.registerTask('phusion', [
        'compileAssets',
        'concat',
        'uglify',
        'cssmin',
        'linkAssetsBuildProd',
        'clean:phusion',
        'copy:fonts',
        'copy:phusion'
    ]);
};
