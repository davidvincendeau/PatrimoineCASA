angular.module('starter.services', [])

.factory('Paysages', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var paysages = [{
    id: 0,
    name: 'Paysages',
    lastText: 'Introduction',
    face: '../img/plateau2.jpg'
  }, {
    id: 1,
    name: 'Paysages',
    lastText: 'Les plateaux',
    face: '../img/plateau1.jpg'
  }, {
    id: 2,
    name: 'Paysages',
    lastText: 'Les collines',
    face: '../img/colline3.jpg'
  }, {
    id: 3,
    name: 'Paysages',
    lastText: 'Le littoral',
    face: '../img/litto3b.jpg'
  }, {
      id: 4,
      name: 'Les espaces naturels',
      lastText: 'Introduction',
      face: '../img/natura9.jpg'
  }, {
      id: 5,
      name: 'Les espaces naturels',
      lastText: 'Natura 2000 terrestre',
      face: '../img/natura4.jpg'
  }, {
      id: 6,
      name: 'Les espaces naturels',
      lastText: 'Les parcs naturels',
      face: '../img/parcs5.jpg'
  }, {
      id: 7,
      name: 'Les espaces naturels',
      lastText: 'ZNIEFF terrestre',
      face: '../img/znieff.jpg'
  }, {
      id: 8,
      name: 'L\'eau',
      lastText: 'Les axes bleus',
      face: '../img/bateau.jpg'
  }, {
      id: 9,
      name: 'L\'eau',
      lastText: 'Le milieu marin',
      face: '../img/marin2.jpg'
  }, {
      id: 10,
      name: 'L\'eau',
      lastText: 'Les phares',
      face: '../img/phare3.jpg'
  }];

  return {
    all: function() {
        return paysages;
    },
    remove: function(chat) {
        paysages.splice(paysages.indexOf(paysage), 1);
    },
    get: function (paysageId) {
        for (var i = 0; i < paysages.length; i++) {
            if (paysages[i].id === parseInt(paysageId)) {
                return paysages[i];
        }
      }
      return null;
    }
  };
});
