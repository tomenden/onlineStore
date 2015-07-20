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
                    {expand: true, flatten: true, src: ['index.html', 'css/style.css'], dest: 'build/', filter: 'isFile'}
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
            dist: {
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
                    'dist/script.min.js': ['build/built.js']
                }
            }
        },
        eslint: {
            src: ['js/**/*.js', '!js/handlebars-v3.0.3.js']
            //src: ['js/app.js', '!js/handlebars-v3.0.3.js']
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['index.html']
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

    grunt.registerTask('default', ['handlebars', 'concat:dist', 'uglify']);
};