angular.module('casa').controller('DetailContemporainController',
  [ '$scope',
  	'$stateParams',
    'Contemporains',
    function(
      $scope,
      $stateParams,
      Contemporains
      ) {
      
     $scope.contemporain = Contemporains.get($stateParams.cId);

    }]);