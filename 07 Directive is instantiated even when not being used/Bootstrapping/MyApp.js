var app = angular.module("MyApp", []);

app.directive("myDir", function () {
    console.log("myDir: ctor");

    var ddo = {
        restrict: "A",
        compile: function () {
            console.log("myDir: compile");

            return function postLink() {
            }
        }
    };

    return ddo;
});
