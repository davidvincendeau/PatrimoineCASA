
app.controller('introController', function ($scope, $rootScope, $cordovaFile) {
    
    $cordovaFile.readFile('pois.json').then(
        function (result) {
            if (typeof result == 'string') {

            }
            else {

            }

        });

});