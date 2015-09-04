angular.module('casa').controller('VernaculairesController',[ '$scope','Vernaculaires',function($scope,Vernaculaires)
    {
    	 $scope.vernaculaire = Vernaculaires.all();
    }]);
