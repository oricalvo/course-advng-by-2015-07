(function () {

    function HomeCtrl($scope) {
        console.log("HomeCtrl.ctor");

        setTimeout(function () {
            $scope.clock1.format = 'ss:HH:mm';
        }, 1000);

        //$scope.$evalAsync(function () {
        //});

        $scope.nums = [1, 2, 3];

        $scope.save = function () {
            console.log("Birthday: " + $scope.birthday);
        }

        $scope.reset = function () {
            $scope.birthday = new Date("7/6/76");
        }

        $scope.onTick = function (e) {
            console.log("Tick: " + e);
        }

        //$scope.format = "ss";

        //$element.find("input").datepicker();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();