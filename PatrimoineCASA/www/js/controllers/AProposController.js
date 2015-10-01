angular.module('casa').controller('AProposController',
  ['$scope',
    '$cordovaGeolocation',
    '$stateParams',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams
      ) {

        // http://ionicframework.com/docs/api/directive/ionView/
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {
            var videoSources = [];

            function gotSources(sourceInfos) {
                $scope.infos = "Sources: "
                for (var i = 0; i !== sourceInfos.length; ++i) {
                    var sourceInfo = sourceInfos[i];
                    if (sourceInfo.kind === 'video') {
                        $scope.infos += "Video " + i + ", facing: " + sourceInfo.facing + ", label: " + sourceInfo.label + ", id: " + sourceInfo.id;
                        console.log("sourceInfo:" + sourceInfo.id);
                        videoSources.push(sourceInfo);
                    }
                }
                // force cameraid within videoSources bounds
                if (videoSources.length > 0 && $scope.cameraid >= videoSources.length) $scope.cameraid = videoSources.length - 1;
                
            }
            if (typeof MediaStreamTrack !== 'undefined') {
                if (typeof MediaStreamTrack.getSources !== 'undefined') {
                    MediaStreamTrack.getSources(gotSources);
                }
            }
        });
        $scope.$on("$ionicView.loaded", function (e) {

        });

        $scope.$on("$ionicView.beforeLeave", function (e) {

        });


    }]);