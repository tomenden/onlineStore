/**
 * Created by tome on 7/19/15.
 */

define(['pagination'], function (pagination) {
    Handlebars.registerHelper('currentPageClass', function (page) {
        var currentPage = pagination.getCurrentPage(),
            ret = '';
        if (page === currentPage) {
            ret = ' current-page';
        }
        return ret;
    });
    Handlebars.registerHelper('log', function (something) {
        console.log(something);
    });
    Handlebars.registerHelper('ifEquals', function (a, b, options) {
        if (a === b) {
            return options.fn(this);
        }

        return options.inverse(this);
    });
});
//(function initHelpers() {
//    Handlebars.registerHelper('currentPageClass', function (page) {
//        var currentPage = app.pagination.getCurrentPage(),
//            ret = '';
//        if (page === currentPage) {
//            ret = ' current-page';
//        }
//        return ret;
//    });
//    Handlebars.registerHelper('log', function (something) {
//        console.log(something);
//    });
//    Handlebars.registerHelper('ifEquals', function (a, b, options) {
//        if (a === b) {
//            return options.fn(this);
//        }
//
//        return options.inverse(this);
//    });
//}());