angular.module('casa').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "CASA",
      lat : 43.6243,
      lng : 7.0301
    },
    {
      name : "Plateau de Calern",
      lat : 43.7608778,
      lng : 6.90125
    }

  ];

  return locationsObj;

}]);