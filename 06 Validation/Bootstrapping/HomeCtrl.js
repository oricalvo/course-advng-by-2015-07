(function () {

    function HomeCtrl($scope) {
        $scope.save = function () {
            console.log("VALID: " + $scope.form.$valid);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();