angular.module('casa').factory('Religieux', [ function() {

      var religieux = [{
        id: 0,
        name: 'Les édifices religieux',
        sousTitre: 'Introduction',
        url: '../www/pages/religieux/religieux-edifices.html',
        vignette: 'img/religieux-edifices.jpg'
        }, {
        id: 10,
        name: 'L\'eau',
        sousTitre: 'Les phares',
        url: '../www/pages/paysages/eau-phares.html',
        vignette: 'img/phare3.jpg'
    }];
 
    return {
        all: function () {
            return religieux;
        },
        get: function (religieuxId) {
            for (var i = 0; i < religieux.length; i++) {
                if (religieux[i].id === parseInt(religieuxId)) {
                    return religieux[i];
                }
            }
            return null;
        }
    };

}]);