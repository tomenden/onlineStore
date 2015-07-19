/**
 * Created by tome on 7/3/15.
 */
//
///********modules object****************************************************************************************************************************/
//var modules = {};
/********app object****************************************************************************************************************************/
var app = {};


///********initialize app with 2 items per page****************************************************************************************************************************/
//(function init(data) {
//    app.pagination.setItemsPerPage(2);
//    app.pagination.goToPage(1);
//})(app.data);



(function initApp(app) {
    modules.UTILS.getAJAX('data.json',
        function (itemsData) {
            if (typeof itemsData === 'string') {
                itemsData = JSON.parse(itemsData);
            }
            app.UTILS = modules.UTILS;//set app.UTILS
            modules.pubsub(app);//set app.pubsub
            modules.data(itemsData, app);//set app.data
            modules.mainTable(app);//set app.mainTable
            modules.pagination(app);//set app.pagination
            modules.cart(app);//set app.cart
            modules.templating(app);//set app.templating


            //Initialize app view with 5 items per page
            app.pagination.setItemsPerPage(5);
            app.pagination.goToPage(1);
            app.templating.init();
        });
}(app));