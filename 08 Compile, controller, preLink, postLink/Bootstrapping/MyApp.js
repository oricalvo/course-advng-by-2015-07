var app = angular.module("MyApp", ["ngSanitize"]).run(function ($interpolate,$sce) {
    var fn = $interpolate("{{name}}", undefined, $sce.HTML);

    var data = {
        //name: "<script>alert('XSS')</script>",
        name: "<h1>No XSS</h1>",
    };
    var str = fn(data);

    $(".placeholder").append(str);

    console.log(str);
});

app.directive("dir1", function () {
    var ddo = {
        restrict: "E",
        compile: function () {
            console.log("dir1: compile");

            return {
                pre: function () {
                    console.log("dir1: preLink");
                },
                post: function () {
                    console.log("dir1: postLink");
                }
            };
        }
    };

    return ddo;
});

app.directive("dir2", function () {
    var ddo = {
        restrict: "E",
        compile: function () {
            console.log("dir2: compile");

            return {
                pre: function () {
                    console.log("dir2: preLink");
                },
                post: function () {
                    console.log("dir2: postLink");
                }
            };
        }
    };

    return ddo;
});
