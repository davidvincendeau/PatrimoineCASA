angular.module('casa').factory('Artistiques', [ function() {

      var artistiques = [{
        id: 0,
        name: 'La matière',
        sousTitre: 'La poterie et la céramique',
        url: 'pages/artistique/artistique-matiere-poterie.html',
        vignette: 'img/poterie.jpg'
    }, {
        id: 1,
        name: 'La matière',
        sousTitre: 'la verrerie d\'art',
        url: 'pages/artistique/artistique-matiere-verrerie.html',
        vignette: 'img/verrerie2.jpg'
    }, {
        id: 2,
        name: 'La matière',
        sousTitre: 'La peinture',
        url: 'pages/artistique/artistique-matiere-peinture.html',
        vignette: 'img/enceinte_naouri.jpg'
    }, {
        id: 3,
        name: 'Les musées',
        sousTitre: 'Les musées nationaux',
        url: 'pages/artistique/artistique-musees-musees-nationaux.html',
        vignette: 'img/musees.jpg'
    }, {
        id: 4,
        name: 'Les musées',
        sousTitre: 'Les musées Art et histoire',
        url: 'pages/artistique/artistique-musees-musees-art-histoire.html',
        vignette: 'img/musees-art.jpg'
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