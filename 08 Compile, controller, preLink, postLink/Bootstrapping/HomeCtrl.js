(function () {

    function HomeCtrl($scope) {
        console.log("HomeCtrl.ctor");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();