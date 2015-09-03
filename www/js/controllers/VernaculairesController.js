angular.module('casa').controller('VernaculairesController',[ '$scope','Vernaculaires',function($scope,Vernaculaires)
    {
    	 $scope.vernaculaire = Vernaculaires.all();
    }]);
/*        
mymonAppApp.controller('UnControlleurCommeUnAutre', function($scope, profile) {
    $scope.profile = profile;
});*/