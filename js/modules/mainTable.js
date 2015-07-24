/**
 * Created by tome on 7/19/15.
 */
//modules.mainTable = function (app) {
//    // Dependencies
//    var pubsubService = app.pubsub;
//    var data = app.data;
//
//
//    var items = [];
//
//    function generateItems(firstItemIndex, stopIndex) {
//        var dataLength = data.getItemsLength();
//        stopIndex = stopIndex < dataLength ? stopIndex : dataLength;
//        items = data.getItems().slice(firstItemIndex, stopIndex);
//        pubsubService.publish('itemsGenerated');
//    }
//
//    function getItems() {
//        return items;
//    }
//
//    var subscriptions = {//TODO: create dictionary of constants > events
//        changePage: pubsubService.subscribe('pageChanged', generateItems),
//        changeItemsPerPage: pubsubService.subscribe('itemsPerPageChanged', generateItems)
//    };
//
//    app.mainTable = {
//        generateItems: generateItems,
//        getItems: getItems
//    };
//};

define(['pubsubService', 'data'], function (pubsubService, data) {
    var items = [];

    function generateItems(firstItemIndex, stopIndex) {
        var dataLength = data.getItemsLength();
        stopIndex = stopIndex < dataLength ? stopIndex : dataLength;
        items = data.getItems().slice(firstItemIndex, stopIndex);
        pubsubService.publish('itemsGenerated');
    }

    function getItems() {
        return items;
    }

    var subscriptions = {//TODO: create dictionary of constants > events
        changePage: pubsubService.subscribe('pageChanged', generateItems),
        changeItemsPerPage: pubsubService.subscribe('itemsPerPageChanged', generateItems)
    };

    return {
        generateItems: generateItems,
        getItems: getItems
    };
});