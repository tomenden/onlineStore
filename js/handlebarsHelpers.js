/**
 * Created by tome on 7/19/15.
 */
(function initHelpers() {
    Handlebars.registerHelper("currentPageClass", function (page) {
        var currentPage = app.pagination.getCurrentPage();
        if (page === currentPage) {
            return ' current-page';
        } else {
            return '';
        }
    });
    Handlebars.registerHelper('isTotalDiscounted', function (totalPrice) {

    });
    Handlebars.registerHelper("log", function (something) {
        console.log(something);
    });
    Handlebars.registerHelper('ifEquals', function (a, b, options) {
        if (a === b) {
            return options.fn(this);
        }

        return options.inverse(this);
    });
}());