angular.module("MyApp").directive("clock", function () {

    var ddo = {
        restrict: "E",
        link: function (scope) {
            scope.name = "XXX";
        },
        scope: {}
    };

    return ddo;
});
