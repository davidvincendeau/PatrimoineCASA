angular.module('casa').controller('DetailHistoireController',
  [ '$scope',
  	$stateParams,
    Histoires,
    function(
      $scope,
      $stateParams,
      Histoires
      ) {
      
     $scope.histoire = Histoires.get($stateParams.histoireId);

    }]);