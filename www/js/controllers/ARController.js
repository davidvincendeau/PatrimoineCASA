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
        console.log("yo: ");
        $scope.canvas = angular.element(document.querySelector('canvas'));
        //$scope.canvasElement = angular.element(document.querySelector('#canvas'));
        //console.log("canvasElement: "+$scope.canvasElement);
        //$scope.canvas = $scope.canvasElement[0];
        console.log("Canvas: "+$scope.canvas);
         $scope.context = $scope.canvas[0].getContext('2d');
        console.log("context: "+$scope.context);
        // webcam
        $scope.canal = {
          // the fields below are all optional
          videoHeight: 800,
          videoWidth: 600,
          video: null // Will reference the video element on success
        };
        $scope.onError = function (err) {console.log("webcam onError: ");};
        $scope.onStream = function (stream) {console.log("webcam onStream: ");};
        $scope.onSuccess = function () {console.log("webcam onSuccess: ");};
    //  Once state loaded
        
      $scope.$on("$stateChangeSuccess", function() {

        $scope.canvasElement = angular.element(document.querySelector('#canvas'));
        console.log("canvasElement: "+$scope.canvasElement);
        $scope.canvas = $scope.canvasElement[0];
        console.log("Canvas: "+$scope.canvas);
        $scope.context = $scope.canvas.getContext('2d');
        console.log("context: "+$scope.context);
         
        $scope.context.moveTo(0,0);
        $scope.context.lineTo(200,100);
        $scope.context.stroke();  

        $scope.video = angular.element(document.querySelector('#video')); 
        console.log("scope.video: "+$scope.video);
        // http://forum.ionicframework.com/t/trouble-with-canvas/20694/2
        //touch event handler. only use first touch in array. drawmark where touch occurred.
        $scope.canvasElement.bind("touchstart", function (event) {

            var coord = canvas.relativeCoords(event.targetTouches[0]);
            // coord[0], coord[1] contain x and y
            console.log("touchstart: "+coord[0]);
        });

        //mousedown event handler. drawMark where click occurred.
        $scope.canvasElement.bind("mousedown", function (event) {
            var coord = canvas.relativeCoords(event);
            console.log("mousedown: "+coord[0]);
        });
        console.log("Canvas width: "+$scope.canvas.width);
 
        $scope.detector = new AR.Detector();
        console.log("scope.video: "+$scope.video);

        console.log("scope.detector: "+$scope.detector);
        console.log("scope.context: "+$scope.context);
 
        //requestAnimationFrame($scope.tick);
      }); //$scope.$on
/*
    $scope.tick = function() {


        if ($scope.video.readyState === $scope.video.HAVE_ENOUGH_DATA) {
           

            var duration = angular.element(document.querySelector('#duration'));
            var vid_duration = Math.round($scope.video.duration);
            duration = vid_duration;
            $scope.snapshot();

            var markers = $scope.detector.detect($scope.imageData);
            $scope.drawCorners(markers);
            $scope.drawId(markers);
        } else {
          console.log("else readyState: "+$scope.video.readyState); 
        }
        requestAnimationFrame($scope.tick);
    }

    $scope.snapshot = function() {
        //console.log("snapshot ");
        var imgObj = new Image();
        imgObj.src = "data:image/png;base64,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";
        //$scope.context.drawImage(imgObj, 0, 0, $scope.canvas.width, $scope.canvas.height);
        //$scope.context.drawImage($scope.video, 0, 0, $scope.canvas.width, $scope.canvas.height);
        $scope.imageData = $scope.context.getImageData(0, 0, $scope.canvas.width, $scope.canvas.height);
    }

    $scope.drawCorners = function(markers) {
        var corners, corner, i, j;

        $scope.context.lineWidth = 3;

        for (i = 0; i !== markers.length; ++i) {
            corners = markers[i].corners;

            context.strokeStyle = "red";
            context.beginPath();

            for (j = 0; j !== corners.length; ++j) {
                corner = corners[j];
                $scope.context.moveTo(corner.x, corner.y);
                corner = corners[(j + 1) % corners.length];
                $scope.context.lineTo(corner.x, corner.y);
            }

            $scope.context.stroke();
            $scope.context.closePath();

            $scope.context.strokeStyle = "green";
            $scope.context.strokeRect(corners[0].x - 2, corners[0].y - 2, 4, 4);
        }
    }

    $scope.drawId = function(markers) {
        var corners, corner, x, y, i, j;

        $scope.context.strokeStyle = "blue";
        $scope.context.lineWidth = 1;

        for (i = 0; i !== markers.length; ++i) {
            corners = markers[i].corners;

            x = Infinity;
            y = Infinity;

            for (j = 0; j !== corners.length; ++j) {
                corner = corners[j];

                x = Math.min(x, corner.x);
                y = Math.min(y, corner.y);
            }

            $scope.context.strokeText(markers[i].id, x, y)
        }
    }*/

    }]);