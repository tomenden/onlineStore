/**
 * Created by tome on 7/19/15.
 */

define([], function () {
    function getAJAX(url, callback, async) {
        async = async || true;
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, async);
        xhr.onload = function () {
            callback(this.responseText);
        };
        xhr.send();
    }

    return {
        getAJAX: getAJAX
    };
});

//modules.UTILS = (function () {
//    function getAJAX(url, callback, async) {
//        async = async || true;
//        var xhr = new XMLHttpRequest();
//        xhr.open('get', url, async);
//        xhr.onload = function () {
//            callback(this.responseText);
//        };
//        xhr.send();
//    }
//
//    return {
//        getAJAX: getAJAX
//    };
//}());