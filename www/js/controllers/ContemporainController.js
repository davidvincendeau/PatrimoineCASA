angular.module('casa').controller('ContemporainController',
  [ '$scope',
    'Contemporains',
    function(
      $scope,
      Contemporains
      ) {
      
     $scope.contemporains = Contemporains.all();

    }]);