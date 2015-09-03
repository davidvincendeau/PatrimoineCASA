angular.module('casa').controller('PaysagesController',[ '$scope','Paysages',function($scope,Paysages)
    {
      
    	 $scope.paysages = Paysages.all();

    }]);