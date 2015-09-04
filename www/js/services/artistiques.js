angular.module('casa').factory('Artistiques', [ function() {

      var artistiques = [{
        id: 0,
        name: 'La matière',
        sousTitre: 'La poterie et la céramique',
        url: 'pages/artistique/artistique-matiere-poterie.html',
        vignette: 'img/historique.png'
    }, {
        id: 1,
        name: 'La matière',
        sousTitre: 'la verrerie d\'art',
        url: 'pages/artistique/artistique-matiere-verrerie.html',
        vignette: 'img/menhir.jpg'
    }, {
        id: 2,
        name: 'La matière',
        sousTitre: 'La peinture',
        url: 'pages/artistique/artistique-matiere-peinture.html',
        vignette: 'img/enceinte_naouri.jpg'
    }, {
        id: 3,
        name: 'Antiquité',
        sousTitre: 'Partie 1',
        url: 'pages/artistique/antiquite-1.html',
        vignette: 'img/antiquite_opidium.jpg'
    }, {
        id: 4,
        name: 'Antiquité',
        sousTitre: 'Partie 2',
        url: 'pages/artistique/antiquite-2.html',
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
        url: 'pages/histoire/feodalisation-4.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 12,
        name: 'Sites historiques',
        sousTitre: 'Gourdon',
        url: 'pages/histoire/a.html',
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
        url: 'pages/histoire/feodalisation-4.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 15,
        name: 'Sites historiques',
        sousTitre: 'Châteauneuf',
        url: 'pages/histoire/feodalisation-4.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 16,
        name: 'Sites historiques',
        sousTitre: 'Opio',
        url: 'pages/histoire/feodalisation-4.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 17,
        name: 'Les villages repeuplés',
        sousTitre: 'Villeneuve-Loubet',
        url: 'pages/histoire/feodalisation-4.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 18,
        name: 'Traces pre/protohistoriques',
        sousTitre: 'Les traces pre et protohistoriques',
        url: 'pages/histoire/traces-pre-protohistoriques.html',
        vignette: 'img/menhir.jpg'
    }];
    return {
        all: function () {
            return artistiques;
        },
        get: function (artistiqueId) {
            for (var i = 0; i < artistiques.length; i++) {
                if (artistiques[i].id === parseInt(artistiqueId)) {
                    return artistiques[i];
                }
            }
            return null;
        }
    };

}]);