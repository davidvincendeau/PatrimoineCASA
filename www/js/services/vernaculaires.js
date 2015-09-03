angular.module('casa').factory('Vernaculaires', [ function() {

      var vernaculaires = [{
        id: 0,
        name: 'Les cultures',
        sousTitre: 'L\'olivier',
        url: '../www/pages/vernaculaires/vernaculaire-culture-olivier.html',
        vignette: 'img/plateau2.jpg'
    }, {
        id: 1,
        name: 'Les cultures',
        sousTitre: 'La vigne',
        url: '../www/pages/vernaculaires/vernaculaire-culture-vigne.html',
        vignette: 'img/plateau2.jpg'
    }, {
        id: 2,
        name: 'Les cultures',
        sousTitre: 'L\'horticulture',
        url: '../www/pages/vernaculaires/vernaculaire-culture-horticulture.html',
        vignette: 'img/plateau2.jpg'
    }, {
        id: 3,
        name: 'Les cultures',
        sousTitre: 'L\'oranger',
        url: '../www/pages/vernaculaires/vernaculaire-culture-oranger.html',
        vignette: 'img/plateau2.jpg'
    }, {
        id: 4,
        name: 'Les cultures',
        sousTitre: 'Le jasmin, la rose de mai',
        url: '../www/pages/vernaculaires/vernaculaire-culture-jasmin.html',
        vignette: 'img/plateau2.jpg'
    }, {
        id: 5,
        name: 'Les cultures',
        sousTitre: 'La violette',
        url: '../www/pages/vernaculaires/vernaculaire-culture-violette.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 6,
        name: 'Le bâti',
        sousTitre: 'Les grandes exploitations',
        url: '../www/pages/Vernaculaires/vernaculaire-bati-grandes-exploitations.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 7,
        name: 'Le bâti',
        sousTitre: 'Les bories, bergeries',
        url: '../www/pages/Vernaculaires/vernaculaire-bati-bories.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 8,
        name:  'Le bâti',
        sousTitre: 'Les moulins',
        url: '../www/pages/vernaculaires/vernaculaire-bati-moulins.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 9,
        name:  'L\'eau',
        sousTitre: 'Introduction',
        url: '../www/pages/vernaculaires/vernaculaire-eau-introduction.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 10,
        name:  'L\'eau',
        sousTitre: 'Caussols',
        url: '../www/pages/vernaculaires/vernaculaire-eau-caussols.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 11,
        name:  'L\'eau',
        sousTitre: 'Courmes',
        url: '../www/pages/vernaculaires/vernaculaire-eau-courmes.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 12,
        name:  'L\'eau',
        sousTitre: 'Tourrette-sur-Loup',
        url: '../www/pages/vernaculaires/vernaculaire-eau-tourrettes-sur-loup.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 13,
        name:  'L\'eau',
        sousTitre: 'La Colle-sur-Loup',
        url: '../www/pages/vernaculaires/vernaculaire-eau-colle-sur-loup.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 14,
        name:  'L\'eau',
        sousTitre: 'Les Gourdon',
        url: '../www/pages/vernaculaires/vernaculaire-eau-gourdon.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 15,
        name:  'L\'eau',
        sousTitre: 'Saint-Paul',
        url: '../www/pages/vernaculaires/vernaculaire-eau-saint-paul-de-vence.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 16,
        name:  'L\'eau',
        sousTitre: 'Bar-sur-Loup',
        url: '../www/pages/vernaculaires/vernaculaire-eau-bar-sur-loup.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 17,
        name:  'L\'eau',
        sousTitre: 'Roquefort-les-Pins',
        url: '../www/pages/vernaculaires/vernaculaire-eau-roquefort-les-pins.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 18,
        name:  'L\'eau',
        sousTitre: 'Châteauneuf',
        url: '../www/pages/vernaculaires/vernaculaire-eau-chateauneuf.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 19,
        name:  'L\'eau',
        sousTitre: 'Opio',
        url: '../www/pages/vernaculaires/vernaculaire-eau-opio.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 20,
        name:  'L\'eau',
        sousTitre: 'Le Rouret',
        url: '../www/pages/vernaculaires/vernaculaire-eau-rouret.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 21,
        name:  'L\'eau',
        sousTitre: 'Valbonne',
        url: '../www/pages/vernaculaires/vernaculaire-eau-valbonne.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 22,
        name:  'L\'eau',
        sousTitre: 'Biot',
        url: '../www/pages/vernaculaires/vernaculaire-eau-biot.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 23,
        name:  'L\'eau',
        sousTitre: 'Villeneuve-loubet',
        url: '../www/pages/vernaculaires/vernaculaire-eau-villeuneuve-loubet.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 24,
        name:  'L\'eau',
        sousTitre: 'Vallauris',
        url: '../www/pages/vernaculaires/vernaculaire-eau-vallauris.html',
        vignette: 'img/phare3.jpg'
    }, {
        id: 25,
        name:  'L\'eau',
        sousTitre: 'Antibes',
        url: '../www/pages/vernaculaires/vernaculaire-eau-antibes.html',
        vignette: 'img/phare3.jpg'
    }

    ];
 
    return {
        all: function () {
            return vernaculaires;
        },
        get: function (vernaculairesId) {
            for (var i = 0; i < vernaculaires.length; i++) {
                if (vernaculaires[i].id === parseInt(vernaculairesId)) {
                    return vernaculaires[i];
                }
            }
            return null;
        }
    };

}]);