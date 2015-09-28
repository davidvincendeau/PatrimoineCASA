// générer les marqueurs avec http://terpconnect.umd.edu/~jwelsh12/enes100/markergen.html
// explications http://iplimage.com/blog/create-markers-aruco/
angular.module('casa').controller('ARController',
  ['$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService
      ) {
        var Distance_Variable = 0;
        var distance_fixe = 0;
        var sinAngle = 0;

        $scope.video = null;
        // this has to be done BEFORE webcam authorization
        $scope.channel = {
            videoHeight: 800,
            videoWidth: 600,
            video: null // Will reference the video element on success
        };
        $scope.video = $scope.channel.video;
        $scope.foundMarkerId = 0;
        $scope.arPopupImage = "images/thumbnail.jpg";
        $scope.$on("$stateChangeSuccess", function () {

            if ($scope.locations === undefined) {
                $scope.locations = LocationsService.savedLocations;
            }
            $scope.infos = angular.element(document.getElementById('infos'));
            $scope.msg = angular.element(document.getElementById('msg'));
            $scope.erreur = angular.element(document.getElementById('erreur'));
            $scope.framez = angular.element(document.getElementById('framez'));
        });

        // pause for a few milliseconds before accessing canvas
        setTimeout(function () {
            var imageData;

            // image
            $scope.glfxImage = new Image();
            $scope.glfxImage.src = 'img/abreuvoir_caussols.jpg';
            $scope.glfxImage.onload = function () {
                initGlfx($scope.glfxImage);
            };
            // img
            $scope.infos = angular.element(document.getElementById('infos'));
            // canevas
            $scope.canvas = angular.element(document.getElementById('canevas'));
            console.log("canvas: " + $scope.canvas);
            $scope.ctx = $scope.canvas[0].getContext("2d");

            $scope.ctx.moveTo(0, 0);
            $scope.ctx.lineTo(20, 10);
            $scope.ctx.stroke();
            console.log("context: " + $scope.ctx);

            $scope.detector = new AR.Detector();
            $scope.showMarker(1);
            $scope.msg = "";
            requestAnimationFrame($scope.tick);
        }, 500);

        $scope.framecount = 0;
        $scope.channel = {};
        $scope.onError = function (err) {
            console.log("webcam onError");
            $scope.erreur = "webcam onError:" + err.message;
        };
        $scope.onStream = function (stream) {
            console.log("webcam onStream, frame:" + $scope.framecount);
            $scope.infos = "webcam onStream, frame:" + $scope.framecount;
        };
        $scope.onSuccess = function () {
            console.log("webcam onSuccess, frame:" + $scope.framecount);
            $scope.infos = "webcam onSuccess, frame:" + $scope.framecount;

        };
        var initGlfx = function initGlfx(image) {

            var placeholder = document.getElementById('placeholder');
            // Try to get a WebGL canvas
            try {
                $scope.canvasGlfx = fx.canvas();
            } catch (e) {
                placeholder.innerHTML = e;
                return;
            }
            $scope.canvasGlfx.replace(placeholder);
            // Create a texture from the image and draw it to the canvas
            //$scope.texture = $scope.canvasGlfx.texture(image);
        };
        $scope.showMarker = function (locationKey) {

            $scope.poi = LocationsService.savedLocations[locationKey];
            if ($scope.poi === undefined) {
                $scope.erreur = "identifiant marqueur non reconnu";
            } else {
                $scope.msg = "identifiant marqueur:" + locationKey + " image:" + $scope.poi.vignette;
                $scope.arPopupImage = $scope.poi.vignette;
                $scope.glfxImage = new Image();
                $scope.glfxImage.src = $scope.poi.vignette;
                $scope.glfxImage.onload = function () {
                    if ($scope.canvasGlfx !== undefined) {
                        $scope.texture = $scope.canvasGlfx.texture($scope.glfxImage);
                    }
                };

            }
        };
        // animation loop
        $scope.tick = function () {

            $scope.framecount++;
            // $scope.framez = $scope.framecount;
            $scope.video = $scope.channel.video;
            if ($scope.video) {
                $scope.infos = "video frame available, frame:" + $scope.framecount;
                //console.log("video frame available");
                if ($scope.video.width > 0) {
                    //console.log("video width" + $scope.video.width);
                    var videoData = getVideoData(0, 0, $scope.video.width, $scope.video.height);
                    $scope.ctx.putImageData(videoData, 0, 0);
                    $scope.imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                    imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                    $scope.markers = $scope.detector.detect($scope.imageData);
                    $scope.drawCorners($scope.markers);
                    $scope.drawId($scope.markers);
                    $scope.showMarker($scope.foundMarkerId);
                    // glfx
                    if ($scope.canvasGlfx !== undefined) {
                        if ($scope.glfxImage) { 
                            if ($scope.corners !== undefined) {
                                $scope.canvasGlfx.draw($scope.texture).perspective([0, 0, 186, 0, 186, 124, 0, 124], [$scope.corners[0].x, $scope.corners[0].y, $scope.corners[1].x, $scope.corners[1].y, $scope.corners[2].x, $scope.corners[2].y, $scope.corners[3].x, $scope.corners[3].y]).update();
                            }
                        }
                    }
                }
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
                $scope.ctx.strokeRect(corners[0].x, corners[0].y, 4, 4);
                $scope.ctx.strokeStyle = "yellow";
                $scope.ctx.strokeRect(corners[1].x, corners[1].y, 4, 4);
                $scope.ctx.strokeStyle = "purple";
                $scope.ctx.strokeRect(corners[2].x, corners[2].y, 4, 4);
                $scope.ctx.strokeStyle = "blue";
                $scope.ctx.strokeRect(corners[3].x, corners[3].y, 4, 4);

                // selectionner les coins du 1e marker  

                if (i == 0) {
                    $scope.foundMarkerId = markers[i].id.toString();
                    $scope.corners = markers[i].corners;

                    $scope.ctx.lineWidth = 1;
                    var image = document.querySelector('#image');

                }
            }
            //===== glfx ===============        
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
                // selectionner le 1e marker
                if (i == 0) {
                    $scope.foundMarkerId = markers[i].id.toString();
                }
            }
        }
    }]);