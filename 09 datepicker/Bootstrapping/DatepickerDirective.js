angular.module("MyApp").directive("input", function () {
    var ddo = {
        restrict: "E",
        require: ["?ngModel"],
        compile: function (element, attrs) {

            if (attrs.type == "date") {
                console.log("Date input was found");

                //
                //  If running under desktop browser
                //
                element.attr("type", "text");
                attrs.type = "text";
            }

            return function postLink(scope, element, attrs, controllers) {
                var ngModel = controllers[0];
                //console.log(!!ngModel);

                if (!ngModel) {
                    return;
                }

                ngModel.$parsers.push(function (viewValue) {
                    var date = moment(viewValue, "MM/DD/YYYY").toDate();

                    return date;
                });

                ngModel.$formatters.push(function (modelValue) {
                    return moment(modelValue).format("MM/DD/YYYY");
                });

                element.datepicker();
            }
        }
    };

    return ddo;
});
