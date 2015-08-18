angular.module('casa').factory('Histoires', [ function() {

      var histoires = [{
        id: 0,
        name: 'Decoupage chronologique',
        sousTitre: '',
        url: 'pages/histoire/decoupage-chronologique.html',
        vignette: 'img/historique.png'
    }, {
        id: 1,
        name: 'Traces pre/protohistoriques',
        sousTitre: 'Les traces pre et protohistoriques',
        url: '../www/pages/histoire/traces-pre-protohistoriques.html',
        vignette: 'img/menhir.jpg'
    }, {
        id: 2,
        name: 'Traces protohistoriques',
        sousTitre: 'Les traces protohistoriques',
        url: 'pages/histoire/traces-protohistoriques.html',
        vignette: 'img/enceinte_naouri.jpg'
    }, {
        id: 3,
        name: 'ANTIQUITE',
        sousTitre: 'Partie 1',
        url: '../www/pages/histoire/antiquite-1.html',
        vignette: 'img/antiquite_opidium.jpg'
    }, {
        id: 4,
        name: 'ANTIQUITE',
        sousTitre: 'Partie 2',
        url: '../www/pages/histoire/antiquite-2.html',
        vignette: 'img/saint_andrieu2.jpg'
    }, {
        id: 5,
        name: 'ANTIQUITE',
        sousTitre: 'Partie 3',
        url: '../www/pages/histoire/antiquite-3.html',
        vignette: 'img/aqueduc.png'
    }, {
        id: 6,
        name: 'ANTIQUITE',
        sousTitre: 'Partie 4',
        url: '../www/pages/histoire/antiquite-4.html',
        vignette: 'img/enceinte_tourraque.jpg'
    }, {
        id: 7,
        name: 'FEODALISATION',
        sousTitre: 'Partie 1',
        url: '../www/pages/histoire/feodalisation-1.html',
        vignette: 'img/musee_picasso.jpg'
    }, {
        id: 7,
        name: 'FEODALISATION',
        sousTitre: 'Partie 2',
        url: '../www/pages/histoire/feodalisation-2.html',
        vignette: 'img/chateau_villeneuve_loubet.jpg'
    }, {
        id: 7,
        name: 'FEODALISATION',
        sousTitre: 'Partie 3',
        url: '../www/pages/histoire/feodalisation-3.html',
        vignette: 'img/chateau_tourrette.jpg'
    }, {
        id: 7,
        name: 'FEODALISATION',
        sousTitre: 'Partie 4',
        url: '../www/pages/histoire/feodalisation-4.html',
        vignette: 'img/chateau_rouret.jpg'
    }, {
        id: 8,
        name: 'Traces pre/protohistoriques',
        sousTitre: 'Les traces pre et protohistoriques',
        url: '../www/pages/histoire/traces-pre-protohistoriques.html',
        vignette: 'img/menhir.jpg'
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