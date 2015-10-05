angular.module('casa').controller('AProposController',
  ['$scope',
    '$cordovaGeolocation',
    '$stateParams',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams
      ) {
        var videoSources = [];
        //? 'use strict';
        var videoElem = null;
        // http://stackoverflow.com/questions/26487730/is-there-an-alternative-to-getusermedia-for-phonegap-androidlocal?rq=1
        var localMediaStream = function localMediaStream() {
            
        };
        var hasMed = function hasMed() {

            navigator.getUserMedia = (navigator.getUserMedia ||
               navigator.webkitGetUserMedia ||
               navigator.mozGetUserMedia ||
               navigator.msGetUserMedia);
            videoElem = document.createElement('video');
            videoElem.setAttribute('class', 'webcam-live');
            videoElem.setAttribute('autoplay', '');
            videoElem.setAttribute('id', 'video');// not in sysart fork
            document.body.appendChild(videoElem);
            if (window.hasUserMedia()) {
                $scope.infos += " Browser supports getUserMedia.";
            } else {
                $scope.infos += " Browser does not support getUserMedia.";
            }
            //var video = document.querySelector('video');
            //var vendorURL = window.URL || window.webkitURL;
            //$scope.infos += " vendorURL: " + vendorURL;

            if (videoSources.length > 0 && $scope.cameraid >= videoSources.length) $scope.cameraid = videoSources.length - 1;

            var mediaConstraint;
            if ($scope.cameraid !== undefined) {
                mediaConstraint = { video: { optional: [{ sourceId: videoSources[$scope.cameraid].id }] }, audio: false };
            } else {
                mediaConstraint = { video: true, audio: false };
            }
            navigator.getMedia(mediaConstraint, onSuccess, onFailure);


        };
        $scope.$on('$ionicView.enter', function (e) {
            hasMed();

        });

        function gotSources(sourceInfos) {
            $scope.infos = "Sources: "
            for (var i = 0; i !== sourceInfos.length; ++i) {
                var sourceInfo = sourceInfos[i];
                if (sourceInfo.kind === 'video') {
                    $scope.infos += "Video " + i + ", facing: " + sourceInfo.facing;// 3=user,4=environment on android
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
        // called when camera stream is loaded
        var onSuccess = function onSuccess(stream) {
            videoStream = stream;

            // Firefox supports a src object
            if (navigator.mozGetUserMedia) {
                videoElem.mozSrcObject = stream;
            } else {
                var vendorURL = window.URL || window.webkitURL;
                videoElem.src = vendorURL.createObjectURL(stream);
            }

            /* Start playing the video to show the stream from the webcam */
            videoElem.play();
            
        };

        // called when any error happens
        var onFailure = function onFailure(err) {
           
            $scope.infos = "The following error occured: " + err;
            return;
        };

    }]);