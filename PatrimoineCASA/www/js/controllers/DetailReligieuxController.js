angular.module('casa').controller('DetailReligieuxController',
  [ '$scope',
  	'$stateParams',
    'Religieux',
    function(
      $scope,
      $stateParams,
      Religieux
      ) {
      
     $scope.r = Religieux.get($stateParams.rId);

    }]);