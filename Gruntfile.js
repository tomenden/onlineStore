module.exports = function (grunt) {

    grunt.initConfig({
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
                    'js/handlebars-v3.0.3.js', "js/handlebarsHelpers.js",
                    "partials/templates.js",
                    "js/modulesObject.js",
                    "js/modules/*.js",
                    "js/app.js"
                ],
                dest: "dist/built.js"
            }
        },
        uglify: {
            main: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['handlebars', 'concat:dist', 'uglify']);
};