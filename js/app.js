/**
 * Created by tome on 7/3/15.
 */


/********app object****************************************************************************************************************************/
var app = {};

/********Pub/Sub****************************************************************************************************************************/

app.pubsub = (function () {
    var subscriptions = {}, counter = 0;
    var subscribe = function (eventType, callback) {//TODO: allow to accept multiple eventTypes/callbacks
        subscriptions[eventType] = subscriptions[eventType] || {};
        subscriptions[eventType][counter] = callback;
        return counter++;
    };
    var publish = function (eventType, args) {
        args = Array.prototype.slice.call(arguments, 1);
        var subscribers = subscriptions[eventType];
        for (var id in subscribers) {
            if (subscribers.hasOwnProperty(id)) {
                subscribers[id].apply(this, args);
            }
        }
    };
    var unsubscribe = function (eventType, uniqueID) {
        if (subscriptions[eventType] && subscriptions[eventType][uniqueID]) {
            delete subscriptions[eventType][uniqueID];
        }
    };

    return {
        subscribe: subscribe,
        publish: publish,
        unsubscribe: unsubscribe
    }
})();

/********app data****************************************************************************************************************************/

var data = (function (pubsubService) {
    /* Items Data */
    var items = [
        {
            "id": 1,
            "name": "reprehenderit",
            "description": "Laborum veniam aliquip mollit reprehenderit ad id. Qui mollit amet voluptate consequat eiusmod consequat aliquip mollit minim fugiat nulla laborum dolor. Incididunt laborum elit laborum ad ad reprehenderit laboris consectetur dolor officia occaecat non Lorem. ",
            "image": "http://placehold.it/32x32",
            "price": "2682",
            "stock": 5
        },
        {
            "id": 2,
            "name": "pariatur",
            "description": "Duis duis eiusmod cupidatat sint ullamco non ut. Adipisicing pariatur eu eu id amet mollit tempor eiusmod ipsum esse ad elit non. In amet cillum esse nostrud cillum anim consequat aute occaecat. ",
            "image": "http://placehold.it/32x32",
            "price": "6667",
            "stock": 5
        },
        {
            "id": 3,
            "name": "aliquip",
            "description": "Voluptate eiusmod id sit in adipisicing tempor ipsum. Mollit ut amet sint reprehenderit anim incididunt. Pariatur labore tempor eu magna anim exercitation ea adipisicing exercitation adipisicing id aliquip. Amet esse fugiat anim do deserunt veniam voluptate enim duis in labore aliquip est. Ut mollit ullamco veniam consectetur aute sunt sunt consequat culpa nulla tempor quis. Fugiat ut adipisicing sint dolore consequat in nisi id nostrud ipsum. ",
            "image": "http://placehold.it/32x32",
            "price": "4339",
            "stock": 5
        },
        {
            "id": 4,
            "name": "esse",
            "description": "Anim nulla adipisicing reprehenderit laboris sunt nostrud incididunt pariatur nostrud. Laboris consequat cupidatat sit ea exercitation duis dolor. Cillum nostrud et cupidatat laboris culpa tempor non duis eu sint dolor aliquip. Labore magna aliquip commodo magna aliqua. Dolore incididunt dolore ea dolor consectetur consectetur do consectetur cillum culpa. Adipisicing in pariatur minim occaecat. ",
            "image": "http://placehold.it/32x32",
            "price": "584",
            "stock": 5
        },
        {
            "id": 5,
            "name": "fugiat",
            "description": "Anim ut ad do aliqua minim ea nostrud dolore eu laboris cupidatat incididunt. Eu cupidatat esse ex aliquip duis aliqua. Excepteur ad elit do ex occaecat aliquip elit excepteur. Adipisicing aliquip Lorem id non et et quis dolor cillum ipsum culpa do. Adipisicing et quis Lorem in eiusmod ea in cillum. ",
            "image": "http://placehold.it/32x32",
            "price": "9763",
            "stock": 5
        },
        {
            "id": 6,
            "name": "cupidatat",
            "description": "Consectetur sit irure consectetur sunt adipisicing est nisi labore reprehenderit cupidatat aute ipsum. Excepteur ex tempor enim anim cupidatat ex deserunt veniam. Anim proident ut veniam occaecat amet eu ea consectetur. Sunt sunt enim eiusmod tempor anim incididunt veniam nostrud fugiat. Magna ullamco enim adipisicing pariatur incididunt eiusmod velit do. ",
            "image": "http://placehold.it/32x32",
            "price": "9699",
            "stock": 5
        },
        {
            "id": 7,
            "name": "voluptate",
            "description": "Tempor quis elit proident tempor ullamco adipisicing ut duis magna sunt adipisicing dolor do mollit. Exercitation eiusmod cillum id irure do. Minim pariatur commodo pariatur commodo fugiat sint est pariatur consequat id. ",
            "image": "http://placehold.it/32x32",
            "price": "5220",
            "stock": 5
        },
        {
            "id": 8,
            "name": "consequat",
            "description": "Voluptate voluptate esse non est sint reprehenderit voluptate occaecat eiusmod consequat. Velit cillum esse labore consectetur veniam sit tempor quis duis dolor laboris laboris. Qui ad culpa enim proident consequat aute anim dolor mollit laboris commodo dolor cillum ullamco. Magna ut amet non amet eiusmod nulla laboris velit voluptate. Non do dolor id aute est cupidatat tempor et. Cupidatat enim sit enim labore ipsum culpa pariatur aliqua ex ut veniam consectetur. ",
            "image": "http://placehold.it/32x32",
            "price": "6548",
            "stock": 5
        },
        {
            "id": 9,
            "name": "ea",
            "description": "Minim quis eu laboris ipsum eiusmod velit qui exercitation ad nisi consequat nulla duis nisi. Sit adipisicing cupidatat laboris aliqua velit est sint mollit sit consequat occaecat. Velit voluptate proident adipisicing aute dolore velit culpa. Sit duis esse esse est ad eu ex exercitation culpa et ullamco reprehenderit consequat aliqua. Duis mollit veniam magna non minim tempor proident in officia incididunt. ",
            "image": "http://placehold.it/32x32",
            "price": "2538",
            "stock": 5
        },
        {
            "id": 10,
            "name": "et",
            "description": "Nostrud adipisicing mollit minim consequat qui ad consectetur nostrud. Et commodo consectetur commodo culpa amet proident ipsum quis dolor. Occaecat eiusmod irure ea do aute tempor. Adipisicing velit Lorem veniam qui laboris. ",
            "image": "http://placehold.it/32x32",
            "price": "8702",
            "stock": 5
        },
        {
            "id": 11,
            "name": "fugiat",
            "description": "Ullamco et officia sit elit occaecat duis magna fugiat deserunt ipsum do enim sunt enim. Fugiat eu ad nostrud cillum eiusmod do nisi ea anim nostrud occaecat aliqua aliquip aute. Incididunt magna minim non excepteur esse deserunt quis id. Id est amet eiusmod fugiat officia culpa. ",
            "image": "http://placehold.it/32x32",
            "price": "4765",
            "stock": 5
        },
        {
            "id": 12,
            "name": "labore",
            "description": "Veniam ipsum magna sunt sint reprehenderit. Veniam exercitation mollit non cillum anim id et laboris reprehenderit sunt ad sit amet ipsum. Sunt Lorem magna eu laborum deserunt ex elit et. Reprehenderit pariatur adipisicing amet commodo Lorem esse exercitation magna tempor ut est voluptate cupidatat aliquip. Aute nisi proident ullamco deserunt consectetur id amet. ",
            "image": "http://placehold.it/32x32",
            "price": "7629",
            "stock": 5
        },
        {
            "id": 13,
            "name": "adipisicing",
            "description": "Reprehenderit duis id cillum proident consectetur deserunt veniam minim id dolor sunt amet. Lorem aliqua exercitation duis consequat ut aliqua esse. Aute veniam id excepteur deserunt in occaecat non anim fugiat labore. ",
            "image": "http://placehold.it/32x32",
            "price": "5039",
            "stock": 5
        },
        {
            "id": 14,
            "name": "occaecat",
            "description": "Aliquip ullamco sunt qui mollit. Fugiat ad voluptate est aliqua magna eiusmod proident excepteur consequat esse. Tempor irure incididunt eiusmod veniam voluptate laboris amet. Fugiat ullamco ex sit adipisicing exercitation et. Reprehenderit amet occaecat anim aute. ",
            "image": "http://placehold.it/32x32",
            "price": "5102",
            "stock": 5
        },
        {
            "id": 15,
            "name": "excepteur",
            "description": "Culpa irure quis minim labore exercitation. Deserunt nostrud occaecat commodo labore occaecat culpa ea aliqua sint quis velit. Ea aliquip aliquip consectetur deserunt deserunt. Ut enim reprehenderit ipsum non elit dolore id laboris exercitation dolor ex aliqua. Anim aliquip mollit sint Lorem do excepteur officia aliquip sit ut nostrud pariatur ipsum ex. Occaecat duis commodo occaecat consequat culpa deserunt officia laborum enim. Dolore laborum fugiat dolor dolor exercitation commodo id et sunt adipisicing laboris occaecat proident. ",
            "image": "http://placehold.it/32x32",
            "price": "1511",
            "stock": 5
        },
        {
            "id": 16,
            "name": "consectetur",
            "description": "Dolor aute laborum non mollit exercitation voluptate excepteur Lorem voluptate minim occaecat. Esse dolore qui ullamco elit ex nulla sit. Reprehenderit aute ea deserunt ex aliqua velit quis. Irure voluptate incididunt minim minim nostrud duis commodo. Est velit esse tempor et exercitation nulla minim irure nostrud id occaecat. ",
            "image": "http://placehold.it/32x32",
            "price": "8904",
            "stock": 5
        },
        {
            "id": 17,
            "name": "esse",
            "description": "Laboris id enim ea culpa anim deserunt duis velit est magna amet reprehenderit. Amet occaecat ex voluptate eiusmod consequat nostrud non fugiat elit consequat. Ad cupidatat amet mollit nostrud sunt. ",
            "image": "http://placehold.it/32x32",
            "price": "5737",
            "stock": 5
        },
        {
            "id": 18,
            "name": "esse",
            "description": "Commodo ad non velit do consectetur aliquip fugiat excepteur aliqua officia minim. Occaecat consectetur do ut occaecat irure et in occaecat sunt eu qui enim consequat. Dolor ut officia consequat fugiat adipisicing aliquip incididunt quis ea duis. Ut deserunt et reprehenderit eu adipisicing. In laboris sit aliquip consequat tempor adipisicing commodo dolor est ex anim sint. ",
            "image": "http://placehold.it/32x32",
            "price": "9265",
            "stock": 5
        },
        {
            "id": 19,
            "name": "enim",
            "description": "Eiusmod deserunt mollit est tempor laborum deserunt magna nostrud veniam aliquip magna deserunt dolor velit. Cupidatat culpa ut commodo minim incididunt. Duis occaecat eiusmod id minim duis exercitation laboris amet in aliquip eu deserunt do cupidatat. ",
            "image": "http://placehold.it/32x32",
            "price": "7800",
            "stock": 5
        },
        {
            "id": 20,
            "name": "cillum",
            "description": "Sit qui velit deserunt exercitation dolore velit dolore labore veniam non commodo eiusmod commodo. Officia do laborum amet irure qui reprehenderit. Voluptate aliquip aute voluptate cillum tempor ex reprehenderit veniam. ",
            "image": "http://placehold.it/32x32",
            "price": "6916",
            "stock": 5
        },
        {
            "id": 21,
            "name": "in",
            "description": "Voluptate enim eu do magna qui occaecat cupidatat cillum. Incididunt do amet velit sunt fugiat. Cupidatat aute tempor consectetur cillum duis. Elit reprehenderit ullamco ad exercitation reprehenderit proident veniam adipisicing enim sunt occaecat culpa aute. ",
            "image": "http://placehold.it/32x32",
            "price": "2479",
            "stock": 5
        },
        {
            "id": 22,
            "name": "officia",
            "description": "Officia exercitation pariatur Lorem occaecat cupidatat ex incididunt ut minim dolor sunt. Ipsum cillum deserunt sint sunt occaecat fugiat. Voluptate ex qui proident proident. Culpa officia deserunt enim dolore minim aliqua. Id id ullamco voluptate reprehenderit mollit deserunt proident magna. Veniam duis id aliqua tempor in exercitation laborum Lorem magna. Velit ex anim cupidatat consequat mollit laboris et. ",
            "image": "http://placehold.it/32x32",
            "price": "7045",
            "stock": 5
        },
        {
            "id": 23,
            "name": "magna",
            "description": "Minim officia non laboris tempor anim laboris excepteur velit occaecat ad incididunt. Lorem esse sunt pariatur consequat dolor minim ullamco sit. Occaecat cillum et aliqua ullamco ea anim velit esse duis veniam. Cillum duis eiusmod occaecat do fugiat ut. Occaecat deserunt cupidatat adipisicing reprehenderit. In aliquip Lorem aliquip irure. ",
            "image": "http://placehold.it/32x32",
            "price": "8033",
            "stock": 5
        },
        {
            "id": 24,
            "name": "quis",
            "description": "Adipisicing nostrud pariatur fugiat dolore voluptate ad non ex. Reprehenderit reprehenderit ad velit irure laboris sit. Voluptate cillum pariatur dolor labore qui id non sint occaecat anim occaecat aliqua. Occaecat veniam veniam aliqua Lorem nulla veniam ex cillum sunt occaecat exercitation pariatur veniam adipisicing. Irure incididunt enim deserunt pariatur id occaecat in elit irure exercitation. ",
            "image": "http://placehold.it/32x32",
            "price": "1088",
            "stock": 5
        },
        {
            "id": 25,
            "name": "consequat",
            "description": "Est ex pariatur eu veniam ea in. Labore duis officia ut enim. Cillum adipisicing ut deserunt dolor minim enim mollit velit labore laboris sit. Dolor anim duis cillum ut commodo dolore amet dolore dolore ea cillum aute nisi. Nostrud sunt enim consectetur irure sit aute consectetur ipsum in aute laboris ad mollit fugiat. ",
            "image": "http://placehold.it/32x32",
            "price": "9778",
            "stock": 5
        },
        {
            "id": 26,
            "name": "eiusmod",
            "description": "Voluptate esse veniam magna ea ex. Qui eiusmod proident nisi nulla ad enim aute do laboris quis ad velit qui. Pariatur id ipsum sint consequat proident culpa culpa commodo. Ut amet cillum laboris anim sit et pariatur proident. Labore in Lorem eu exercitation eu adipisicing aliqua sint voluptate esse. Enim non cillum reprehenderit consectetur. Ut dolore commodo tempor commodo deserunt. ",
            "image": "http://placehold.it/32x32",
            "price": "5196",
            "stock": 5
        },
        {
            "id": 27,
            "name": "nostrud",
            "description": "Cillum dolor ex veniam sit elit aliqua minim eu sint. Nisi velit cillum tempor in velit in. Laborum aliqua magna labore velit tempor laboris ullamco aute esse sint. Exercitation et esse pariatur do ex. Culpa adipisicing ipsum enim mollit aliqua id labore nostrud. Et quis magna enim ad id ut non qui nisi reprehenderit officia occaecat labore. ",
            "image": "http://placehold.it/32x32",
            "price": "8987",
            "stock": 5
        },
        {
            "id": 28,
            "name": "do",
            "description": "Voluptate minim enim proident eu pariatur in quis dolore veniam amet nostrud dolore. Cupidatat et consectetur labore minim mollit. Dolore laborum amet quis id ipsum quis enim amet mollit quis aliquip nostrud qui. Tempor quis in do ipsum duis est non. Deserunt magna esse anim nulla commodo ex. Duis quis nulla esse labore ipsum nulla qui velit. ",
            "image": "http://placehold.it/32x32",
            "price": "1877",
            "stock": 5
        }
    ];
    (function addOnsaleItemType() {
        for (var i = 0; i < items.length; i += 1) {
            if (i % 5 === 0) {
                items[i] = Object.create(items[i]);
                items[i].type = 'onsale';
                items[i].oldprice = items[i].price;
                items[i].price = Math.floor(items[i].price * 0.75).toString();
            }
        }
    })();
    /* Items methods */
    var getItems = function () {
        return items;
    };
    var getItemsLength = function () {
        return items.length;
    };
    var getItemById = function (id) {
        for (var i = 0; i < items.length; i += 1) {
            if (items[i].id === id) {
                return items[i]
            }
        }
        console.log('could not find item');
    };
    function updateItemStock(item, amount) {
        item.stock -= Number(amount);
    }

    /* Sorting */
    function sortDataLowestFirst(field) {
        items.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            if (a[field] > b[field]) {
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
    var sortData = function (type, field) {
        sortTypes[type](field);
        pubsubService.publish('items sorted');
    };

    /* Coupon Creation */
    var basicCoupon = {
        code: "12345"
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
        'updateStock': pubsubService.subscribe('itemAddedToCart', updateItemStock)
    };

    return {
        getItems: getItems,
        getItemsLength: getItemsLength,
        getItemById: getItemById,
        getMatchingCoupon: getMatchingCoupon,
        sortData: sortData
    };
})(app.pubsub);
app.data = data;
/********main table****************************************************************************************************************************/

mainTable = (function (data, pubsubService) {
    var items = [];
    var generateItems = function (firstItemIndex, stopIndex) {
        var dataLength = app.data.getItemsLength();
        stopIndex = (stopIndex < dataLength) ? stopIndex : dataLength;
        items = data.slice(firstItemIndex, stopIndex);
        app.pubsub.publish('itemsGenerated');
    };
    var getItems = function () {
        return items;
    };

    var subscriptions = {//TODO: create dictionary of constants > events
        changePage: pubsubService.subscribe('pageChanged', function (start, stop) {
            generateItems(start, stop);
        }),
        changeItemsPerPage: pubsubService.subscribe('itemsPerPageChanged', function (start, stop) {
            generateItems(start, stop);
        })
    };

    return {
        generateItems: generateItems,
        getItems: getItems
    };
})(app.data.getItems(), app.pubsub);
app.mainTable = mainTable;

/********pagination****************************************************************************************************************************/

app.pagination = (function (pubsubService, totalNumberOfItems) {
    var currentPage = 1, itemsPerPage, numberOfPages, stopItemIndex, firstItemIndex;

    function updateIndices () {
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
    var getItemsPerPage = function () {
        return itemsPerPage;
    };
    var setItemsPerPage = function (numberOfItemsPerPage) {
        itemsPerPage = numberOfItemsPerPage;
        numberOfPages = Math.ceil(totalNumberOfItems / itemsPerPage);
        updateIndices();
        pubsubService.publish('itemsPerPageChanged', firstItemIndex, stopItemIndex);
    };

    var subscriptions = {
        sortedItems: pubsubService.subscribe('items sorted', goToPage.bind(null, 1))
    };

    return {
        goToPage: goToPage,
        getNumberOfPages: getNumberOfPages,
        getCurrentPage: getCurrentPage,
        getItemsPerPage: getItemsPerPage,
        setItemsPerPage: setItemsPerPage
    };
})(app.pubsub, app.data.getItemsLength());

/********cart****************************************************************************************************************************/

app.cart = (function () {
    var items = [];

    function itemIndexInCart(item) {/* helper for addToCart */
        for (var i = 0; i < items.length; i += 1) {
            if (items[i].id === item.id) {
                return i;
            }
        }
        return -1;
    }

    var addToCart = function (item, amount) {
        amount = parseInt(amount, 10);
        var itemIndex = itemIndexInCart(item);
        if (itemIndex === -1) {
            items.push({
                id: item.id,
                name: item.name,
                amount: amount,
                price: parseInt(item.price, 10) * amount
            });
        }
        else {
            items[itemIndex].amount += amount;
            items[itemIndex].price += amount * parseInt(item.price, 10);
        }
        app.pubsub.publish('itemAddedToCart', item, amount);

    };



    var couponCode;
    var setCouponCode = function (code) {
        couponCode = code;
    };
    var getTotal = function () {
        var amount = 0, price = 0;
        for (var i = 0; i < items.length; i++) {
            amount += items[i].amount;
            price += items[i].price;
        }
        if (couponCode) {
            var oldPrice = price;
            price = getCoupenizedPrice(price, couponCode);
        }
        return {
            amount: amount,
            price: price,
            totalCouponApplied: oldPrice && oldPrice !== price
        };
    };
    var getItems = function () {
        return items;
    };

    function getCoupenizedPrice(regularPrice, couponCode) {
        var coupon = app.data.getMatchingCoupon(couponCode);
        if (coupon && coupon.percentDiscount) {
            return regularPrice * (Number(coupon.percentDiscount) / 100);
        }
        return regularPrice;
    }

    function applyItemsCoupon(couponCode) {
        var coupon = app.data.getMatchingCoupon(couponCode),
            total = getTotal();

        if (coupon && coupon.minimumItemsCount && total.amount >= coupon.minimumItemsCount) {
            var index = getMostExpensiveItemIndex();
            items[index].price -= items[index].price / items[index].amount;
            items[index].couponApplied = true;
        }
        return getItems();
    }

    function getMostExpensiveItemIndex() {
        var item = items.reduce(function (previous, current) {
            if (current.price > Number(previous.price)) {
                return current;
            }
            return previous;
        });
        return itemIndexInCart(item);
    }

    return {
        addToCart: addToCart,
        getTotal: getTotal,
        getItems: getItems,
        getMostExpensiveItemIndex: getMostExpensiveItemIndex,
        applyItemsCoupon: applyItemsCoupon,
        setCouponCode: setCouponCode
    };
})();

/********initialize app with 2 items per page****************************************************************************************************************************/
(function init(data) {
    app.pagination.setItemsPerPage(2);
    app.pagination.goToPage(1);
})(app.data);


app.templating = (function () {
    var templateFiles = [
        {
            name: 'mainView',
            url: 'partials/mainView.hbs',
            callback: function () {
                return updateView('mainView')
            }
        },
        {
            name: 'pageList',
            url: 'partials/pageList.hbs',
            callback: function () {
                return updateView('pageList');
            }
        },
        {
            name: 'cartView',
            url: 'partials/cartView.hbs',
            callback: function () {
                return updateView('cartView');
            }
        }
    ];
    var templates = {};
    var loadTemplate = function (templateName, url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onload = function () {
            templates[templateName] = Handlebars.compile(this.responseText);
            callback();
        };
        xhr.send();
    };
    var initTemplates = (function () {
        for (var i = 0; i < templateFiles.length; i++) {
            loadTemplate(templateFiles[i].name, templateFiles[i].url, templateFiles[i].callback);
        }
    })();
    var initHelpers = (function () {
        Handlebars.registerHelper("currentPageClass", function (page) {
            var currentPage = app.pagination.getCurrentPage();
            if (page === currentPage) {
                return ' current-page';
            } else {
                return '';
            }
        });
        Handlebars.registerHelper('isTotalDiscounted', function (totalPrice) {

        });
        // Console log helper for handlebars. TODO: remove
        Handlebars.registerHelper("log", function (something) {
            console.log(something);
        });
        Handlebars.registerHelper('ifEquals', function (a, b, options) {
            if (a === b) {
                return options.fn(this);
            }

            return options.inverse(this);
        });
    })();

    var views = {
        mainView: {
            getContext: function () {
                return {
                    items: app.mainTable.getItems(),
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
                var numberOfPages = app.pagination.getNumberOfPages(),
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
                    items: app.cart.getItems(),
                    total: app.cart.getTotal()
                };
            },
            getDomElement: function () {
                return document.querySelector('div.cart');
            },
            eventFunc: prepareCartEvents
        }
    };

    var prepareView = function (name, context, eventFunc) {
        var html = templates[name](context);
        var domElement = views[name].getDomElement();
        var container = document.createElement(domElement.tagName);
        container.classList.add(domElement.className);
        container.innerHTML = html;
        if (eventFunc) {
            container = eventFunc(container);
        }

        return container;

    };
    var updateView = function (viewName) {
        var viewElement = prepareView(viewName, views[viewName].getContext(), views[viewName].eventFunc);
        var domElement = views[viewName].getDomElement();
        domElement.parentNode.replaceChild(viewElement, domElement);

    };

    function prepareMainViewEvents(mainViewElement) {
        var heading = mainViewElement.querySelector('.mainView > div.Heading');
        var rows = mainViewElement.querySelectorAll('.Row');
        heading.addEventListener('click', function (event) {
            app.data.sortData(event.target.className, event.target.parentNode.dataset.field);
        });
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            row.addEventListener('change', handleChangeAmountEvent);
        }
        return mainViewElement;
    }

    function prepareCartEvents(cartElement) {
        var couponCodeBox = cartElement.querySelector('input#coupon-code');
        var apply = cartElement.querySelector('button.apply');
        apply.onclick = function () {
            app.pubsub.publish('Apply Coupon Button clicked', couponCodeBox.value);
        };
        return cartElement;
    }

    function handleChangeAmountEvent(event) {
        event = event || window.event;
        var target = event.target,
            amount = Number(target.value),
            item = app.data.getItemById(Number(this.dataset.id)),
            button = this.querySelector('button.addToCartBtn');

        button.disabled = amount < 0 || amount > item.stock;

        button.onclick = function () {
            app.cart.addToCart(item, amount);
        };
    }

    function preparePageListEvents(pageListElement) {
        for (var i = 0; i < pageListElement.children.length; i++) {
            var child = pageListElement.children[i];
            child.onclick = function () {
                app.pagination.goToPage(Number(this.dataset.number));
            };
        }
        return pageListElement;
    }

    (function itemsPerPageEvent(inputElement) {
        inputElement.onchange = function () {
            if (this.value > 0 && this.value < app.data.getItemsLength()) {
                app.pagination.setItemsPerPage(Number(this.value));
            }
        };
    })(document.querySelector('input#items-per-page-input'));

    var subscriptions = {
        updateMainTable: app.pubsub.subscribe('itemsGenerated', function () {
            return updateView('mainView')
        }),
        onPageChanged: app.pubsub.subscribe('pageChanged', function () {
            return updateView('pageList');
        }),
        onItemsPerPageChanged: app.pubsub.subscribe('itemsPerPageChanged', function(){
            updateView('pageList');
        }),

        updateCart: app.pubsub.subscribe('itemAddedToCart', function () {
            updateView('mainView');
            updateView('cartView');
        }),

        coupons: [
            app.pubsub.subscribe('Apply Coupon Button clicked', app.cart.setCouponCode),
            app.pubsub.subscribe('Apply Coupon Button clicked', app.cart.applyItemsCoupon),
            app.pubsub.subscribe('Apply Coupon Button clicked', function () {
                return updateView('cartView');
            })
        ]
    };

})();


