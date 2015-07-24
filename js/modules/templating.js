/**
 * Created by tome on 7/19/15.
 */

define(['mainTable', 'pagination', 'cart', 'pubsubService', 'data'], function (mainTable, pagination, cart, pubsubService, data) {
    var views = {
        mainView: {
            getContext: function () {
                return {
                    items: mainTable.getItems(),
                    properties: ['id', 'name', 'description', 'image', 'price', 'stock']
                };
            },
            getDomElement: function () {
                return document.querySelector('div.mainTable > div.mainView');
            },
            eventFunc: prepareMainViewEvents
        },
        pageList: {
            getContext: function () {
                var numberOfPages = pagination.getNumberOfPages(),
                    pages = [];
                for (var i = 1; i <= numberOfPages; i++) {
                    pages.push(i);
                }
                return {pages: pages};
            },
            getDomElement: function () {
                return document.querySelector('nav > ul.pageList');
            },
            eventFunc: preparePageListEvents

        },
        cartView: {
            getContext: function () {
                return {
                    items: cart.getItems(),
                    total: cart.getTotal()
                };
            },
            getDomElement: function () {
                return document.querySelector('div.cart');
            },
            eventFunc: prepareCartEvents
        }
    };

    function init() {
        _.forOwn(Object.keys(views), updateView);
    }

    function prepareView(name, context, eventFunc) {
        var html = templates[name](context);
        var domElement = views[name].getDomElement();
        var container = document.createElement(domElement.tagName);
        container.classList.add(domElement.className);
        container.innerHTML = html;
        if (eventFunc) {
            container = eventFunc(container);
        }

        return container;
    }

    function updateView(viewName) {
        var viewElement = prepareView(viewName, views[viewName].getContext(), views[viewName].eventFunc);
        var domElement = views[viewName].getDomElement();
        domElement.parentNode.replaceChild(viewElement, domElement);

    }


    function prepareMainViewEvents(mainViewElement) {
        var heading = mainViewElement.querySelector('.mainView > div.Heading');
        var rows = mainViewElement.querySelectorAll('.Row');
        heading.addEventListener('click', function (event) {
            data.sortData(event.target.className, event.target.parentNode.dataset.field);
        });
        _.invoke(rows, addEventListener, 'change', handleChangeAmountEvent);
        return mainViewElement;
    }

    function handleChangeAmountEvent(event) {
        event = event || window.event;
        var target = event.target,
            amount = Number(target.value),
            item = data.getItemById(Number(this.dataset.id)),
            button = this.querySelector('button.addToCartBtn');

        button.disabled = amount < 0 || amount > item.stock;

        button.onclick = function () {
            cart.addToCart(item, amount);
        };
    }

    function prepareCartEvents(cartElement) {
        var couponCodeBox = cartElement.querySelector('input#coupon-code');
        var apply = cartElement.querySelector('button.apply');
        apply.onclick = function () {
            pubsubService.publish('Apply Coupon Button clicked', couponCodeBox.value);
        };
        return cartElement;
    }

    /* eslint-disable no-loop-func */
    function preparePageListEvents(pageListElement) {
        _.forEach(pageListElement.children, function (child) {
            child.onclick = function () {
                pagination.goToPage(Number(this.dataset.number));
            };
        });
        return pageListElement;
    }

    /* eslint-enable no-loop-func */

    (function itemsPerPageEvent(inputElement) {
        inputElement.onchange = function () {
            if (this.value > 0 && this.value < data.getItemsLength()) {
                pagination.setItemsPerPage(Number(this.value));
            }
        };
    }(document.querySelector('input#items-per-page-input')));

    var subscriptions = {
        updateMainTable: pubsubService.subscribe('itemsGenerated', function () {
            return updateView('mainView');
        }),
        onPageChanged: pubsubService.subscribe('pageChanged', function () {
            return updateView('pageList');
        }),
        onItemsPerPageChanged: pubsubService.subscribe('itemsPerPageChanged', function () {
            updateView('pageList');
        }),

        updateCart: pubsubService.subscribe('itemAddedToCart', function () {
            updateView('mainView');
            updateView('cartView');
        }),

        coupons: [
            pubsubService.subscribe('Apply Coupon Button clicked', function () {
                return updateView('cartView');
            })
        ]
    };

    return {
        init: init
    };
});

//modules.templating = function (app) {
    // Dependencies
