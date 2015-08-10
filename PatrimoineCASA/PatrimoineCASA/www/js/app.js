// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

  // Each tab has its own nav history stack:

  .state('tab.accueil', {
      url: '/accueil',
      views: {
          'tab-accueil': {
              templateUrl: 'templates/accueil.html',
              controller: 'AccueilCtrl'
          }
      }
  })

  .state('tab.paysages', {
      url: '/paysages',
      views: {
          'tab-paysages': {
              templateUrl: 'templates/tab-paysages.html',
              controller: 'PaysagesCtrl'
          }
      }
  })
    .state('tab.detail-paysage', {
        url: '/paysages/:paysageId',
        views: {
            'tab-paysages': {
                templateUrl: 'templates/detail-paysage.html',
                controller: 'DetailPaysageCtrl'
            }
        }
    })
  .state('tab.histoire', {
      url: '/histoire',
      views: {
          'tab-histoire': {
              templateUrl: 'templates/tab-histoire.html',
              controller: 'HistoireCtrl'
          }
      }
  })
.state('tab.detail-histoire', {
    url: '/histoire/:histoireId',
    views: {
        'tab-histoire': {
            templateUrl: 'templates/detail-histoire.html',
            controller: 'DetailHistoireCtrl'
        }
    }
})
  .state('tab.patrimoine', {
      url: '/patrimoine',
      views: {
          'tab-patrimoine': {
              templateUrl: 'templates/tab-patrimoine.html',
              controller: 'PatrimoineCtrl'
          }
      }
  })
        .state('tab.detail-patrimoine', {
            url: '/patrimoine/:patrimoineId',
            views: {
                'tab-patrimoine': {
                    templateUrl: 'templates/detail-patrimoine.html',
                    controller: 'DetailPatrimoineCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback  
    $urlRouterProvider.otherwise("/tab/accueil");
})

.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.toggleRight = function () {
        $ionicSideMenuDelegate.toggleRight();
    };


});
