angular.module('starter.services', [])

.factory('Paysages', function () {
    
    var paysages = [{
        id: 0,
        name: 'Paysages',
        sousTitre: 'Introduction',
        face: '../img/plateau2.jpg'
    }, {
        id: 1,
        name: 'Paysages',
        sousTitre: 'Les plateaux',
        face: '../img/plateau1.jpg'
    }, {
        id: 2,
        name: 'Paysages',
        sousTitre: 'Les collines',
        face: '../img/colline3.jpg'
    }, {
        id: 3,
        name: 'Paysages',
        sousTitre: 'Le littoral',
        face: '../img/litto3b.jpg'
    }, {
        id: 4,
        name: 'Les espaces naturels',
        sousTitre: 'Introduction',
        face: '../img/natura9.jpg'
    }, {
        id: 5,
        name: 'Les espaces naturels',
        sousTitre: 'Natura 2000 terrestre',
        face: '../img/natura4.jpg'
    }, {
        id: 6,
        name: 'Les espaces naturels',
        sousTitre: 'Les parcs naturels',
        face: '../img/parcs5.jpg'
    }, {
        id: 7,
        name: 'Les espaces naturels',
        sousTitre: 'ZNIEFF terrestre',
        face: '../img/znieff.jpg'
    }, {
        id: 8,
        name: 'L\'eau',
        sousTitre: 'Les axes bleus',
        face: '../img/bateau.jpg'
    }, {
        id: 9,
        name: 'L\'eau',
        sousTitre: 'Le milieu marin',
        face: '../img/marin2.jpg'
    }, {
        id: 10,
        name: 'L\'eau',
        sousTitre: 'Les phares',
        face: '../img/phare3.jpg'
    }];
    var histoires = [{
        id: 0,
        name: 'Histoire',
        sousTitre: 'Introduction',
        face: '../img/plateau2.jpg'
    }, {
        id: 1,
        name: 'L\'eau',
        sousTitre: 'Les phares',
        face: '../img/phare3.jpg'
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
