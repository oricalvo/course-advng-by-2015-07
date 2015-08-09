var inj1;
var inj2;

angular.module("MyApp", [])
    .config(function ($provide, $controllerProvider, $injector) {
        inj1 = $injector;
    })
    .run(function ($injector) {
        inj2 = $injector;

        console.log(inj1 == inj2);
    });
