angular.module('casa').controller('VernaculairesController',
  [ '$scope',
    'Vernaculaires',
    function(
      $scope,
      Vernaculaires
      ) {
      
     $scope.vernaculaires = Vernaculaires.all();

    }]);