(function () {

    function HomeCtrl($scope) {
        console.log("HomeCtrl.ctor");

        $scope.nums = [1, 2, 3];

        $scope.save = function () {
            console.log("Birthday: " + $scope.birthday);
        }

        $scope.reset = function () {
            $scope.birthday = new Date("7/6/76");
        }

        //$element.find("input").datepicker();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();