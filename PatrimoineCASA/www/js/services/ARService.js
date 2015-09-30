angular.module('casa').factory('ARService', [function () {

    var locationsObj = {};

    locationsObj.savedLocations = [
      {
          id: 100,
          name: 'Antibes',
          sousTitre: 'Antibes',
          url: '/app/paysages/3',
          vignette: 'img/villes/antibes.jpg',
          lat: 43.586198,
          lng: 7.105620,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 101,
          name: 'Bézaudun-les-Alpes',
          sousTitre: 'Bézaudun-les-Alpes',
          url: '/app/paysages/1',
          vignette: 'img/villes/bezaudun.jpg',
          lat: 43.807708,
          lng: 7.096142,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 102,
          name: 'Biot',
          sousTitre: 'Biot',
          url: '/app/paysages/2',
          vignette: 'img/villes/biot.jpg',
          lat: 43.626953,
          lng: 7.098935,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 103,
          name: 'Bouyon',
          sousTitre: 'Bouyon',
          url: '/app/paysages/1',
          vignette: 'img/villes/bouyon.jpg',
          lat: 43.825353,
          lng: 7.123860,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 104,
          name: 'Caussols',
          sousTitre: 'Caussols',
          url: '/app/paysages/1',
          vignette: 'img/villes/caussols.jpg',
          lat: 43.745080,
          lng: 6.910338,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 105,
          name: 'Châteauneuf',
          sousTitre: 'Châteauneuf',
          url: '/app/histoire/15',
          vignette: 'img/villes/chateauneuf.jpg',
          lat: 43.675013,
          lng: 6.977200,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 106,
          name: 'Cipières',
          sousTitre: 'Cipières',
          url: '/app/histoire/30',
          vignette: 'img/villes/cipieres.jpg',
          lat: 43.783095,
          lng: 6.955531,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 107,
          name: 'Conségudes',
          sousTitre: 'Conségudes',
          url: '/app/paysages/1',
          vignette: 'img/villes/consegudes.jpg',
          lat: 43.843825,
          lng: 7.048328,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 108,
          name: 'Courmes',
          sousTitre: 'Courmes',
          url: '/app/histoire/29',
          vignette: 'img/villes/courmes.jpg',
          lat: 43.742524,
          lng: 7.008569,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 109,
          name: 'Coursegoules',
          sousTitre: 'Coursegoules',
          url: '/app/vernaculaire/8',
          vignette: 'img/villes/coursegoules.jpg',
          lat: 43.794468,
          lng: 7.039748,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 110,
          name: 'Gourdon',
          sousTitre: 'Gourdon',
          url: '/app/vernaculaire/14',
          vignette: 'img/villes/gourdon.jpg',
          lat: 43.720023,
          lng: 6.978164,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 111,
          name: 'Gréolières',
          sousTitre: 'Gréolières',
          url: '/app/histoire/30',
          vignette: 'img/villes/greolieres.jpg',
          lat: 43.795557,
          lng: 6.943700,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 112,
          name: 'La Colle sur Loup',
          sousTitre: 'La Colle sur Loup',
          url: '/app/histoire/26',
          vignette: 'img/villes/colle.jpg',
          lat: 43.687108,
          lng: 7.103289,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 113,
          name: 'Le Bar sur Loup',
          sousTitre: 'Le Bar sur Loup',
          url: '/app/histoire/13',
          vignette: 'img/villes/bar.jpg',
          lat: 43.701455,
          lng: 6.990130,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 114,
          name: 'Le Rouret',
          sousTitre: 'Le Rouret',
          url: '/app/histoire/27',
          vignette: 'img/villes/rouret.jpg',
          lat: 43.674303,
          lng: 7.006281,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 115,
          name: 'Les Ferres',
          sousTitre: 'Les Ferres',
          url: '/app/paysages/0',
          vignette: 'img/villes/ferres.jpg',
          lat: 43.847167,
          lng: 7.093195,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 116,
          name: 'Opio',
          sousTitre: 'Opio',
          url: '/app/histoire/16',
          vignette: 'img/villes/opio.jpg',
          lat: 43.668704,
          lng: 6.982114,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 117,
          name: 'Roquefort les Pins',
          sousTitre: 'Roquefort les Pins',
          url: '/app/histoire/28',
          vignette: 'img/villes/roquefort.jpg',
          lat: 43.666193,
          lng: 7.049399,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 118,
          name: 'Roquestéron Grasse',
          sousTitre: 'Roquestéron Grasse',
          url: '/app/paysage/0',
          vignette: 'img/villes/roquesteron.jpg',
          lat: 43.872381,
          lng: 7.005836,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 119,
          name: 'Saint Paul de Vence',
          sousTitre: 'Saint Paul de Vence',
          url: '/app/histoire/24',
          vignette: 'img/villes/saintpaul.jpg',
          lat: 43.696982,
          lng: 7.122255,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 120,
          name: 'Tourrettes sur Loup',
          sousTitre: 'Tourrettes sur Loup',
          url: '/app/histoire/14',
          vignette: 'img/villes/tourrettes.jpg',
          lat: 43.715723,
          lng: 7.059003,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 121,
          name: 'Valbonne Sophia Antipolis',
          sousTitre: 'Valbonne Sophia Antipolis',
          url: '/app/histoire/23',
          vignette: 'img/villes/valbonne.jpg',
          lat: 43.640381,
          lng: 7.008632,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 122,
          name: 'Vallauris Golfe Juan',
          sousTitre: 'Vallauris Golfe Juan',
          url: '/app/histoire/23',
          vignette: 'img/villes/vallauris.jpg',
          lat: 43.579428,
          lng: 7.055230,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 123,
          name: 'Villeneuve-Loubet',
          sousTitre: 'Villeneuve-Loubet',
          url: '/app/histoire/17',
          vignette: 'img/villes/villeneuve.jpg',
          lat: 43.657882,
          lng: 7.121773,
          icon: 'local_icons.orange_icon'
      },
      {
          id: 98,
          name: 'Viaduc du Loup',
          sousTitre: 'Tourrettes-sur-Loup',
          url: '/app/contemporain/13',
          vignette: 'img/vignettes/viaduc-tourrettes.jpg',
          lat: 43.720438,
          lng: 6.992183,
          icon: 'local_icons.orange_icon'
      }

    ];

    return locationsObj;

}]);