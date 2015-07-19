module.exports = function(grunt) {

    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: "JST"
                },
                files: {
                    "partials/cartView.js": "partials/cartView.hbs",
                    "partials/mainView.js": "partials/mainView.hbs",
                    "partials/pageList.js": "partials/pageList.hbs"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars')
};