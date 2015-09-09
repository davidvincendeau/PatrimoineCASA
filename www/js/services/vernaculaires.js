angular.module('casa').factory('Vernaculaires', [ function() {

      var vernaculaires = [{
        id: 0,
        name: 'Les cultures',
        sousTitre: 'L\'olivier',
        url: 'pages/vernaculaire/vernaculaire-culture-olivier.html',
        vignette: 'img/olivier.jpg'
    }, {
        id: 1,
        name: 'Les cultures',
        sousTitre: 'La vigne',
        url: 'pages/vernaculaire/vernaculaire-culture-vigne.html',
        vignette: 'img/vignes2.jpg'
    }, {
        id: 2,
        name: 'Les cultures',
        sousTitre: 'L\'horticulture',
        url: 'pages/vernaculaire/vernaculaire-culture-horticulture.html',
        vignette: 'img/horticulture.jpg'
    }, {
        id: 3,
        name: 'Les cultures',
        sousTitre: 'L\'oranger',
        url: 'pages/vernaculaire/vernaculaire-culture-oranger.html',
        vignette: 'img/oranger.jpg'
    }, {
        id: 4,
        name: 'Les cultures',
        sousTitre: 'Le jasmin, la rose de mai',
        url: 'pages/vernaculaire/vernaculaire-culture-jasmin.html',
        vignette: 'img/rose-mai.jpg'
    }, {
        id: 5,
        name: 'Les cultures',
        sousTitre: 'La violette',
        url: 'pages/vernaculaire/vernaculaire-culture-violette.html',
        vignette: 'img/violette3.jpg'
    }, {
        id: 6,
        name: 'Le bâti',
        sousTitre: 'Les grandes exploitations',
        url: 'pages/Vernaculaire/vernaculaire-bati-grandes-exploitations.html',
        vignette: 'img/bati.jpg'
    }, {
        id: 26,
        name: 'Le bâti',
        sousTitre: 'Les fours',
        url: 'pages/Vernaculaire/vernaculaire-bati-fours.html',
        vignette: 'img/fours.jpg'
    }, {
        id: 7,
        name: 'Le bâti',
        sousTitre: 'Les bories, bergeries',
        url: 'pages/Vernaculaire/vernaculaire-bati-bories.html',
        vignette: 'img/bories4.jpg'
    }, {
        id: 8,
        name:  'Le bâti',
        sousTitre: 'Les moulins',
        url: 'pages/vernaculaire/vernaculaire-bati-moulins.html',
        vignette: 'img/moulins.jpg'
    }, {
        id: 9,
        name:  'L\'eau',
        sousTitre: 'Introduction',
        url: 'pages/vernaculaire/vernaculaire-eau-introduction.html',
        vignette: 'img/eau-intro.jpg'
    }, {
        id: 10,
        name:  'L\'eau',
        sousTitre: 'Caussols',
        url: 'pages/vernaculaire/vernaculaire-eau-caussols.html',
        vignette: 'img/eau-caussols.jpg'
    }, {
        id: 11,
        name:  'L\'eau',
        sousTitre: 'Courmes',
        url: 'pages/vernaculaire/vernaculaire-eau-courmes.html',
        vignette: 'img/eau-courmes.jpg'
    }, {
        id: 12,
        name:  'L\'eau',
        sousTitre: 'Tourrette-sur-Loup',
        url: 'pages/vernaculaire/vernaculaire-eau-tourrettes-sur-loup.html',
        vignette: 'img/eau-tourrettes.jpg'
    }, {
        id: 13,
        name:  'L\'eau',
        sousTitre: 'La Colle-sur-Loup',
        url: 'pages/vernaculaire/vernaculaire-eau-colle-sur-loup.html',
        vignette: 'img/eau-colle.jpg'
    }, {
        id: 14,
        name:  'L\'eau',
        sousTitre: 'Les Gourdon',
        url: 'pages/vernaculaire/vernaculaire-eau-gourdon.html',
        vignette: 'img/eau-gourdon.jpg'
    }, {
        id: 15,
        name:  'L\'eau',
        sousTitre: 'Saint-Paul-de-Vence',
        url: 'pages/vernaculaire/vernaculaire-eau-saint-paul-de-vence.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 16,
        name:  'L\'eau',
        sousTitre: 'Bar-sur-Loup',
        url: 'pages/vernaculaire/vernaculaire-eau-bar-sur-loup.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 17,
        name:  'L\'eau',
        sousTitre: 'Roquefort-les-Pins',
        url: 'pages/vernaculaire/vernaculaire-eau-roquefort-les-pins.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 18,
        name:  'L\'eau',
        sousTitre: 'Châteauneuf',
        url: 'pages/vernaculaire/vernaculaire-eau-chateauneuf.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 19,
        name:  'L\'eau',
        sousTitre: 'Opio',
        url: 'pages/vernaculaire/vernaculaire-eau-opio.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 20,
        name:  'L\'eau',
        sousTitre: 'Le Rouret',
        url: 'pages/vernaculaire/vernaculaire-eau-rouret.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 21,
        name:  'L\'eau',
        sousTitre: 'Valbonne',
        url: 'pages/vernaculaire/vernaculaire-eau-valbonne.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 22,
        name:  'L\'eau',
        sousTitre: 'Biot',
        url: 'pages/vernaculaire/vernaculaire-eau-biot.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 23,
        name:  'L\'eau',
        sousTitre: 'Villeneuve-loubet',
        url: 'pages/vernaculaire/vernaculaire-eau-villeuneuve-loubet.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 24,
        name:  'L\'eau',
        sousTitre: 'Vallauris',
        url: 'pages/vernaculaire/vernaculaire-eau-vallauris.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 25,
        name:  'L\'eau',
        sousTitre: 'Antibes',
        url: 'pages/vernaculaire/vernaculaire-eau-antibes.html',
        vignette: 'img/phare3.jpg'
    }

    ];
 
    return {
        all: function () {
            return vernaculaires;
        },
        get: function (vId) {
            for (var i = 0; i < vernaculaires.length; i++) {
                if (vernaculaires[i].id === parseInt(vId)) {
                    return vernaculaires[i];
                }
            }
            return null;
        }
    };

}]);