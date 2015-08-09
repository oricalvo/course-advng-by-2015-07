(function () {

    function HomeCtrl($scope, jQuery) {

        $scope.name = {
            text: "",
            address: {
                city: ""
            }
        };

        $("input[type=file]").trigger("click");

        $scope.$watch("name", function (newValue, oldValue, scope) {
            if (newValue == oldValue) {
                return;
            }

            setTimeout(function () {
                yyy = $scope.otherData + $scope.name;
            }, 0);

            $scope.$evalAsync(function () {
                yyy = $scope.otherData + $scope.name;
            });

            console.log("CHANGED: " + oldValue + " --> " + newValue);
        }, true);

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.remove = function (index) {
            $scope.contacts.splice(index, 1);
        }

        $scope.load = function () {
            //$scope.name.text += "X";
            $scope.name.address.city += "Y";

            //require(["LazyController"], function () {
            //    $scope.showLazy = true;

            //    $scope.$apply();
            //});
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
