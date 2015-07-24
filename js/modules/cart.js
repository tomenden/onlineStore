/**
 * Created by tome on 7/19/15.
 */

define(['pubsubService', 'data'], function (pubsubService, data) {
    var couponFunc = data.getMatchingCoupon;

    var items = [], couponCode;

    function itemIndexInCart(item) {
        return _.findIndex(items, function (anItem) {
            return anItem.id === item.id;
        })
    }

    function addToCart(item, amount) {
        amount = parseInt(amount, 10);
        var itemIndex = itemIndexInCart(item);
        if (itemIndex === -1) {
            items.push({
                id: item.id,
                name: item.name,
                amount: amount,
                price: parseInt(item.price, 10) * amount
            });
        } else {
            items[itemIndex].amount += amount;
            items[itemIndex].price += amount * parseInt(item.price, 10);
        }
        pubsubService.publish('itemAddedToCart', item, amount);
    }

    function getTotal() {
        var result = _.reduce(items, function (accumulated, item) {
            accumulated.amount += item.amount;
            accumulated.price += item.price;
            return accumulated;
        }, {amount: 0, price: 0, totalCouponApplied: false});

        if (couponCode && getCoupenizedPrice(result.price, couponCode) !== result.price) {
            result.price = getCoupenizedPrice(result.price, couponCode);
            result.totalCouponApplied = true;
        }

        return result;
    }

    function getItems() {
        return items;
    }

    function setCouponCode(code) {
        couponCode = code;
    }

    function getCoupenizedPrice(regularPrice, code) {
        var coupon = couponFunc(code);
        if (coupon && coupon.percentDiscount) {
            return regularPrice * (Number(coupon.percentDiscount) / 100);
        }
        return regularPrice;
    }

    function applyItemsCoupon(code) {
        var coupon = couponFunc(code),
            total = getTotal();
        if (coupon && coupon.minimumItemsCount && total.amount >= coupon.minimumItemsCount) {
            var item = getMostExpensiveItem();
            item.price -= item.price / item.amount;
            item.couponApplied = true;
        }
        return getItems();
    }

    function getMostExpensiveItem() {
        return _.max(items, function (item) {
            return item.price;
        });
    }

    var subscriptions = {
        onApplyCouponClickedSetCoupon: pubsubService.subscribe('Apply Coupon Button clicked', setCouponCode),
        onApplyCouponClicked: pubsubService.subscribe('Apply Coupon Button clicked', applyItemsCoupon)
    };
    return {
        addToCart: addToCart,
        getTotal: getTotal,
        getItems: getItems
    };
});


//modules.cart = function (app) {
//    // Dependencies
//    var pubsubService = app.pubsub,
//        couponFunc = app.data.getMatchingCoupon;
//
//    var items = [], couponCode;
//
//    function itemIndexInCart(item) {
//        return _.findIndex(items, function(anItem) {
//            return anItem.id === item.id;
//        })
//    }
//
//    function addToCart(item, amount) {
//        amount = parseInt(amount, 10);
//        var itemIndex = itemIndexInCart(item);
//        if (itemIndex === -1) {
//            items.push({
//                id: item.id,
//                name: item.name,
//                amount: amount,
//                price: parseInt(item.price, 10) * amount
//            });
//        } else {
//            items[itemIndex].amount += amount;
//            items[itemIndex].price += amount * parseInt(item.price, 10);
//        }
//        pubsubService.publish('itemAddedToCart', item, amount);
//    }
//
//    function getTotal() {
//        var result = _.reduce(items, function (accumulated, item) {
//            accumulated.amount += item.amount;
//            accumulated.price += item.price;
//            return accumulated;
//        }, {amount: 0, price: 0, totalCouponApplied: false});
//
//        if (couponCode && getCoupenizedPrice(result.price, couponCode) !== result.price) {
//            result.price = getCoupenizedPrice(result.price, couponCode);
//            result.totalCouponApplied = true;
//        }
//
//        return result;
//    }
//
//    function getItems() {
//        return items;
//    }
//
//    function setCouponCode(code) {
//        couponCode = code;
//    }
//
//    function getCoupenizedPrice(regularPrice, code) {
//        var coupon = couponFunc(code);
//        if (coupon && coupon.percentDiscount) {
//            return regularPrice * (Number(coupon.percentDiscount) / 100);
//        }
//        return regularPrice;
//    }
//
//    function applyItemsCoupon(code) {
//        var coupon = couponFunc(code),
//            total = getTotal();
//        if (coupon && coupon.minimumItemsCount && total.amount >= coupon.minimumItemsCount) {
//            var item = getMostExpensiveItem();
//            item.price -= item.price / item.amount;
//            item.couponApplied = true;
//        }
//        return getItems();
//    }
//
//    function getMostExpensiveItem() {
//        return _.max(items, function (item) {
//            return item.price;
//        });
//    }
//
//    var subscriptions = {
//        onApplyCouponClickedSetCoupon: pubsubService.subscribe('Apply Coupon Button clicked', setCouponCode),
//        onApplyCouponClicked: pubsubService.subscribe('Apply Coupon Button clicked', applyItemsCoupon)
//    };
//    app.cart = {
//        addToCart: addToCart,
//        getTotal: getTotal,
//        getItems: getItems
//    };
//};
