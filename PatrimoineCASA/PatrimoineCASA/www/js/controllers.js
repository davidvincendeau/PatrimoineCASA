angular.module('starter.controllers', [])

.controller('AccueilCtrl', function ($scope) { })
.controller('PaysagesIntroCtrl', function ($scope) { })

.controller('DashCtrl', function ($scope) { })

.controller('PaysagesCtrl', function ($scope, Paysages) {
    $scope.paysages = Paysages.all();
    $scope.remove = function (paysage) {
        Paysages.remove(paysage);
  }
})

.controller('PaysageDetailCtrl', function ($scope, $stateParams, Paysages) {
    $scope.paysage = Paysages.get($stateParams.paysageId);
})

.controller('EauMilieumarinCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.toggleRight = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

});