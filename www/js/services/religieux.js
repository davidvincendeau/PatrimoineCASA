angular.module('casa').factory('Religieux', [ function() {

      var religieux = [{
        id: 0,
        name: 'Les édifices religieux',
        sousTitre: 'Introduction',
        url: 'pages/religieux/religieux-edifices.html',
        vignette: 'img/religieux-edifices.jpg'
        },{
        id: 1,
        name: 'Les édifices religieux',
        sousTitre: 'Introduction',
        url: 'pages/religieux/religieux-edifices.html',
        vignette: 'img/religieux-edifices.jpg'
        },{
        id: 2,
        name: 'Les édifices religieux',
        sousTitre: 'Introduction',
        url: 'pages/religieux/religieux-edifices.html',
        vignette: 'img/religieux-edifices.jpg'
        },{
        id: 3,
        name: 'Les édifices religieux',
        sousTitre: 'Introduction',
        url: 'pages/religieux/religieux-edifices.html',
        vignette: 'img/religieux-edifices.jpg'
        },{
        id: 4,
        name: 'Les édifices religieux',
        sousTitre: 'Introduction',
        url: 'pages/religieux/religieux-edifices.html',
        vignette: 'img/religieux-edifices.jpg'
        }, {
        id: 5,
        name: 'L\'eau',
        sousTitre: 'Les phares',
        url: 'pages/paysages/eau-phares.html',
        vignette: 'img/phare3.jpg'
    }];
 
    return {
        all: function () {
            return religieux;
        },
        get: function (rId) {
            for (var i = 0; i < religieux.length; i++) {
                if (religieux[i].id === parseInt(rId)) {
                    return religieux[i];
                }
            }
            return null;
        }
    };

}]);