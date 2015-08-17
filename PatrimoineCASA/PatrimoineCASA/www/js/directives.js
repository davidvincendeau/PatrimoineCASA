angular.module('starter.directives', [])

.directive('backbutton', [function () {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        template: '<button class="button icon button-clear"></button>',

        compile: function (element, attrs) {
            var icon = ionic.Platform.isIOS() ? 'ion-ios-arrow-back' : 'ion-android-arrow-back';
            angular.element(element[0]).addClass(icon);
        }
    };
}])

.directive('map', function () {
    return {
        restrict: 'E',
        scope: {
            onCreate: '&'
        },
        link: function ($scope, $element, $attr) {
            function initialize() {
                

            }
            if (document.readyState === "complete") {
                initialize();
            }
        }
    }
});
