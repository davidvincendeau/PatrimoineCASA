angular.module('casa').controller('AProposController',
  ['$scope',
    '$cordovaGeolocation',
    '$stateParams',
    function (
      $scope,
      $cordovaGeolocation,
      $stateParams
      ) {
        $scope.initialized = false;

        // http://ionicframework.com/docs/api/directive/ionView/
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {
            var videoSources = [];
            //? 'use strict';
            var videoElem = null,
                videoStream = null,
                placeholder = null;

            $scope.config = $scope.config || {};
                // Checks if getUserMedia is available on the client browser
                var hasUserMed = function hasUserMedia() {
                    if (navigator.getMedia === false) $scope.infos += "window.hasUserMedia false";
                    return navigator.getMedia ? true : false;
                };

            var hasMed = function hasMed() {
                // GetUserMedia is not yet supported by all browsers
                // Until then, we need to handle the vendor prefixes
                navigator.getMedia = (navigator.getUserMedia ||
                                     navigator.webkitGetUserMedia ||
                                     navigator.mozGetUserMedia ||
                                     navigator.msGetUserMedia);

                // Checks if getUserMedia is available on the client browser
                hasUserMed();
            };
            // called when camera stream is loaded
            var onSuccess = function onSuccess(stream) {
                videoStream = stream;

                // Firefox supports a src object
                if (navigator.mozGetUserMedia) {
                    $scope.infos += "Firefox mozGetUserMedia";
                    videoElem.mozSrcObject = stream;
                } else {
                    var vendorURL = window.URL || window.webkitURL;
                    videoElem.src = vendorURL.createObjectURL(stream);
                    $scope.infos += "not Firefox mozGetUserMedia";
                }

                /* Start playing the video to show the stream from the webcam */
                videoElem.play();
                $scope.config.video = videoElem;

                /* Call custom callback */
                if ($scope.onStream) {
                    $scope.onStream({stream: stream});
                }
            };

            // called when any error happens
            var onFailure = function onFailure(err) {
                _removeDOMElement(placeholder);
                $scope.infos += "The following error occured: " + err;
                return;
            };

            var startWebcam = function startWebcam() {
                videoElem = document.createElement('video');
                videoElem.setAttribute('class', 'webcam-live');
                videoElem.setAttribute('id', 'video');// not in sysart fork
                videoElem.setAttribute('autoplay', '');
                element.append(videoElem);

                if ($scope.placeholder) {
                    placeholder = document.createElement('img');
                    placeholder.setAttribute('class', 'webcam-loader');
                    placeholder.src = $scope.placeholder;
                    element.append(placeholder);
                }

                // Default variables
                var isStreaming = false,
                  width = element.width = $scope.config.videoWidth || 320,
                  height = element.height = 0;
                // Check the availability of getUserMedia across supported browsers
                if (!hasUserMed()) {
                    $scope.infos += "Browser does not support getUserMedia." ;
                    return;
                }
                if (typeof MediaStreamTrack !== 'undefined') {
                    if (typeof MediaStreamTrack.getSources !== 'undefined') {
                        MediaStreamTrack.getSources(gotSources);
                        $scope.infos += "getSources";
                    } else {
                        var mediaConstraint = { video: true, audio: false };
                        navigator.getMedia(mediaConstraint, onSuccess, onFailure);
                        $scope.infos += "getMedia";
                    }
                }

                /* Start streaming the webcam data when the video element can play
                 * It will do it only once
                 */
                videoElem.addEventListener('canplay', function () {
                    if (!isStreaming) {
                        var scale = width / videoElem.videoWidth;
                        height = (videoElem.videoHeight * scale) ||
                                  $scope.config.videoHeight;
                        videoElem.setAttribute('width', width);
                        videoElem.setAttribute('height', height);
                        isStreaming = true;

                        $scope.config.video = videoElem;

                        _removeDOMElement(placeholder);

                        /* Call custom callback */
                        if ($scope.onStreaming) {
                            $scope.onStreaming();
                        }
                    }
                }, false);
            };

            //end
            // start webcam when back on the page, not the first time
            if ($scope.initialized) {
                $scope.$broadcast('START_WEBCAM');
            }
            $scope.initialized = true;
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
            hasMed();
        });
        $scope.$on("$ionicView.loaded", function (e) {

        });

        $scope.$on("$ionicView.beforeLeave", function (e) {
            $scope.$broadcast('STOP_WEBCAM');

        });


    }]);