// lire http://blogs.msdn.com/b/eternalcoding/archive/2013/06/27/babylon-js-a-complete-javascript-framework-for-building-3d-games-with-html-5-and-webgl.aspx
angular.module('casa').controller('BJSController',
  ['$scope',
    '$cordovaGeolocation',
    '$cordovaFile',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    function (
      $scope,
      $cordovaGeolocation,
      $cordovaFile, 
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService
      ) {
        $scope.isVideo = false;
        $scope.initialized = false;
        $scope.requestId = undefined;
        $scope.video = null;
        // this has to be done BEFORE webcam authorization
        $scope.channel = {
            videoHeight: 800,
            videoWidth: 600,
            video: null // Will reference the video element on success
        };
        $scope.video = $scope.channel.video;
        $scope.foundMarkerId = -1;
        $scope.alpha = 0.3;

        // http://ionicframework.com/docs/api/directive/ionView/
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {

            // start webcam when back on the page, not the first time
            if ($scope.initialized) {
                $scope.$broadcast('START_WEBCAM');
            }
            $scope.initialized = true;
            // babylon.js
            if (BABYLON.Engine.isSupported()) {
                console.log("BABYLON.Engine.isSupported");
                $scope.engine = new BABYLON.Engine($scope.canvasElement[0], true);
                var createScene = function () {
                    // create a basic BJS Scene object
                    var scene = new BABYLON.Scene($scope.engine);
                    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
                    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 10, -10), scene);
                    // target the camera to scene origin
                    camera.setTarget(BABYLON.Vector3.Zero());
                    // attach the camera to the canvas
                    camera.attachControl($scope.canvasElement[0], false);
                    // create a basic light, aiming 0,1,0 - meaning, to the sky
                    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
                    // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
                    var sphere = new BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
                    // move the sphere upward 1/2 of its height
                    sphere.position.y = 3;
                    var material = new BABYLON.StandardMaterial("default", scene);
                    material.diffuseTexture = new BABYLON.Texture("img/icones/marker-icon-blue.png", scene);
                    material.diffuseTexture.hasAlpha = true;
                    material.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
                    material.backFaceCulling = false;
                    sphere.material = material;
                    // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
                    var ground = new BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
                    ground.material = material;
                    ground.showBoundingBox = true;
                    var dynamicTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
                    dynamicTexture.hasAlpha = true;
                    material.diffuseTexture = dynamicTexture;
                    // animation
                    var step = .01;
                    var alpha = Math.PI;
                    var animate = function () {

                        sphere.material.alpha += step;
                        if (sphere.material.alpha > 1.5 || sphere.material.alpha < -0.5) {
                            step *= -1;
                        }
                        alpha += .1;

                    }
                    scene.beforeRender = function () {
                        // Dynamic
                        var textureContext = dynamicTexture.getContext();
                        var size = dynamicTexture.getSize();
                        var text = "";
                        animate();
                        if ($scope.corners !== undefined) {

                            var corner;
                            for (j = 0; j !== $scope.corners.length; ++j) {
                                if (j == 0) {
                                    corner = $scope.corners[j];
                                    sphere.position.x = corner.x / 100;
                                    sphere.position.z = corner.y / 100;
                                    //$scope.ctx.moveTo(corner.x, corner.y);
                                    //corner = $scope.corners[(j + 1) % corners.length];
                                    //$scope.ctx.lineTo(corner.x, corner.y);
                                    var ar = new BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
                                    ground.material = material;
                                    text = "x:" + corner.x.toString() + ",y:" + corner.y.toString();
                                }
                            }
                        } else {
                            text = $scope.foundMarkerId.toString();
                        }
                        textureContext.save();
                        textureContext.fillStyle = "red";
                        textureContext.fillRect(0, 0, size.width, size.height);

                        textureContext.font = "bold 120px Calibri";
                        var textSize = textureContext.measureText(text);
                        textureContext.fillStyle = "white";
                        textureContext.fillText(text, (size.width - textSize.width) / 2, (size.height - 120) / 2);

                        textureContext.restore();

                        dynamicTexture.update();


                    };
                    // return the created scene
                    return scene;
                }
                var scene = createScene();

                $scope.engine.runRenderLoop(function () {
                    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0);
                    scene.render();
                    //console.log(navigator.compass);
                });

            }

            startAnimation();
        });
        $scope.$on("$ionicView.loaded", function (e) {

            var imageData;
            // canevas
            $scope.canvasElement = angular.element(document.getElementById('renderCanvas'));
            console.log("canvas: " + $scope.canvasElement);

            $scope.canvas = angular.element(document.getElementById('canevas'));
            console.log("canvas: " + $scope.canvas);
            $scope.ctx = $scope.canvas[0].getContext("2d");

            $scope.ctx.moveTo(0, 0);
            $scope.ctx.lineTo(20, 10);
            $scope.ctx.stroke();
            console.log("context: " + $scope.ctx);
            $scope.detector = new AR.Detector();

        });

        $scope.$on("$ionicView.beforeLeave", function (e) {
            stopAnimation();
            $scope.$broadcast('STOP_WEBCAM');
        });

        $scope.channel = {};

        function startAnimation() {
            if (!$scope.requestId) {
                tick();
            }
        }

        function stopAnimation() {
            if ($scope.requestId) {
                window.cancelAnimationFrame($scope.requestId);
                $scope.requestId = undefined;
            }
        }

        $scope.framecount = 0;

        $scope.onError = function (err) {console.log("webcam onError");};
        $scope.onStream = function (stream) {
            console.log("webcam onStream, frame:" + $scope.framecount);
        };
        $scope.onSuccess = function () {
            console.log("webcam onSuccess, frame:" + $scope.framecount);
        };
        function tick() {
            $scope.framecount++;
            $scope.framez = $scope.framecount;
            //navigator.accelerometer.getCurrentAcceleration(accelOnSuccess, accelOnError);

            $scope.video = $scope.channel.video;
             
            if ($scope.video) {
                if ($scope.video.width > 0) {
                    //console.log("video width" + $scope.video.width);
                    var videoData = getVideoData(0, 0, $scope.video.width, $scope.video.height);
                    $scope.ctx.putImageData(videoData, 0, 0);
                    $scope.imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                    imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                    $scope.ctx.moveTo(0,0);
                    $scope.ctx.lineTo(5,5);
                    $scope.ctx.stroke(); 

                    $scope.markers = $scope.detector.detect($scope.imageData);
                    $scope.drawCorners($scope.markers);
                    $scope.drawId($scope.markers);
                }
            } 
            requestAnimationFrame(tick);
        }
        var getVideoData = function getVideoData(x, y, w, h) {
            var hiddenCanvas = document.createElement('canvas');
            hiddenCanvas.width = $scope.video.width;
            hiddenCanvas.height = $scope.video.height;
            var ctx = hiddenCanvas.getContext('2d');
            ctx.drawImage($scope.video, 0, 0, $scope.video.width, $scope.video.height);
            return ctx.getImageData(x, y, w, h);
        };

        // acceleration
        function accelOnSuccess(acceleration) {
            $scope.msg = 'acceleration timeStamp: ' + acceleration.timestamp.toString() + ' x:' + acceleration.x.toString() + ' y:' + acceleration.y.toString() + ' z:' + acceleration.z.toString();
        };

        function accelOnError() {
            $scope.erreur.innerHTML = 'acceleration error ';
        };

        $scope.drawCorners = function (markers) {
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
                // selectionner les coins du 1e marker
                if (i == 0) {
                    $scope.foundMarkerId = markers[i].id.toString();
                    $scope.corners = markers[i].corners;
                }
            }
        }

        $scope.drawId = function (markers) {
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

// pause for a few milliseconds before accessing canvas
/*setTimeout(function () {

    $scope.infos = 'cordova.file.dataDirectory: ' + cordova.file.dataDirectory; 
    $scope.msg = 'cordova.file.dataDirectory: ' + $cordovaFile;

    $cordovaFile.listDir(cordova.file.dataDirectory).then(function (entries) {
        $scope.erreur = 'list dataDirectory: ' + entries;
        console.log('list dataDirectory: ', entries);
    });
    
    $cordovaFile.writeFile(cordova.file.dataDirectory, 'surveys.json', $scope.infos, true).then(function (result) {
        $scope.erreur = 'Success! Survey created!';
        console.log('Success! Survey created!');
    }, function (err) {
        $scope.erreur = '"ERROR Survey not created';
        console.log("ERROR Survey not created");
    });


    $scope.detector = new AR.Detector();*/
// boussole
/*function onSuccess(heading) {
    var element = document.getElementById('infos');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    $scope.erreur.innerHTML = 'Compass error: ' + compassError.code;
};

var options = {
    frequency: 3000
}; // Update every 3 seconds


//var watchID = navigator.compass.watchHeading(onSuccess, onError, options);


}, 500);*/