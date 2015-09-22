angular.module('casa').controller('HistoireController',
  [ '$scope',
    'Histoires',
    function(
      $scope,
      Histoires
      ) {
      
     $scope.histoires = Histoires.all();

    }]);