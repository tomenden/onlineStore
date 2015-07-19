/**
 * Created by tome on 7/19/15.
 */
modules.pagination = function (app) {
    // Dependencies
    var pubsubService = app.pubsub,
        totalNumberOfItems = app.data.getItemsLength();

    var currentPage = 1, itemsPerPage, numberOfPages, stopItemIndex, firstItemIndex;

    function updateIndices() {
        firstItemIndex = itemsPerPage * currentPage - itemsPerPage;
        stopItemIndex = itemsPerPage * currentPage;
    }

    var goToPage = function (pageNumber) {
        pageNumber = (pageNumber <= numberOfPages) ? pageNumber : numberOfPages;
        currentPage = pageNumber;
        updateIndices();
        pubsubService.publish('pageChanged', firstItemIndex, stopItemIndex);
    };
    var getNumberOfPages = function () {
        return numberOfPages;
    };
    var getCurrentPage = function () {
        return currentPage;
    };
    var setItemsPerPage = function (numberOfItemsPerPage) {
        itemsPerPage = numberOfItemsPerPage;
        numberOfPages = Math.ceil(totalNumberOfItems / itemsPerPage);
        updateIndices();
        pubsubService.publish('itemsPerPageChanged', firstItemIndex, stopItemIndex);
    };

    var subscriptions = {
        onItemsSorted: pubsubService.subscribe('items sorted', goToPage.bind(null, 1))
    };

    app.pagination = {
        goToPage: goToPage,
        getNumberOfPages: getNumberOfPages,
        getCurrentPage: getCurrentPage,
        setItemsPerPage: setItemsPerPage
    };
};
