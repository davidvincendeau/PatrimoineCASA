angular.module('starter.services', [])

.factory('Paysages', function () {
    
    var paysages = [{
        id: 0,
        name: 'Paysages',
        sousTitre: 'Introduction',
        url: '../pages/paysages-paysages2.html',
        vignette: '../img/plateau2.jpg'
    }, {
        id: 1,
        name: 'Paysages',
        sousTitre: 'Les plateaux',
        url: '../pages/paysages-plateaux.html',
        vignette: '../img/plateau1.jpg'
    }, {
        id: 2,
        name: 'Paysages',
        sousTitre: 'Les collines',
        url: '../pages/paysages-collines.html',
        vignette: '../img/colline3.jpg'
    }, {
        id: 3,
        name: 'Paysages',
        sousTitre: 'Le littoral',
        url: '../pages/paysages-littoral.html',
        vignette: '../img/litto3b.jpg'
    }, {
        id: 4,
        name: 'Les espaces naturels',
        sousTitre: 'Introduction',
        vignette: '../img/natura9.jpg'
    }, {
        id: 5,
        name: 'Les espaces naturels',
        sousTitre: 'Natura 2000 terrestre',
        vignette: '../img/natura4.jpg'
    }, {
        id: 6,
        name: 'Les espaces naturels',
        sousTitre: 'Les parcs naturels',
        vignette: '../img/parcs5.jpg'
    }, {
        id: 7,
        name: 'Les espaces naturels',
        sousTitre: 'ZNIEFF terrestre',
        vignette: '../img/znieff.jpg'
    }, {
        id: 8,
        name: 'L\'eau',
        sousTitre: 'Les axes bleus',
        vignette: '../img/bateau.jpg'
    }, {
        id: 9,
        name: 'L\'eau',
        sousTitre: 'Le milieu marin',
        vignette: '../img/marin2.jpg'
    }, {
        id: 10,
        name: 'L\'eau',
        sousTitre: 'Les phares',
        vignette: '../img/phare3.jpg'
    }];
    var histoires = [{
        id: 0,
        name: 'Histoire',
        sousTitre: 'Introduction',
        vignette: '../img/plateau2.jpg'
    }, {
        id: 1,
        name: 'L\'eau',
        sousTitre: 'Les phares',
        vignette: '../img/phare3.jpg'
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
        },
        allHistoires: function () {
            return histoires;
        },
        getHistoire: function (histoireId) {
            for (var i = 0; i < histoires.length; i++) {
                if (histoires[i].id === parseInt(histoireId)) {
                    return histoires[i];
                }
            }
            return null;
        }
    };




});
