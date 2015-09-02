angular.module('casa').controller('ReligieuxController',
  [ '$scope',
    'Religieux',
    function(
      $scope,
      Religieux
      ) {
      
     $scope.religieux = Religieux.all();

    }]);