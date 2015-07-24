angular.module('starter.services', [])

.factory('Paysages', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var paysages = [{
    id: 0,
    name: 'Paysages',
    lastText: 'Introduction',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Paysages',
    lastText: 'Les plateaux',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Paysages',
    lastText: 'Les collines',
    face: '../img/parcs7.jpg'
  }, {
    id: 3,
    name: 'Paysages',
    lastText: 'Le littoral',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
      id: 4,
      name: 'Les espaces naturels',
      lastText: 'Introduction',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
      id: 5,
      name: 'Les espaces naturels',
      lastText: 'Natura 2000 terrestre',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
      id: 6,
      name: 'Les espaces naturels',
      lastText: 'Les parcs naturels',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
      id: 7,
      name: 'Les espaces naturels',
      lastText: 'ZNIEFF terrestre',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
      id: 8,
      name: 'L\'eau',
      lastText: 'Les axes bleus',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
      id: 9,
      name: 'L\'eau',
      lastText: 'Le milieu marin',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
      id: 10,
      name: 'L\'eau',
      lastText: 'Les phares',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
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
