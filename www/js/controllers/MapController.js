angular.module('casa').controller('MapController',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    function(
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService
      ) {

      /**
       * Once state loaded, get put map on scope.
       */
      $scope.$on("$stateChangeSuccess", function() {

        $scope.locations = LocationsService.savedLocations;
        $scope.newLocation;

        if(!InstructionsService.instructions.newLocations.seen) {

          var instructionsPopup = $ionicPopup.alert({
            title: 'Add Locations',
            template: InstructionsService.instructions.newLocations.text
          });
          instructionsPopup.then(function(res) {
            InstructionsService.instructions.newLocations.seen = true;
            });

        }

        $scope.map = {
          defaults: {
            tileLayer: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.png',
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
          },
          markers : {},
          events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };

        for (var i = LocationsService.savedLocations.length - 1; i >= 0; i--) {
          $scope.show(i);
        };
         
        $scope.goTo(0);


      });

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };
      $scope.legend = {
              position: 'bottomleft',
              colors: [ '#00ff00', '#28c9ff', '#0000ff', '#ecf386', '#ec0086', '#FF0000' ],
              labels: [ 'Paysages', 'Histoire', 'Religieux', 'Vernaculaire', 'Artistique', 'Contemporain' ]
          };
      var local_icons = {
        default_icon: {},
        leaf_icon: {
            iconUrl: 'img/poterie.jpg',
            shadowUrl: 'img/poterie.jpg',
             iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        },
        ici_icon: {
            type: 'div',
            iconSize: [230, 0],
            html: 'Using <strong>Bold text as an icon</strong>: Lisbon',
            popupAnchor:  [0, 0]
        },
        orange_leaf_icon: {
            iconUrl: 'img/poterie.jpg',
            shadowUrl: 'img/poterie.jpg',
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62]
        }
    };
    $scope.icons = local_icons;

      /**
       * show location
       * @param locationKey
       */
      $scope.show = function(locationKey) {

        var location = LocationsService.savedLocations[locationKey];

        $scope.map.markers[locationKey] = {
          lat:location.lat,
          lng:location.lng,
          message: '<img ng-click="buttonClick('+location.url+')" ng-src="'+location.vignette+'"></img>&nbsp;'+location.name,
          icon: local_icons.default_icon,
          markerColor: location.markerColor,
          focus: true,
          draggable: false
        };

      };

      /**
       * Center map on specific saved location
       * @param locationKey
       */
      $scope.goTo = function(locationKey) {

        var location = LocationsService.savedLocations[locationKey];

        $scope.map.center  = {
          lat : location.lat,
          lng : location.lng,
          zoom : 12
        };

        $scope.map.markers[locationKey] = {
          lat:location.lat,
          lng:location.lng,
          markerColor: location.markerColor,
          message: '<img ng-click="buttonClick('+location.url+')" ng-src="'+location.vignette+'"></img>&nbsp;'+location.name,
          icon: local_icons.default_icon,
         focus: true,
          draggable: false
        };

      };

      /**
       * Center map on user's current position
       */
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 15;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "Vous êtes ici",
              icon: local_icons.ici_icon,
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Erreur de position!");
            console.log(err);
          });

      };

    }]);