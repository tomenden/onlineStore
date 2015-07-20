/**
 * Created by tome on 7/3/15.
 */
//'use strict';
var app = {};



(function initApp(application) {
    modules.UTILS.getAJAX('data.json',
        function (itemsData) {
            if (typeof itemsData === 'string') {
                itemsData = JSON.parse(itemsData);
            }
            application.UTILS = modules.UTILS;//set application.UTILS
            modules.pubsub(application);//set application.pubsub
            modules.data(itemsData, application);//set application.data
            modules.mainTable(application);//set application.mainTable
            modules.pagination(application);//set application.pagination
            modules.cart(application);//set application.cart
            modules.templating(application);//set application.templating


            //Initialize application view with 5 items per page
            application.pagination.setItemsPerPage(5);
            application.pagination.goToPage(1);
            application.templating.init();
        });
}(app));