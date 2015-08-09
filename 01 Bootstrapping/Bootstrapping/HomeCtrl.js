function HomeCtrl($scope) {
    $scope.contacts = [
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" },
    ];

    $scope.remove = function (index) {
        $scope.contacts.splice(index, 1);
    }
}


QUnit.test("VerifyThatRemoveRemovesTheContact", function (assert) {
    var scope = {
    };

    var ctrl = new HomeCtrl(scope);

    scope.remove(0);

    assert.equal(scope.contacts.length, 1);
});
