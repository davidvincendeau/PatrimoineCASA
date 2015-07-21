app.controller('ajoutPOIController', function ($scope, $location) {
    $scope.poi = {

    	image: 'images/casa.jpg',
    	titre: ''

    };

    $scope.pois = [];

	$scope.ajoutPOI = function () {

		$scope.pois.push($scope.poi);
		$scope.save();

	};
	$scope.save = function () {

		requestFileSystem(window.PERSISTENT, 0, fsReceived, errorHandler);
		$location.path('/');
	};
	var fsReceived = function(fileSystem) {
		fileSystem.root.getFile('pois.json', { create: true, exclusive: false}, feReceived, errorHandler);
	};
	var feReceived = function(fileEntry) {
		fileEntry.createWriter(fwReceived, errorHandler);
	};
	var fwReceived = function(fileWriter) {
		var poisText = angular.toJson($scope.pois);
		fileWriter.write(poisText);
	};
	var errorHandler = function(error) {
		
		//alert(error);
	};
});