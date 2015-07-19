module.exports = function(grunt) {

    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: "JST"
                },
                files: {
                    "partials/templates.js": "partials/*.hbs"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars')
};