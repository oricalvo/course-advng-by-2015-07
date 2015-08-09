(function () {

    function HomeCtrl($scope, logger, $location) {
        console.log(!!logger);

        $scope.run = function () {
            $location.url("blabla");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
