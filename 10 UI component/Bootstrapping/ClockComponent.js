angular.module("MyApp").directive("clock", function () {

    function ClockComponent($scope, $interval, $parse, $attrs) {
        var me = this;

        me.$interval = $interval;

        me.intervalId = $interval(function () {
            me.onInterval();
        }, 1000);

        if ($attrs.name) {
            var parseFn = $parse($attrs.name);
            var setter = parseFn.assign;
            if (!setter) {
                throw new Error("Expression is not assignable: " + $attrs.name);
            }

            setter($scope.$parent, me);
        }

        if ($attrs.format) {
            $scope.$parent.$watch($attrs.format, function (newValue) {
                me.format = newValue;
            });
        }


        me.updateTime();
    }

    ClockComponent.prototype.stop = function () {
        if (!this.intervalId) {
            return;
        }

        this.$interval.cancel(this.intervalId);
    }

    ClockComponent.prototype.onInterval = function () {
        this.updateTime();

        this.onTick({time: this.time});
    }

    ClockComponent.prototype.updateTime = function () {
        this.time = new Date();
    }

    function updateTime() {
    }

    var ddo = {
        restrict: "E",
        templateUrl: "Clock.html",
        controller: ClockComponent,
        controllerAs: "ctrl",
        scope: {
            //format: "=",
            onTick: "&",
        },
        bindToController: true,
    };

    return ddo;
});
