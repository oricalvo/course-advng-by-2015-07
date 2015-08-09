(function () {

    function HomeCtrl($scope, $timeout, $q) {
        $timeout(function () {
        }, 1000).then(function () {
            //throw new Error("Ooops");
            return $q.reject(new Error("Ooops"));
        }).catch(function (err) {
            console.log("ERROR: " + err.message);
        });
    }

    console.log("BEFORE");

    getAll().then(function () {
        console.log("THEN");
    });

    console.log("AFTER");

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
