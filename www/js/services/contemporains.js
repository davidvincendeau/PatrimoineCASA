angular.module('casa').factory('Contemporains', [ function() {

      var contemporains = [{
        id: 0,
        name: 'L\'architecture',
        sousTitre: 'Localisation',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-localisation.html',
        vignette: 'img/historique.png'
    }, {
        id: 1,
        name: 'L\'architecture',
        sousTitre: 'Rurale',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-rurale.html',
        vignette: 'img/menhir.jpg'
    }, {
        id: 2,
        name: 'L\'architecture',
        sousTitre: 'Néo-classique',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-neo-classique.html',
        vignette: 'img/enceinte_naouri.jpg'
    }, {
        id: 3,
        name: 'L\'architecture',
        sousTitre: 'Néo-mauresque',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-neo-mauresque.html',
        vignette: 'img/antiquite_opidium.jpg'
    }, {
        id: 4,
        name: 'L\'architecture',
        sousTitre: 'Néo-gothique',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-neo-gothique.html',
        vignette: 'img/saint_andrieu2.jpg'
    }, {
        id: 5,
        name: 'L\'architecture',
        sousTitre: 'Art-déco',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-art-deco.html',
        vignette: 'img/aqueduc.png'
    }, {
        id: 6,
        name: 'L\'architecture',
        sousTitre: 'Néo-provençale régionaliste',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-neo-provencale.html',
        vignette: 'img/enceinte_tourraque.jpg'
    }, {
        id: 7,
        name: 'L\'architecture',
        sousTitre: 'Moderne années 30',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-moderne-annee30.html',
        vignette: 'img/musee_picasso.jpg'
    }, {
        id: 8,
        name: 'L\'architecture',
        sousTitre: 'Contemporaine',
        url: 'pages/contemporain/patrimoine-contemporain-architecture-contemporaine.html',
        vignette: 'img/chateau_villeneuve_loubet.jpg'
    }, {
        id: 9,
        name: 'Les Jardins remarquables',
        sousTitre: 'Introduction',
        url: 'pages/contemporain/patrimoine_contemporain-jardins-remarquables-introduction.html',
        vignette: 'img/chateau_tourrette.jpg'
    }, {
        id: 10,
        name: 'Les Jardins remarquables',
        sousTitre: 'Les jardins publics',
        url: 'pages/contemporain/patrimoine_contemporain-jardins-remarquables-jardins-publics.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 11,
        name: 'Les Jardins remarquables',
        sousTitre: 'Les jardins privés',
        url: 'pages/contemporain/patrimoine_contemporain-jardins-remarquables-jardins-prives.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 12,
        name: 'Les déplacements',
        sousTitre: 'Introduction',
        url: 'pages/contemporain/patrimoine_contemporain-deplacements-introduction.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 13,
        name: 'Les déplacements',
        sousTitre: 'Chemin de fer',
        url: 'pages/contemporain/patrimoine-contemporain-deplacements-chemin-de-fer.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 14,
        name: 'Les déplacements',
        sousTitre: 'Le tramway des Alpes-Maritimes',
        url: 'pages/contemporain/patrimoine-contemporain-deplacements-tramway.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 15,
        name: 'Les déplacements',
        sousTitre: 'Le tramway de Cannes',
        url: 'pages/contemporain/patrimoine-contemporain-deplacements-tramway-cannes.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 16,
        name: 'Les déplacements',
        sousTitre: 'Le tramway de Nice',
        url: 'pages/contemporain/patrimoine-contemporain-deplacements-tramway-nice.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 17,
        name: 'Bibliographie',
        sousTitre: 'Les ouvrages',
        url: 'pages/bibliographie/bibliographie.html',
        vignette: 'img/chateau_rouret.jpg'
    }];
    return {
        all: function () {
            return contemporains;
        },
        get: function (cId) {
            for (var i = 0; i < contemporains.length; i++) {
                if (contemporains[i].id === parseInt(cId)) {
                    return contemporains[i];
                }
            }
            return null;
        }
    };

}]);