// générer les marqueurs avec http://terpconnect.umd.edu/~jwelsh12/enes100/markergen.html
// explications http://iplimage.com/blog/create-markers-aruco/
angular.module('casa').controller('ARController',
  ['$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'ARService',
    'InstructionsService',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      ARService,
      InstructionsService
      ) {
        //var Distance_Variable = 0;
        //var distance_fixe = 0;
        //var sinAngle = 0;

        $scope.video = null;
        // this has to be done BEFORE webcam authorization
        $scope.channel = {
            videoHeight: 800,
            videoWidth: 600,
            video: null // Will reference the video element on success
        };
        $scope.video = $scope.channel.video;
        $scope.foundMarkerId = 0;

        $scope.$on("$stateChangeSuccess", function () {

            if ($scope.locations === undefined) {
                $scope.locations = ARService.savedLocations;
            }
        });

        // pause for 500 milliseconds before accessing canvas
        setTimeout(function () {

            //var imageData;
            initGlfx();
            // canevas
            $scope.canvas = angular.element(document.getElementById('canevas'));
            $scope.ctx = $scope.canvas[0].getContext("2d");
            $scope.detector = new AR.Detector();
            //$scope.showMarker(1);
            // init ok, animation loop
            requestAnimationFrame($scope.tick);
        }, 500);

        $scope.channel = {};
        $scope.onError = function (err) {
            $scope.infos = "webcam onError";

            //console.log("webcam onError");
        };
        $scope.onStream = function (stream) {
            //$scope.infos = "webcam onStream";
            //console.log("webcam onStream, frame:" + $scope.framecount);
        };
        $scope.onSuccess = function () {
            //$scope.infos = "webcam onSuccess";
            //console.log("webcam onSuccess, frame:" + $scope.framecount);
        };
        // remplace le placeholder par un canvas créé par glfx
        var initGlfx = function initGlfx() {

            var placeholder = document.getElementById('placeholder');
            // Try to get a WebGL canvas
            try {
                $scope.canvasGlfx = fx.canvas();
            } catch (e) {
                placeholder.innerHTML = e;
                return;
            }
            $scope.canvasGlfx.replace(placeholder);
        };
        // affiche l'image du marker id correspondant
        $scope.showMarker = function (locationKey) {

            $scope.poi = ARService.savedLocations[locationKey];
            if ($scope.poi !== undefined) {
                //$scope.arPopupImage = $scope.poi.vignette;
                $scope.glfxImage = new Image();
                $scope.glfxImage.src = $scope.poi.vignette;
                $scope.glfxImage.onload = function () {
                    if ($scope.canvasGlfx !== undefined) {
                        $scope.texture = $scope.canvasGlfx.texture($scope.glfxImage);
                    }
                }
            }
        };
        // animation loop
        $scope.tick = function () {

            $scope.video = $scope.channel.video;
            if ($scope.video) {
                if ($scope.video.width > 0) {
                    //console.log("video width" + $scope.video.width);
                    var videoData = getVideoData(0, 0, $scope.video.width, $scope.video.height);
                    $scope.ctx.putImageData(videoData, 0, 0);
                    $scope.imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                    $scope.markers = $scope.detector.detect($scope.imageData);
                    $scope.drawCorners($scope.markers);
                    $scope.drawId($scope.markers);
                    $scope.showMarker($scope.foundMarkerId);
                    // glfx
                    if ($scope.canvasGlfx !== undefined && $scope.glfxImage && $scope.corners !== undefined) {
                        $scope.canvasGlfx.draw($scope.texture).perspective([0, 0, $scope.glfxImage.width, 0, $scope.glfxImage.width, $scope.glfxImage.height, 0, $scope.glfxImage.height], [$scope.corners[0].x, $scope.corners[0].y, $scope.corners[1].x, $scope.corners[1].y, $scope.corners[2].x, $scope.corners[2].y, $scope.corners[3].x, $scope.corners[3].y]).update();
                        // afficher le texte correspondant
                        $scope.infos = "img, w:" + $scope.glfxImage.width + " mark, x:" + $scope.corners[0].x ;
                        console.log($scope.infos);
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
                // selectionner le 1e marker
                if (i == 0) {
                    $scope.foundMarkerId = markers[i].id.toString();
                }
            }
        }
    }]);