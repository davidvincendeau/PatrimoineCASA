angular.module('starter.controllers', [])

.controller('AccueilCtrl', function ($scope) { })
.controller('PatrimoineCtrl', function ($scope) { })
.controller('PaysagesPlateauxCtrl', function ($scope) { })

.controller('PaysagesCtrl', function ($scope, Paysages) {
    $scope.paysages = Paysages.all();

})

.controller('HistoireCtrl', function ($scope, Histoires) {
    $scope.histoires = Histoires.allHistoires();
    
})

.controller('PaysageDetailCtrl', function ($scope, $stateParams, Paysages) {
    $scope.paysage = Paysages.get($stateParams.paysageId);
})

.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.toggleRight = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

});