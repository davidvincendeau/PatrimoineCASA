angular.module('casa').factory('Histoires', [ function() {

      var histoires = [{
        id: 0,
        name: 'Decoupage chronologique',
        sousTitre: 'Chronologie',
        url: 'pages/histoire/decoupage-chronologique.html',
        vignette: 'img/historique.png'
    }, {
        id: 1,
        name: 'Traces pre/protohistoriques',
        sousTitre: 'Les traces pre et protohistoriques',
        url: 'pages/histoire/traces-pre-protohistoriques.html',
        vignette: 'img/menhir.jpg'
    }, {
        id: 2,
        name: 'Traces protohistoriques',
        sousTitre: 'Les traces protohistoriques',
        url: 'pages/histoire/traces-protohistoriques.html',
        vignette: 'img/enceinte_naouri.jpg'
    }, {
        id: 20,
        name: 'Traces protohistoriques - Les enceintes',
        sousTitre: 'Les traces protohistoriques - Les enceintes',
        url: 'pages/histoire/traces-protohistoriques-enceintes.html',
        vignette: 'img/enceinte_naouri.jpg'
    }, {
        id: 3,
        name: 'Antiquité',
        sousTitre: 'Partie 1',
        url: 'pages/histoire/antiquite-1.html',
        vignette: 'img/antiquite_opidium.jpg'
    }, {
        id: 4,
        name: 'Antiquité',
        sousTitre: 'Partie 2',
        url: 'pages/histoire/antiquite-2.html',
        vignette: 'img/saint_andrieu2.jpg'
    }, {
        id: 5,
        name: 'Antiquité',
        sousTitre: 'Partie 3',
        url: 'pages/histoire/antiquite-3.html',
        vignette: 'img/aqueduc.png'
    }, {
        id: 6,
        name: 'Antiquité',
        sousTitre: 'Partie 4',
        url: 'pages/histoire/antiquite-4.html',
        vignette: 'img/enceinte_tourraque.jpg'
    }, {
        id: 7,
        name: 'Féodalisation',
        sousTitre: 'Partie 1',
        url: 'pages/histoire/feodalisation-1.html',
        vignette: 'img/musee_picasso.jpg'
    }, {
        id: 8,
        name: 'Féodalisation',
        sousTitre: 'Partie 2',
        url: 'pages/histoire/feodalisation-2.html',
        vignette: 'img/chateau_villeneuve_loubet.jpg'
    }, {
        id: 9,
        name: 'Féodalisation',
        sousTitre: 'Partie 3',
        url: 'pages/histoire/feodalisation-3.html',
        vignette: 'img/chateau_tourrette.jpg'
    }, {
        id: 10,
        name: 'Féodalisation',
        sousTitre: 'Partie 4',
        url: 'pages/histoire/feodalisation-4.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 11,
        name: 'Sites historiques',
        sousTitre: 'Introduction',
        url: 'pages/histoire/sites-historiques.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 12,
        name: 'Sites historiques',
        sousTitre: 'Gourdon',
        url: 'pages/histoire/sites-historiques-gourdon.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 13,
        name: 'Sites historiques',
        sousTitre: 'Le Bar-sur-Loup',
        url: 'pages/histoire/sites-historiques-bar-sur-loup.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 14,
        name: 'Sites historiques',
        sousTitre: 'Tourrettes-sur-Loup',
        url: 'pages/histoire/sites-historiques-tourrettes-sur-loup.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 15,
        name: 'Sites historiques',
        sousTitre: 'Châteauneuf',
        url: 'pages/histoire/sites-historiques-chateauneuf.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 16,
        name: 'Sites historiques',
        sousTitre: 'Opio',
        url: 'pages/histoire/sites-historiques-opio.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 17,
        name: 'Les villages repeuplés',
        sousTitre: 'Villeneuve-Loubet',
        url: 'pages/histoire/sites-historiques-villeneuve-loubet.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 21,
        name: 'Les villages repeuplés',
        sousTitre: 'Biot',
        url: 'pages/histoire/sites-historiques-biot.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 22,
        name: 'Les villages repeuplés',
        sousTitre: 'Vallauris',
        url: 'pages/histoire/sites-historiques-vallauris.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 23,
        name: 'Les villages repeuplés',
        sousTitre: 'Valbonne',
        url: 'pages/histoire/sites-historiques-valbonne.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 24,
        name: 'Les villages frontières ',
        sousTitre: 'Saint Paul de Vence',
        url: 'pages/histoire/sites-historiques-saint-paul.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 25,
        name: 'Les villages frontières ',
        sousTitre: 'Antibes',
        url: 'pages/histoire/sites-historiques-antibes.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 26,
        name: 'Les villages modernes ',
        sousTitre: 'La Colle sur Loup',
        url: 'pages/histoire/sites-historiques-colle-sur-loup.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 27,
        name: 'Les villages modernes',
        sousTitre: 'Le Rouret',
        url: 'pages/histoire/sites-historiques-rouret.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 28,
        name: 'Les villages modernes',
        sousTitre: 'Roquefort Les Pins',
        url: 'pages/histoire/sites-historiques-roquefort-les-pins.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 29,
        name: 'Les villages modernes ',
        sousTitre: 'Courmes',
        url: 'pages/histoire/sites-historiques-courmes.html',
        vignette: 'img/chateau_rouret.jpg'
    }];
    return {
        all: function () {
            return histoires;
        },
        get: function (histoireId) {
            for (var i = 0; i < histoires.length; i++) {
                if (histoires[i].id === parseInt(histoireId)) {
                    return histoires[i];
                }
            }
            return null;
        }
    };

}]);