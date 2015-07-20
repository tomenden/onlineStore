/**
 * Created by tome on 7/19/15.
 */
modules.data = function (data, app) {
    // Dependencies
    var items = data || [],
        pubsubService = app.pubsub;

    /* Items Data */
    (function addOnsaleItemType() {
        for (var i = 0; i < items.length; i += 1) {
            if (i % 5 === 0) {
                items[i] = Object.create(items[i]);
                items[i].type = 'onsale';
                items[i].oldprice = items[i].price;
                items[i].price = Math.floor(items[i].price * 0.75).toString();
            }
        }
    }());
    /* Items methods */
    function getItems() {
        return items;
    }

    function getItemsLength() {
        return items.length;
    }

    function getItemById(id) {
        for (var i = 0; i < items.length; i += 1) {
            if (items[i].id === id) {
                return items[i];
            }
        }
    }

    function updateItemStock(item, amount) {
        item.stock -= Number(amount);
    }

    /* Sorting */
    function sortDataLowestFirst(field) {
        items.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            } else if (a[field] > b[field]) {
                return 1;
            }
            return 0;
        });
        return items;
    }

    var sortTypes = {
        'sort-lowestFirst': sortDataLowestFirst,
        'sort-highestFirst': function (field) {
            return sortDataLowestFirst(field).reverse();
        }
    };

    function sortData(type, field) {
        sortTypes[type](field);
        pubsubService.publish('items sorted');
    }

    /* Coupon Creation */
    var basicCoupon = {
        code: '12345'
    };

    function createTotalPercentageCoupon(code, percentage) {
        var totalCoupon = Object.create(basicCoupon);
        totalCoupon.code = code;
        totalCoupon.percentDiscount = percentage;
        return totalCoupon;
    }

    function createFreeItemCoupon(code, minimumItemsCount) {
        var freeItemCoupon = Object.create(basicCoupon);
        freeItemCoupon.code = code;
        freeItemCoupon.minimumItemsCount = minimumItemsCount;
        return freeItemCoupon;
    }

    /* Coupon Data */
    var coupons = [
        createTotalPercentageCoupon('Totally', '50'),
        createFreeItemCoupon('12345', 3)
    ];
    /* Coupon Methods */
    function getMatchingCoupon(code) {
        for (var i = 0; i < coupons.length; i++) {
            if (coupons[i].code === code) {
                return coupons[i];
            }
        }
        console.log('invalid coupon');
    }

    /* Subscriptions */
    var subscriptions = {
        updateStock: pubsubService.subscribe('itemAddedToCart', updateItemStock)
    };

    app.data = {
        getItems: getItems,
        getItemsLength: getItemsLength,
        getItemById: getItemById,
        getMatchingCoupon: getMatchingCoupon,
        sortData: sortData
    };
};
