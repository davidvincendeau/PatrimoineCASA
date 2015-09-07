angular.module('casa').controller('DetailReligieuxController',
  [ '$scope',
  	'$stateParams',
    'Religieux',
    function(
      $scope,
      $stateParams,
      Religieux
      ) {
      
     $scope.religieu = Religieux.get($stateParams.religieuId);

    }]);