/* eslint-env node */
/* eslint global-strict: 0 */
module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            build: ['build'],
            dist: ['dist']
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['index.html', 'css/style.css', 'js/handlebars-v3.0.3.js'], dest: 'build/', filter: 'isFile'}
                ]
            },
            data: {
                files: [
                    {src:['data.json'], dest:'dist/'}
                ]
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "templates",
                    processName: function (filePath) {
                        return filePath.replace(/partials\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    "partials/templates.js": "partials/*.hbs"
                }
            }
        },
        concat: {
            build: {
                src: [
                    "js/handlebarsHelpers.js",
                    "partials/templates.js",
                    "js/modulesObject.js",
                    "js/modules/*.js",
                    "js/app.js"
                ],
                dest: "build/built.js"
            }
        },
        uglify: {
            main: {
                files: {
                    'dist/script.min.js': ['build/built.js'],
                    'dist/handlebars.min.js': ['js/handlebars-v3.0.3.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{src: ['css/style.css'], dest: 'dist/style.min.css'}]
            }
        },
        eslint: {
            src: ['js/**/*.js', '!js/handlebars-v3.0.3.js']
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['build/index.html']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-eslint');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['eslint', 'clean', 'handlebars', 'copy', 'concat:build', 'processhtml','uglify', 'cssmin', 'copy:data']);
};