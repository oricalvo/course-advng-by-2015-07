(function () {
    function LazyController($scope) {
        $scope.title = "Lazy Controller !!!";
    }

    window.$controllerProvider.register("LazyController", LazyController);
    //window.$provide.controller("LazyController", LazyController);

    //angular.module("MyApp").controller("LazyController", LazyController);

})();