//    var mainTable = app.mainTable,
//        pagination = app.pagination,
//        cart = app.cart;
//
//    var views = {
//        mainView: {
//            getContext: function () {
//                return {
//                    items: mainTable.getItems(),
//                    properties: ['id', 'name', 'description', 'image', 'price', 'stock']
//                };
//            },
//            getDomElement: function () {
//                return document.querySelector('div.mainTable > div.mainView');
//            },
//            eventFunc: prepareMainViewEvents
//        },
//        pageList: {
//            getContext: function () {
//                var numberOfPages = pagination.getNumberOfPages(),
//                    pages = [];
//                for (var i = 1; i <= numberOfPages; i++) {
//                    pages.push(i);
//                }
//                return {pages: pages};
//            },
//            getDomElement: function () {
//                return document.querySelector('nav > ul.pageList');
//            },
//            eventFunc: preparePageListEvents
//
//        },
//        cartView: {
//            getContext: function () {
//                return {
//                    items: cart.getItems(),
//                    total: cart.getTotal()
//                };
//            },
//            getDomElement: function () {
//                return document.querySelector('div.cart');
//            },
//            eventFunc: prepareCartEvents
//        }
//    };
//
//    function init() {
//        _.forOwn(Object.keys(views), updateView);
//    }
//
//    function prepareView(name, context, eventFunc) {
//        var html = templates[name](context);
//        var domElement = views[name].getDomElement();
//        var container = document.createElement(domElement.tagName);
//        container.classList.add(domElement.className);
//        container.innerHTML = html;
//        if (eventFunc) {
//            container = eventFunc(container);
//        }
//
//        return container;
//    }
//
//    function updateView(viewName) {
//        var viewElement = prepareView(viewName, views[viewName].getContext(), views[viewName].eventFunc);
//        var domElement = views[viewName].getDomElement();
//        domElement.parentNode.replaceChild(viewElement, domElement);
//
//    }
//
//
//    function prepareMainViewEvents(mainViewElement) {
//        var heading = mainViewElement.querySelector('.mainView > div.Heading');
//        var rows = mainViewElement.querySelectorAll('.Row');
//        heading.addEventListener('click', function (event) {
//            app.data.sortData(event.target.className, event.target.parentNode.dataset.field);
//        });
//        _.invoke(rows, addEventListener, 'change', handleChangeAmountEvent);
//        return mainViewElement;
//    }
//
//    function handleChangeAmountEvent(event) {
//        event = event || window.event;
//        var target = event.target,
//            amount = Number(target.value),
//            item = app.data.getItemById(Number(this.dataset.id)),
//            button = this.querySelector('button.addToCartBtn');
//
//        button.disabled = amount < 0 || amount > item.stock;
//
//        button.onclick = function () {
//            app.cart.addToCart(item, amount);
//        };
//    }
//
//    function prepareCartEvents(cartElement) {
//        var couponCodeBox = cartElement.querySelector('input#coupon-code');
//        var apply = cartElement.querySelector('button.apply');
//        apply.onclick = function () {
//            app.pubsub.publish('Apply Coupon Button clicked', couponCodeBox.value);
//        };
//        return cartElement;
//    }
//
//    /* eslint-disable no-loop-func */
//    function preparePageListEvents(pageListElement) {
//        _.forEach(pageListElement.children, function (child) {
//            child.onclick = function () {
//                pagination.goToPage(Number(this.dataset.number));
//            };
//        });
//        return pageListElement;
//    }
//
//    /* eslint-enable no-loop-func */
//
//    (function itemsPerPageEvent(inputElement) {
//        inputElement.onchange = function () {
//            if (this.value > 0 && this.value < app.data.getItemsLength()) {
//                app.pagination.setItemsPerPage(Number(this.value));
//            }
//        };
//    }(document.querySelector('input#items-per-page-input')));
//
//    var subscriptions = {
//        updateMainTable: app.pubsub.subscribe('itemsGenerated', function () {
//            return updateView('mainView');
//        }),
//        onPageChanged: app.pubsub.subscribe('pageChanged', function () {
//            return updateView('pageList');
//        }),
//        onItemsPerPageChanged: app.pubsub.subscribe('itemsPerPageChanged', function () {
//            updateView('pageList');
//        }),
//
//        updateCart: app.pubsub.subscribe('itemAddedToCart', function () {
//            updateView('mainView');
//            updateView('cartView');
//        }),
//
//        coupons: [
//            app.pubsub.subscribe('Apply Coupon Button clicked', function () {
//                return updateView('cartView');
//            })
//        ]
//    };
//
//    app.templating = {
//        init: init
//    };
//};
