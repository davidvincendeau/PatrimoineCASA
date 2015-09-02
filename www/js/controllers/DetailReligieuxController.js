angular.module('casa').controller('DetailReligieuController',
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