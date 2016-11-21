var src = './src/';
var dest = './dist/';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: [
            dest
        ],

        copy: {
            'js': {
                flatten: true,
                expand: true,
                src: src + 'js/*.js',
                dest: dest + 'js/'
            }
        },

        uglify: {
            main: {
                options: {
                    sourceMap: true
                },

                files: [{
                    expand: true,
                    cwd: dest + 'js/',
                    src: ['*.js', '!*.min.js'],
                    dest: dest + 'js',
                    ext: '.min.js',
                    extDot: 'last'
                }]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['clean', 'copy', 'uglify']);
};