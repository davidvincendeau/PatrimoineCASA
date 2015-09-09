angular.module('casa').factory('Religieux', [ function() {

      var religieux = [{
        id: 0,
        name: 'Les édifices religieux',
        sousTitre: 'Introduction',
        url: 'pages/religieux/heritage-religieux.html',
        vignette: 'img/religieux-intro.jpg'
        },{
        id: 1,
        name: 'Les édifices religieux',
        sousTitre: 'Lexique',
        url: 'pages/religieux/religieux-lexique.html',
        vignette: 'img/religieux-lexique.jpg'
        },{
        id: 2,
        name: 'Les édifices religieux',
        sousTitre: 'Tourrettes sur Loup',
        url: 'pages/religieux/religieux-tourrettes-sur-loup.html',
        vignette: 'img/religieux-tourrettes.jpg'
        },{
        id: 3,
        name: 'Les édifices religieux',
        sousTitre: 'La Colle sur Loup',
        url: 'pages/religieux/religieux-colle-sur-loup.html',
        vignette: 'img/religieux-colle.jpg'
        },{
        id: 4,
        name: 'Les édifices religieux',
        sousTitre: 'Saint Paul de Vence',
        url: 'pages/religieux/religieux-saint-paul-de-vence.html',
        vignette: 'img/religieux-saintpaul.jpg'
        }, {
        id: 5,
        name: 'Les édifices religieux',
        sousTitre: 'Gourdon',
        url: 'pages/religieux/religieux-gourdon.html',
        vignette: 'img/religieux-gourdon.jpg'
    }, {
        id: 6,
        name: 'Les édifices religieux',
        sousTitre: 'Le Bar sur Loup',
        url: 'pages/religieux/religieux-bar-sur-loup.html',
        vignette: 'img/religieux-bar.jpg'
    }, {
        id: 7,
        name: 'Les édifices religieux',
        sousTitre: 'Châteuneuf',
        url: 'pages/religieux/religieux-chateauneuf.html',
        vignette: 'img/religieux-chateauneuf.jpg'
    }, {
        id: 8,
        name: 'Les édifices religieux',
        sousTitre: 'Opio',
        url: 'pages/religieux/religieux-opio.html',
        vignette: 'img/religieux-opio.jpg'
    }, {
        id: 9,
        name: 'Les édifices religieux',
        sousTitre: 'Le Rouret',
        url: 'pages/religieux/religieux-rouret.html',
        vignette: 'img/religieux-rouret.jpg'
    }, {
        id: 10,
        name: 'Les édifices religieux',
        sousTitre: 'Roquefort les Pins',
        url: 'pages/religieux/religieux-roquefort-les-pins.html',
        vignette: 'img/religieux-roquefort.jpg'
    }, {
        id: 11,
        name: 'Les édifices religieux',
        sousTitre: 'Valbonne',
        url: 'pages/religieux/religieux-valbonne.html',
        vignette: 'img/religieux-valbonne.jpg'
    }, {
        id: 12,
        name: 'Les édifices religieux',
        sousTitre: 'Biot',
        url: 'pages/religieux/religieux-biot.html',
        vignette: 'img/religieux-biot.jpg'
    }, {
        id: 13,
        name: 'Les édifices religieux',
        sousTitre: 'Villeneuve Loubet',
        url: 'pages/religieux/religieux-villeneuve-loubet.html',
        vignette: 'img/religieux-villeneuve.jpg'
    }, {
        id: 14,
        name: 'Les édifices religieux',
        sousTitre: 'Vallauris',
        url: 'pages/religieux/religieux-vallauris.html',
        vignette: 'img/religieux-vallauris.jpg'
    }, {
        id: 15,
        name: 'Les édifices religieux',
        sousTitre: 'Antibes',
        url: 'pages/religieux/religieux-antibes.html',
        vignette: 'img/religieux-antibes.jpg'
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