/**
 * Created by tome on 7/19/15.
 */

define([], function () {
    var subscriptions = {}, counter = 0;
    function subscribe(eventType, callback) {
        subscriptions[eventType] = subscriptions[eventType] || {};
        subscriptions[eventType][counter] = callback;
        return counter++;
    }
    function publish(eventType, args) {
        args = Array.prototype.slice.call(arguments, 1);
        _.forEach(subscriptions[eventType], function (func) {
            func.apply(null, args);
        });
    }
    function unsubscribe(eventType, uniqueID) {
        if (subscriptions[eventType] && subscriptions[eventType][uniqueID]) {
            delete subscriptions[eventType][uniqueID];
        }
    }

    return {
        subscribe: subscribe,
        publish: publish,
        unsubscribe: unsubscribe
    };
});

//modules.pubsub = function (app) {
//    var subscriptions = {}, counter = 0;
//    function subscribe(eventType, callback) {
//        subscriptions[eventType] = subscriptions[eventType] || {};
//        subscriptions[eventType][counter] = callback;
//        return counter++;
//    }
//    function publish(eventType, args) {
//        args = Array.prototype.slice.call(arguments, 1);
//        _.forEach(subscriptions[eventType], function (func) {
//            func.apply(null, args);
//        });
//    }
//    function unsubscribe(eventType, uniqueID) {
//        if (subscriptions[eventType] && subscriptions[eventType][uniqueID]) {
//            delete subscriptions[eventType][uniqueID];
//        }
//    }
//
//    app.pubsub = {
//        subscribe: subscribe,
//        publish: publish,
//        unsubscribe: unsubscribe
//    };
//};
