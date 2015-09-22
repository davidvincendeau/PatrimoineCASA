angular.module('casa').controller('DetailVernaculaireController',
  [ '$scope',
  	'$stateParams',
    'Vernaculaires',
    function(
      $scope,
      $stateParams,
      Vernaculaires
      ) {
      
     $scope.vernaculaire = Vernaculaires.get($stateParams.vId);

    }]);