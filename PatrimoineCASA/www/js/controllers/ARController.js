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
        $scope.showMarker = function (locationKey) {

            $scope.poi = LocationsService.savedLocations[locationKey];
            if ($scope.poi === undefined) {
                $scope.erreur = "identifiant marqueur non reconnu";
            } else {
                $scope.msg = "identifiant marqueur:" + locationKey + " image:" + $scope.poi.vignette;
                $scope.arPopupImage = $scope.poi.vignette;
            }
        };
        // pause for a few milliseconds before accessing canvas
        setTimeout(function () {
            var imageData;
            // rendercanvas
            $scope.canvasElement = angular.element(document.getElementById('renderCanvas'));
            console.log("canvasElement: " + $scope.canvasElement);
            $scope.ctxgl = $scope.canvasElement[0].getContext("webgl");
            // img
            $scope.img = angular.element(document.getElementById('image')); // Définit le chemin vers sa source
            // image
           // $scope.glfxImage.src = 'img/abreuvoir_caussols.jpg';
            //$scope.glfxImage.onload = function() {
            initGlfx($scope.img);
            //};
            console.log("canvas: " + $scope.canvasElement);
            $scope.infos = angular.element(document.getElementById('infos'));
            // canevas
            $scope.canvas = angular.element(document.getElementById('canevas'));
            console.log("canvas: " + $scope.canvas);
            $scope.ctx = $scope.canvas[0].getContext("2d");

            $scope.ctx.moveTo(0, 0);
            $scope.ctx.lineTo(200, 100);
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
        $scope.tick = function () {
            $scope.framecount++;
           // $scope.framez = $scope.framecount;
            $scope.video = $scope.channel.video;
            if ($scope.video) {
                $scope.infos = "video frame available, frame:" + $scope.framecount;

                /* A REMETTRE if ($scope.video.width > 0) {
                    //console.log("video width" + $scope.video.width);
                    var videoData = getVideoData(0, 0, $scope.video.width, $scope.video.height);
                    $scope.ctx.putImageData(videoData, 0, 0);
                    $scope.imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                    imageData = $scope.ctx.getImageData(0, 0, $scope.canvas[0].width, $scope.canvas[0].height);
                    $scope.markers = $scope.detector.detect($scope.imageData);
                    $scope.drawCorners($scope.markers);
                    $scope.drawId($scope.markers);
                    $scope.showMarker($scope.foundMarkerId);
                }*/
            }
            // glfx
            if ($scope.canvasGlfx !== undefined) {
                //$scope.glfxImage.src = 'img/abreuvoir_caussols.jpg';
                if ($scope.img) {
                    //$scope.canvasGlfx.draw($scope.glfxImage).perspective([75, 56, 296, 75, 161, 179, 304, 330], [67, 158, 627, 32, 59, 287, 611, 417]).update();
                    $scope.canvasGlfx.draw($scope.img).update();
                }
            }
            requestAnimationFrame($scope.tick);
        }
        var initGlfx = function initGlfx(image) {
            var placeholder = document.getElementById('placeholder');
            // Try to get a WebGL canvas
            try {
                $scope.canvasGlfx = fx.canvas();
            } catch (e) {
                placeholder.innerHTML = e;
                return;
            }
            // Create a texture from the image and draw it to the canvas
            var texture = $scope.canvasGlfx.texture(image);
            $scope.canvasGlfx.draw(texture).swirl(x, y, 200, 4).update().replace(placeholder);         
        };
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

                for (j = 0; j !== corners.length; ++j) 
                {
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

                if(i==0)
                {
                    $scope.foundMarkerId = markers[i].id.toString();
                    $scope.corners = markers[i].corners;                

                    $scope.ctx.lineWidth = 1;
                    var image = document.querySelector('#image');


                    /*
                    $scope.ctx.save(); 
                    $scope.ctx.drawImage(image, $scope.corners[0].x, $scope.corners[0].y , ($scope.corners[1].x - $scope.corners[0].x), ($scope.corners[3].y - $scope.corners[0].y));
                   //============================================CALCULS POUR TROUVER L'ANGLE DE ROTATION A CORRIGER ================================================================ 
                    var  distance = Math.sqrt((Math.pow($scope.corners[1].x - $scope.corners[0].x), 2) + Math.pow(($scope.corners[3].y - $scope.corners[0].y), 2));
                   
                    if(distance >  distance_fixe)
                    {
                        distance_fixe = distance;
                    }
                     if(distance <  distance_fixe)
                    {
                        Distance_Variable = distance;
                    }
                    if(Distance_Variable < distance_fixe)
                    {
                        sinAngle = Distance_Variable / distance_fixe;
                    }
                    if(Distance_Variable === distance_fixe)
                    {
                         sinAngle=1;
                        $scope.ctx.rotate(0 * Math.PI/180);   
                    }

                    var AngleRad = Math.asin(sinAngle);
                    var AngleDegres = AngleRad / 0.017453292519943;
                    
                    $scope.ctx.rotate(0 * Math.PI/180);    

                    $scope.ctx.strokeStyle = "green";
                    $scope.ctx.strokeText($scope.corners[1].x,$scope.corners[1].x+10,$scope.corners[1].y+10);
                    $scope.ctx.strokeStyle = "red";
                    $scope.ctx.strokeText($scope.corners[1].y,$scope.corners[1].x,$scope.corners[1].y);
                    $scope.ctx.strokeStyle = "purple";
                    $scope.ctx.strokeText($scope.corners[0].y,$scope.corners[0].x-10,$scope.corners[0].y-10);
                    $scope.ctx.strokeStyle = "blue";
                    $scope.ctx.strokeText($scope.corners[0].x,$scope.corners[0].x,$scope.corners[0].y);
                    $scope.ctx.strokeStyle = "black";
                    $scope.ctx.strokeText(Distance_Variable,  ($scope.corners[1].x- $scope.corners[0].x)/2  ,(($scope.corners[1].y-$scope.corners[0].y)/2)+25);
                
                    $scope.ctx.strokeStyle = "blue";
                    $scope.ctx.strokeText(AngleDegres,  ($scope.corners[1].x- $scope.corners[0].x)*2  ,(($scope.corners[1].y-$scope.corners[0].y)/2)+25);
                     $scope.ctx.restore(); 
                    $scope.framez= ""+AngleDegres+"",""+Distance_Variable+"";
                    //==================================calcul de langle de rotation plus fonction de rotation===================================================================================================================

                    // on chope la tangente puis langle 

                     var angleRad = Math.atan(($scope.corners[1].y)/(($scope.corners[1].x - $scope.corners[0].x)));
                   
                    var TO_RADIANS = Math.PI/180; 
                    function drawRotatedImage(image, x, y, angle)
                    { 
 
                        // save the current co-ordinate system 
                        // before we screw with it
                        $scope.ctx.save(); 
                     
                        // move to the middle of where we want to draw our image
                        $scope.ctx.translate(x, y);
                     
                        // rotate around that point, converting our 
                        // angle from degrees to radians 
                        $scope.ctx.rotate(angle * TO_RADIANS);
                     
                        // draw it up and to the left by half the width
                        // and height of the image 
                        $scope.ctx.drawImage(image, -(image.width/2), -(image.height/2));
                     
                        // and restore the co-ords to how they were when we began
                        $scope.ctx.restore(); 
                    }  
                        */ 
               }  
                //============================================================================================================================================================================        
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