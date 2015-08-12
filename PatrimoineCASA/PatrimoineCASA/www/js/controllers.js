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

.controller('CarteCtrl', function ($scope, $ionicLoading) {
    $scope.distanceMax = 100; //km

    $scope.target = { "name": "CASA", "latitude": 43.6048, "longitude": 7.1418 };

    $scope.status = document.querySelector("#status");
    $scope.infos = document.querySelector("#infos");


    $scope.mapCreated = function (map) {
        $scope.map = map;       
    };

    $scope.centerOnMe = function () {
        console.log("Centering");
        if (!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log('Got pos', pos);
            $scope.map.setView([pos.coords.latitude, pos.coords.longitude], 13);
            //$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            $scope.loading.hide();
        }, function (error) {
            alert('Unable to get location: ' + error.message);
        });
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