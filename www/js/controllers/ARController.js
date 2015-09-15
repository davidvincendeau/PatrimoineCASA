angular.module('casa').controller('ARController',
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
        $scope.video = null;
        // this has to be done BEFORE webcam authorization
        $scope.channel = {
          videoHeight: 800,
          videoWidth: 600,
          video: null // Will reference the video element on success
        };
        $scope.video = $scope.channel.video;

        // pause for a few milliseconds before accessing canvas
        setTimeout(function() {
            
            $scope.infos = angular.element(document.getElementById('infos'));
            $scope.canvas = angular.element(document.getElementById('canevas'));
            console.log("canvas: "+$scope.canvas);
            $scope.ctx = $scope.canvas[0].getContext("webgl");
            /*$scope.ctx = $scope.canvas[0].getContext("2d");
            $scope.ctx.moveTo(0,0);
            $scope.ctx.lineTo(200,100);
            $scope.ctx.stroke(); */
            console.log("context: "+$scope.ctx);
    
            $scope.detector = new AR.Detector();


            // babylon.js
            //$scope.babyloncanvas = angular.element(document.getElementById('babyloncanvas'));
            //console.log("babyloncanvas: "+$scope.babyloncanvas);

            if (BABYLON.Engine.isSupported()) {
                 console.log("BABYLON.Engine.isSupported");
               
                var engine = new BABYLON.Engine($scope.canvas[0], true);//antialias true
                var createScene = function(){
                    // create a basic BJS Scene object
                    var scene = new BABYLON.Scene(engine);
                    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
                    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);
                    // target the camera to scene origin
                    camera.setTarget(BABYLON.Vector3.Zero());
                    // attach the camera to the canvas
                    camera.attachControl($scope.canvas[0], false);
                    // create a basic light, aiming 0,1,0 - meaning, to the sky
                    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
                    // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
                    var sphere = new BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
                    // move the sphere upward 1/2 of its height
                    sphere.position.y = 1;
                    // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
                    var ground = new BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
                        // return the created scene
                    return scene;
                }
                var scene = createScene();
                engine.runRenderLoop(function(){
                    scene.render();
                });
            }
            // start animation loop
            requestAnimationFrame($scope.tick);
        }, 1000);

    $scope.framecount = 0;
    $scope.channel = {};
    $scope.onError = function (err) {console.log("webcam onError");};
    $scope.onStream = function (stream) {
        console.log("webcam onStream, frame:" + $scope.framecount);
    };
    $scope.onSuccess = function () {
        console.log("webcam onSuccess, frame:" + $scope.framecount);
    };

    $scope.tick = function() {
        $scope.framecount++;
        $scope.framez = $scope.framecount;

        $scope.video = $scope.channel.video;
         
        if ($scope.video) {
            $scope.infos = "video frame available, frame:" + $scope.framecount; 
            //console.log("video frame available");
            
            if ($scope.video.width > 0) {
                //console.log("video width" + $scope.video.width);
                var videoData = getVideoData(0, 0, $scope.video.width, $scope.video.height);
                $scope.ctx.putImageData(videoData, 0, 0);
                $scope.imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                $scope.ctx.moveTo(0,0);
                $scope.ctx.lineTo(200,100);
                $scope.ctx.stroke(); 


                $scope.markers = $scope.detector.detect($scope.imageData);
                $scope.drawCorners($scope.markers);
                $scope.drawId($scope.markers);

            }
         } else {
            //$scope.infos = "video frame not available"; 
        }
        requestAnimationFrame($scope.tick);
    }
    var getVideoData = function getVideoData(x, y, w, h) {
        var hiddenCanvas = document.createElement('canvas');
        hiddenCanvas.width = $scope.video.width;
        hiddenCanvas.height = $scope.video.height;
        var ctx = hiddenCanvas.getContext('2d');
        ctx.drawImage($scope.video, 0, 0, $scope.video.width, $scope.video.height);
        return ctx.getImageData(x, y, w, h);
    };

    $scope.drawCorners = function(markers) {
        var corners, corner, i, j;

        $scope.ctx.lineWidth = 3;

        for (i = 0; i !== markers.length; ++i) {
            corners = markers[i].corners;

            $scope.ctx.strokeStyle = "red";
            $scope.ctx.beginPath();

            for (j = 0; j !== corners.length; ++j) {
                corner = corners[j];
                $scope.ctx.moveTo(corner.x, corner.y);
                corner = corners[(j + 1) % corners.length];
                $scope.ctx.lineTo(corner.x, corner.y);
            }

            $scope.ctx.stroke();
            $scope.ctx.closePath();

            $scope.ctx.strokeStyle = "green";
            $scope.ctx.strokeRect(corners[0].x - 2, corners[0].y - 2, 4, 4);
        }
    }

    $scope.drawId = function(markers) {
        var corners, corner, x, y, i, j;

        $scope.ctx.strokeStyle = "blue";
        $scope.ctx.lineWidth = 1;

        for (i = 0; i !== markers.length; ++i) {
            corners = markers[i].corners;

            x = Infinity;
            y = Infinity;

            for (j = 0; j !== corners.length; ++j) {
                corner = corners[j];

                x = Math.min(x, corner.x);
                y = Math.min(y, corner.y);
            }

            $scope.ctx.strokeText(markers[i].id, x, y)
        }
    }

    }]);