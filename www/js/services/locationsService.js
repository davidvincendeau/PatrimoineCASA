angular.module('casa').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "CASA",
      lat : 43.6243,
      lng : 7.0301
    },
    {
      name : "CASA Siège",
      lat : 43.6221,
      lng : 7.0318
    }

  ];

  return locationsObj;

}]);