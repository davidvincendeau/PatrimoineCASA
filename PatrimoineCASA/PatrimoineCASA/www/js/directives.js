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
               var map  = new L.Map("carte", {
                    center: new L.LatLng(43.6048, 7.1418),
                    zoom: 10
                });
                map.addLayer(new L.StamenTileLayer("watercolor", {
                    detectRetina: true
                }));
         
               
                //location notifications
                var options = { "enableHighAccuracy": true, "maximumAge": 0, "timeout": Infinity };
                navigator.geolocation.watchPosition(processPosition, errorPosition, options);

                $scope.onCreate({ map: map });

                // Stop the side bar from dragging when mousedown/tapdown on the map
                //google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                //    e.preventDefault();
                //    return false;
                //});
            }

            if (document.readyState === "complete") {
                initialize();
            } else {
                //google.maps.event.addDomListener(window, 'load', initialize);
            }
            function processPosition(event) {
                status.innerHTML = "Lat : " + event.coords.latitude + "Â° Long : " + event.coords.longitude + "Â° Precision : " + event.coords.accuracy + "m.";
                var coords = [event.coords.latitude, event.coords.longitude];

                 if (!map.getBounds().contains(coords)) {
                    map.setView(coords, 12);
                }

                var distanceTarget = geoDistance(target.latitude, target.longitude, event.coords.latitude, event.coords.longitude);
                
            }

            function errorPosition() {
                status.innerHTML = "No position.";
                
                map.setView([0, 0], 3);
            }
            var popup = L.popup();

            function onMapClick(e) {
                popup
                    .setLatLng(e.latlng)
                    .setContent("You clicked the map at " + e.latlng.toString())
                    .openOn(map);
            }

            map.on('click', onMapClick);
        }
    }
});
