angular.module('casa').controller('DetailPaysageController',
  [ '$scope',
  	'$stateParams',
    'Paysages',
    function(
      $scope,
      $stateParams,
      Paysages
      ) {
      
     $scope.paysage = Paysages.get($stateParams.paysageId);

    }]);