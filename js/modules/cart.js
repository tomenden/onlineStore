/**
 * Created by tome on 7/19/15.
 */
modules.cart = function (app) {
    // Dependencies
    var pubsubService = app.pubsub,
        couponFunc = app.data.getMatchingCoupon;

    var items = [], couponCode;

    function itemIndexInCart(item) {
        for (var i = 0; i < items.length; i += 1) {
            if (items[i].id === item.id) {
                return i;
            }
        }
        return -1;
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
        var amount = 0, price = 0, oldPrice;
        for (var i = 0; i < items.length; i++) {
            amount += items[i].amount;
            price += items[i].price;
        }
        if (couponCode) {
            oldPrice = price;
            price = getCoupenizedPrice(price, couponCode);
        }
        return {
            amount: amount,
            price: price,
            totalCouponApplied: oldPrice && oldPrice !== price
        };
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
        return items.reduce(function (previous, current) {
            if (current.price > Number(previous.price)) {
                return current;
            }
            return previous;
        });
    }

    var subscriptions = {
        onApplyCouponClickedSetCoupon: pubsubService.subscribe('Apply Coupon Button clicked', setCouponCode),
        onApplyCouponClicked: pubsubService.subscribe('Apply Coupon Button clicked', applyItemsCoupon)
    };
    app.cart = {
        addToCart: addToCart,
        getTotal: getTotal,
        getItems: getItems
    };
};
