angular.module('casa').factory('Paysages', [ function() {

      var paysages = [{
        id: 0,
        name: 'Paysages',
        sousTitre: 'Introduction',
        url: 'pages/paysages/paysages-intro.html',
        vignette: 'img/plateau2.jpg'
    }, {
        id: 1,
        name: 'Paysages',
        sousTitre: 'Les plateaux',
        url: 'pages/paysages/paysages-plateaux.html',
        vignette: 'img/plateau1.jpg'
    }, {
        id: 2,
        name: 'Paysages',
        sousTitre: 'Les collines',
        url: 'pages/paysages/paysages-collines.html',
        vignette: 'img/colline3.jpg'
    }, {
        id: 3,
        name: 'Paysages',
        sousTitre: 'Le littoral',
        url: 'pages/paysages/paysages-littoral.html',
        vignette: 'img/litto3b.jpg'
    }, {
        id: 4,
        name: 'Les espaces naturels',
        sousTitre: 'Introduction',
        url: 'pages/paysages/espaces-naturels-intro.html',
        vignette: 'img/natura9.jpg'
    }, {
        id: 5,
        name: 'Les espaces naturels',
        sousTitre: 'Natura 2000 terrestre',
        url: 'pages/paysages/espaces-naturels-natura2000.html',
        vignette: 'img/natura4.jpg'
    }, {
        id: 6,
        name: 'Les espaces naturels',
        sousTitre: 'Les parcs naturels',
        url: 'pages/paysages/espaces-naturels-parcs.html',
        vignette: 'img/parcs5.jpg'
    }, {
        id: 7,
        name: 'Les espaces naturels',
        sousTitre: 'ZNIEFF terrestre',
        url: 'pages/paysages/espaces-naturels-znieff.html',
        vignette: 'img/znieff.jpg'
    }, {
        id: 8,
        name: 'L\'eau',
        sousTitre: 'Les axes bleus',
        url: 'pages/paysages/eau-axes.html',
        vignette: 'img/bateau.jpg'
    }, {
        id: 9,
        name: 'L\'eau',
        sousTitre: 'Le milieu marin',
        url: 'pages/paysages/eau-milieu-marin.html',
        vignette: 'img/marin2.jpg'
    }, {
        id: 10,
        name: 'L\'eau',
        sousTitre: 'Les phares',
        url: 'pages/paysages/eau-phares.html',
        vignette: 'img/phare3.jpg'
    }];
 
    return {
        all: function () {
            return paysages;
        },
        get: function (paysageId) {
            for (var i = 0; i < paysages.length; i++) {
                if (paysages[i].id === parseInt(paysageId)) {
                    return paysages[i];
                }
            }
            return null;
        }
    };

}]);