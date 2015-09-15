angular.module('casa').controller('BJSController',
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
        // pause for a few milliseconds before accessing canvas
        setTimeout(function() {
            
            $scope.infos = angular.element(document.getElementById('infos'));
            $scope.canvasElement = angular.element(document.getElementById('renderCanvas'));
            console.log("canvas: "+$scope.canvasElement);
            //$scope.ctx = $scope.canvasElement[0].getContext("webgl");
            //console.log("context: "+$scope.ctx);
  
            // babylon.js
            if (BABYLON.Engine.isSupported()) {
                 console.log("BABYLON.Engine.isSupported");              
                $scope.engine = new BABYLON.Engine($scope.canvasElement[0], true);
/*
                BABYLON.SceneLoader.Load("", "assets/scene.babylon", $scope.engine, function (newScene) {
                    newScene.executeWhenReady(function () {
                        // Attach camera to canvas inputs
                        newScene.activeCamera.attachControl($scope.canvas);

                        // Once the scene is loaded, just register a render loop to render it
                        $scope.engine.runRenderLoop(function() {
                            newScene.render();
                        });
                    });
                }, function (progress) {
                    // To do: give progress feedback to user
                });*/
            }
            // start animation loop
            //requestAnimationFrame($scope.tick);
        }, 2000);

    $scope.tick = function() {
        $scope.framecount++;
        $scope.framez = $scope.framecount;
        requestAnimationFrame($scope.tick);
    }
 
}]);