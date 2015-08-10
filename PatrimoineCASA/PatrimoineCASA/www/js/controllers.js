angular.module('starter.controllers', [])

.controller('AccueilCtrl', function ($scope) { })

.controller('PaysagesCtrl', function ($scope, Paysages) {
    $scope.paysages = Paysages.all();
})

.controller('HistoireCtrl', function ($scope, Histoires) {
    $scope.histoires = Histoires.all();    
})

.controller('DetailPaysageCtrl', function ($scope, $stateParams, Paysages) {
    $scope.paysage = Paysages.get($stateParams.paysageId);
})
.controller('DetailHistoireCtrl', function ($scope, $stateParams, Histoires) {
    $scope.histoire = Histoires.get($stateParams.histoireId);
})

.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.toggleRight = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

});