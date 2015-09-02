angular.module('casa').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "CASA",
      lat : 43.7015074,
      lng : 7.0301
    },
    {
      name : "Plateau de Calern",
      lat : 43.7608778,
      lng : 6.90125
    },
	{
      name : "Plateau de Caussols",
      lat : 43.7252074,
      lng : 6.904847
    },
	{
      name : "Plateau de la Malle",
      lat : 43.7017139,
      lng : 6.918923
    },
  {
      name : "Baume Robert - Le Rouret",
      lat : 43.6785604,
      lng : 7.001038
    },
	{
      name : "La Colle du Maçon - Caussols",
      lat : 43.7174875,
      lng : 6.881176
    },
	{
      name : "Le Col du Clapier",
      lat : 43.7134014,
      lng : 6.89977
    },
	{
      name : "Le Haut Montet",
      lat : 43.7162058,
      lng : 6.930729
    },
    {
      name : "La bergerie du Montet",
      lat : 43.7085029,
      lng : 6.929946
    },
    {
      name : "Château Grimaldi",
	  lat : 43.5807427, 
      lng : 7.12822
    },
    {
      name : "Donjon - Le Bar-sur-Loup",
      lat : 43.701352,
      lng : 6.989333
    },
    {
      name : "Le Serre de la Madeleine",
      lat : 43.7601562,
      lng : 7.002371
    },
    {
      name : "Château de Villeneuve et parc",
      lat : 43.6598309,
      lng : 7.1241832
    },
    {
      name : "Tour de la Madone - Villeneuve-loubet",
      lat : 43.656238,
      lng : 7.098812
    },
    {
      name : "Donjon - Saint-Paul de Vence",
      lat : 43.696968,
      lng : 7.122259
    },
    {
      name : "Château de Tourrette-sur-Loup",
      lat : 43.715830,
      lng : 7.059306
    },
    {
      name : "Château de Gourdon",
      lat : 43.7201152,
      lng : 6.9784499
    },
    {
      name : "Château de Bar-sur-Loup",
      lat : 43.6911809,
      lng : 6.9809576
    },
    {
      name : "Château de Châteauneuf",
      lat : 43.674775,
      lng : 6.975999
    },
    {
      name : "Château d'Opio",
      lat : 43.668726,
      lng : 6.981965
    },
    {
      name : "Tour médiévale - Tourrettes-sur-Loup",
      lat : 43.716161,
      lng : 7.059036
    },
    {
      name : "Maison de Lartigue - Opio",
      lat : 43.6682697,
      lng : 6.9822241
    },
    {
      name : "Château - Vallauris",
      lat : 43.57984,
      lng : 7.053051
    },
    {
      name : "Place des Arcades - Valbonne",
      lat : 43.6414339,
      lng : 7.008779
    },
    {
      name : "Porte de Vence et Tour à mâchicoulis",
      lat : 43.697988,
      lng : 7.121944
    },
    {
      name : "Fort Carré - Antibes",
      lat : 43.590305,
      lng : 7.127230
    },
    {
      name : "Le bastion St André et ses remparts - Antibes",
      lat : 43.5772412,
      lng : 7.1260527
    },
    {
      name : "Le Clos Saint Pierre - Le Rouret",
      lat : 43.6744097,
      lng : 7.0062755
    },
    {
      name : "Maison seigneuriale - Courmes",
      lat : 43.742330,
      lng : 7.009302
    },
    {
      name : "Église Saint-Lambert - Caussols",
      lat : 43.742240,
      lng : 6.899948
    },
    {
      name : "Grotte chapelle de Calern - Caussols",
      lat : 43.7516442,
      lng : 6.9029889
    },
    {
      name : "Église Saint Grégoire - Tourrettes-sur-Loup",
      lat : 43.716708,
      lng : 7.059366
    },
    {
      name : "Chapelle Saint Jean - Tourrettes-sur-Loup",
      lat : 43.7175277,
      lng : 7.0565838
    },
    {
      name : "Abbaye du Canadel - La Colle sur Loup",
      lat : 43.685581,
      lng : 7.102900
    },
    {
      name : "Chapelle Saint Roch - La Colle sur Loup",
      lat : 43.685471,
      lng : 7.09152
    },
    {
      name : "La Collégiale : Église de la conversion de Saint Paul - Saint Paul de Vence",
      lat : 43.697273,
      lng : 7.121922
    },
    {
      name : "Chapelle Sainte Claire - Saint Paul de Vence",
      lat : 43.699420,
      lng : 7.121561
    },
    {
      name : "Eglise Saint Vincent - Gourdon",
      lat : 43.719634,
      lng : 6.977940
    },
    {
      name : "Chapelle Sainte-Catherine - Gourdon",
      lat : 43.719712,
      lng : 6.977710
    },
    {
      name : "Chapelle Saint-Pons",
      lat : 43.721076,
      lng : 6.977091
    },
    {
      name : "Chapelle de Pont du Loup",
      lat : 43.720750,
      lng : 6.991213
    },
    {
      name : "Église Saint Jacques le Majeur - Le Bar sur Loup",
      lat : 43.701562,
      lng : 6.989715
    },
    {
      name : "Chapelle des Soeurs Trinitaires - Le Bar sur Loup",
      lat : 43.700297,
      lng : 6.987580
    },
    {
      name : "Église paroissiale Saint Martin - Châteauneuf",
      lat : 43.6746727,
      lng : 6.975554
    },
    {
      name : "Église Saint Trophime - Opio",
      lat : 43.668507,
      lng : 6.982157
    },
    {
      name : "Église Saint-Pons - Le Rouret",
      lat : 43.6745469,
      lng : 7.0067754
    },
    {
      name : "Plateau de Calern",
      lat : 43.7608778,
      lng : 6.90125
    },
    {
      name : "Plateau de Calern",
      lat : 43.7608778,
      lng : 6.90125
    },
    {
      name : "Plateau de Calern",
      lat : 43.7608778,
      lng : 6.90125
    }

  ];

  return locationsObj;

}]);