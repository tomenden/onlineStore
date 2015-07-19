module.exports = function(grunt) {

    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: "templates",
                    processName: function(filePath) {
                        return filePath.replace(/partials\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    "partials/templates.js": "partials/*.hbs"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars')
};