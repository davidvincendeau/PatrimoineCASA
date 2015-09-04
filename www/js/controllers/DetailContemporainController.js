angular.module('casa').controller('DetailContemporainController',
  [ '$scope',
  	'$stateParams',
    'Contemporains',
    function(
      $scope,
      $stateParams,
      Histoires
      ) {
      
     $scope.contemporain = Contemporains.get($stateParams.contemporainId);

    }]);