// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('casa', ['ionic', 'leaflet-directive', 'ngCordova', 'igTruncate', 'webcam'])

// 20150923 whitelist for images
  .config(function ($compileProvider) {
      $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })
  .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          /* 20150922 BL
          if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          window.cordova.plugins.Keyboard.disableScroll(true);
        }*/
            //filesystem
              /*alert('cordova.file.dataDirectory: ' + cordova); //I get [object Object]
              alert('cordova.file.dataDirectory: ' + cordova.file.dataDirectory); // I get file is undefined
              $cordovaFile.writeFile(cordova.file.dataDirectory, 'surveys.json', $scope.surveys, true).then(function (result) {
                  alert('Success! Survey created!');
              }, function (err) {
                  console.log("ERROR");
              })*/
          
          if (window.StatusBar) {
              StatusBar.styleDefault();
          }
      });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'MapController'
        })

        .state('app.carte', {
            url: "/carte",
            views: {
                'menuContent': {
                    templateUrl: "templates/map.html"
                }
            }
        })
        .state('app.ar', {
            url: "/ar",
            views: {
                'menuContent': {
                    templateUrl: "templates/ar.html",
                    controller: 'ARController'
                }
            }
        })
        /*.state('app.arimage', {
            url: "/arimage",
            views: {
                'menuContent': {
                    templateUrl: "templates/arimage.html",
                    controller: 'ARImageController'
                }
            }
        })
        .state('app.bjs', {
            url: "/bjs",
            views: {
                'menuContent': {
                    templateUrl: "templates/bjs.html",
                    controller: 'BJSController'
                }
            }
        })*/
         .state('app.apropos', {
             url: "/apropos",
             views: {
                 'menuContent': {
                     templateUrl: "templates/apropos.html",
                     controller: 'AProposController'
                 }
             }
         })
    .state('app.accueil', {
        url: '/accueil',
        views: {
            'menuContent': {
                templateUrl: 'templates/accueil.html'
            }
        }
    })
      .state('app.paysages', {
          url: '/paysages',
          views: {
              'menuContent': {
                  templateUrl: 'templates/paysages.html',
                  controller: 'PaysagesController'
              }
          }
      })
      .state('app.detail-paysage', {
          url: '/paysages/:paysageId',
          views: {
              'menuContent': {
                  templateUrl: 'templates/detail-paysage.html',
                  controller: 'DetailPaysageController'
              }
          }
      })
    .state('app.histoire', {
        url: '/histoire',
        views: {
            'menuContent': {
                templateUrl: 'templates/histoire.html',
                controller: 'HistoireController'
            }
        }
    })
    .state('app.detail-histoire', {
        url: '/histoire/:histoireId',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail-histoire.html',
                controller: 'DetailHistoireController'
            }
        }
    })
    .state('app.religieux', {
        url: '/religieux',
        views: {
            'menuContent': {
                templateUrl: 'templates/religieux.html',
                controller: 'ReligieuxController'
            }
        }
    })
    .state('app.detail-religieux', {
        url: '/religieux/:rId',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail-religieux.html',
                controller: 'DetailReligieuxController'
            }
        }
    })
    .state('app.vernaculaire', {
        url: '/vernaculaire',
        views: {
            'menuContent': {
                templateUrl: 'templates/vernaculaire.html',
                controller: 'VernaculairesController'
            }
        }
    })
    .state('app.detail-vernaculaire', {
        url: '/vernaculaire/:vId',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail-vernaculaire.html',
                controller: 'DetailVernaculaireController'
            }
        }
    })
    .state('app.contemporain', {
        url: '/contemporain',
        views: {
            'menuContent': {
                templateUrl: 'templates/contemporain.html',
                controller: 'ContemporainController'
            }
        }
    })
    .state('app.detail-contemporain', {
        url: '/contemporain/:cId',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail-contemporain.html',
                controller: 'DetailContemporainController'
            }
        }
    })
    .state('app.artistique', {
        url: '/artistique',
        views: {
            'menuContent': {
                templateUrl: 'templates/artistique.html',
                controller: 'ArtistiquesController'
            }
        }
    })
    .state('app.detail-artistique', {
        url: '/artistique/:artistiqueId',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail-artistique.html',
                controller: 'DetailArtistiqueController'
            }
        }
    })

      $urlRouterProvider.otherwise("/app/accueil");
  });