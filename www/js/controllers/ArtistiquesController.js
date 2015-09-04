angular.module('casa').controller('ArtistiqueController',
  [ '$scope',
    'Artistiques',
    function(
      $scope,
      Artistiques
      ) {
      
     $scope.artistiques = Artistiques.all();

    }]);