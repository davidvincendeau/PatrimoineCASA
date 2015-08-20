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

    // aruco
      /**
       * Once state loaded
       */
      $scope.$on("$stateChangeSuccess", function() {

        $scope.canvasElement = angular.element(document.querySelector('#canvas'));
        $scope.canvas = $scope.canvasElement[0];
        $scope.context = $scope.canvas.getContext('2d');
        console.log("Canvas: "+canvas);
        
        $scope.context.moveTo(0,0);
        $scope.context.lineTo(200,100);
        $scope.context.stroke();  

          $scope.video = angular.element(document.querySelector('#video')); 


          $scope.canvas.width = parseInt(canvas.style.width);
          $scope.canvas.height = parseInt(canvas.style.height);

          navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
          if (navigator.getUserMedia) {

              function successCallback(stream) {
                  if (window.webkitURL) {
                      $scope.video.src = window.webkitURL.createObjectURL(stream);
                  } else if (video.mozSrcObject !== undefined) {
                      $scope.video.mozSrcObject = stream;
                  } else {
                      $scope.video.src = stream;
                  }
              }

              function errorCallback(error) {
              }

              navigator.getUserMedia({ video: true }, successCallback, errorCallback);

              $scope.detector = new AR.Detector();

              requestAnimationFrame(tick);
          }

      }); //$scope.$on

    $scope.tick = function() {

        requestAnimationFrame(tick);

        if ($scope.video.readyState === $scope.video.HAVE_ENOUGH_DATA) {
            snapshot();

            var markers = detector.detect(imageData);
            drawCorners(markers);
            drawId(markers);
        }
    }

    $scope.snapshot = function() {

        $scope.context.drawImage($scope.video, 0, 0, $scope.canvas.width, $scope.canvas.height);
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
    }

    }]);