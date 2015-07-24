/**
 * Created by tome on 7/23/15.
 */
requirejs.config({
    paths: {
        'UTILS': './modules/UTILS',
        'data': './modules/data',
        'pubsubService': './modules/pubsub',
        'mainTable': './modules/mainTable',
        'pagination': './modules/pagination',
        'cart': './modules/cart',
        'templating': './modules/templating',
        'templates': '../partials/templates',
        'handlebarsHelpers': './handlebarsHelpers'
    }
});

requirejs(['UTILS', 'data', 'handlebarsHelpers', 'templating', 'pagination'], function (UTILS, data, handlebarsHelpers, templating, pagination) {
    UTILS.getAJAX('data.json', function (response) {
        data.init(JSON.parse(response));
        pagination.init();
        pagination.setItemsPerPage(5);
        pagination.goToPage(1);
        templating.init();
    });

});