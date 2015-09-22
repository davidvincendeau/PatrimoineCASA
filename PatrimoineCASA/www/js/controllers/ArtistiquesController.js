angular.module('casa').controller('ArtistiquesController',
  [ '$scope',
    'Artistiques',
    function(
      $scope,
      Artistiques
      ) {
      
     $scope.artistiques = Artistiques.all();

    }]);