angular.module('casa').controller('DetailArtistiqueController',
  [ '$scope',
  	'$stateParams',
    'Artistiques',
    function(
      $scope,
      $stateParams,
      Artistiques
      ) {
      
     $scope.artistique = Artistiques.get($stateParams.artistiqueId);

    }]);