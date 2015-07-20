/**
 * Created by tome on 7/19/15.
 */
modules.mainTable = function (app) {
    // Dependencies
    var data = app.data.getItems(),
        pubsubService = app.pubsub;

    var items = [];

    function generateItems(firstItemIndex, stopIndex) {
        var dataLength = data.length;
        stopIndex = stopIndex < dataLength ? stopIndex : dataLength;
        items = data.slice(firstItemIndex, stopIndex);
        pubsubService.publish('itemsGenerated');
    }

    function getItems() {
        return items;
    }

    var subscriptions = {//TODO: create dictionary of constants > events
        changePage: pubsubService.subscribe('pageChanged', generateItems),
        changeItemsPerPage: pubsubService.subscribe('itemsPerPageChanged', generateItems)
    };

    app.mainTable = {
        generateItems: generateItems,
        getItems: getItems
    };
};

