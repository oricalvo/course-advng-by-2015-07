angular.module("MyApp", [])
    .config(function ($locationProvider, loggerProvider, $injector) {
        $locationProvider.html5Mode(true);

        $injector.get("ABC");
    })
    .run(function ($injector) {
    });

//var Logger = {
//    debug: function (message) {
//        console.log("DEBUG: " + message);
//    }
//};
//angular.module("MyApp").value("logger", Logger);

//function Logger() {
//}

//Logger.prototype.debug = function (message) {
//    console.log("DEBUG: " + message);
//}

//angular.module("MyApp").service("logger", Logger);

//angular.module("MyApp").factory("logger", function () {
//    var privateData;

//    return {
//    };
//});

//function Logger() {
//}

//function LoggerProvider() {
//}

//LoggerProvider.prototype.$get = function () {
//    return new Logger(this.configObj);
//}

//LoggerProvider.prototype.config = function (configObj) {
//    this.configObj = configObj;
//}

//angular.module("MyApp").provider("logger", LoggerProvider);

//angular.module("MyApp").provider("logger", function () {
//    this.$get = function () {
//        return {
//        };
//    }

//    this.config = function () {
//    }
//});

angular.module("MyApp").provider("logger", {
    $get: function () {
        return {
        };
    },

    config: function () {
    }
});

Point.$inject = ["x", "y", "$http"];
function Point(x, y, $http) {
}

var Point = (function () {

    function Point(x, y, $http) {
    }

    return ["x", "y", "$http", Point];

})();


$injector.instantiate(Point);
