angular.module('casa').controller('AProposController',
  ['$scope',
    '$cordovaGeolocation',
    '$stateParams',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams
      ) {

        var hasMed = function hasMed() {

            navigator.getUserMedia = (navigator.getUserMedia ||
               navigator.webkitGetUserMedia ||
               navigator.mozGetUserMedia ||
               navigator.msGetUserMedia);
            
            if (window.hasUserMedia()) {
                $scope.infos = "Informations techniques: Browser supports getUserMedia.";
            } else {
                $scope.infos = "Informations techniques: Browser does not support getUserMedia.";
            }
            
        };
        $scope.$on('$ionicView.enter', function (e) {
            hasMed();

        });
    }]);