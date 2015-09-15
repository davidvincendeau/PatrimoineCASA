angular.module('casa').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
		id: 0,
		name : 'CASA',
		sousTitre: 'Siège de la CASA',
		url: 'pages/artistique/artistique-matiere-poterie.html',
		vignette: 'img/vignettes/casa.jpg',
		lat : 43.7015074,
		lng : 7.0301,
		icon :'local_icons.purple_icon'
    },
    {
		id: 1,
		name : 'Plateau de Calern',
		sousTitre: 'Caussols',
		url: '/app/paysages/1',
		vignette: 'img/vignettes/calerne.jpg',
		lat : 43.7608778,
		lng : 6.90125,
		icon : 'local_icons.purple_icon'
    },
	{
		id: 2,
		name : 'Plateau de Caussols',
		sousTitre: 'Caussols',
		url: '/app/paysages/1',
		vignette: 'img/vignettes/caussols.jpg',
		lat : 43.7252074,
		lng : 6.904847
    },
	{
		id: 2,
		name : 'Plateau de la Malle',
		sousTitre: 'La Malle',
		url: '/app/paysages/1',
		vignette: 'img/vignettes/malle.jpg',
		lat : 43.7017139,
		lng : 6.918923
    },
  {
		id: 3,
		name : 'Baume Robert',
		sousTitre: 'Le Rouret',
		url: '/app/histoire/1',
		vignette: 'img/vignettes/robert.jpg',
		lat : 43.6785604,
		lng : 7.001038
    },
	{
		id: 4,
		name : 'Le Col du Clapier',
		sousTitre: 'Le Clapier',
		url: '/app/histoire/20',
		vignette: 'img/vignettes/clapier.jpg',
		lat : 43.7134014,
		lng : 6.89977
    },
    {
		id: 6,
		name : 'Château Grimaldi',
		sousTitre: 'Antibes',
		url: '/app/histoire/7',
		vignette: 'img/vignettes/picasso.jpg',
		lat : 43.5807427, 
		lng : 7.12822
    },
    {
		id: 7,
		name : 'Donjon ',
		sousTitre: 'Le Bar-sur-Loup',
		url: '/app/histoire/8',
		vignette: 'img/vignettes/donjon-bar.jpg',
		lat : 43.701352,
		lng : 6.989333
    },
    {
		id: 8,
		name : 'Château et parc',
		sousTitre: 'Villeneuve Loubet',
		url: '/app/histoire/8',
		vignette: 'img/vignettes/chateau-villeneuve.jpg',
		lat : 43.6598309,
		lng : 7.1241832
    },
    {
		id: 9,
		name : 'Tour de la Madone ',
		sousTitre: 'Villeneuve-loubet',
		url: '/app/histoire/9',
		vignette: 'img/vignettes/tour-madonne.jpg',
		lat : 43.656238,
		lng : 7.098812
    },
    {
		id: 10,
		name : 'Donjon',
		sousTitre: 'Saint-Paul de Vence ',
		url: '/app/histoire/9',
		vignette: 'img/vignettes/donjon-saintpaul.jpg',
		lat : 43.696968,
		lng : 7.122259
    },
    {
		id: 11,
		name : 'Château',
		sousTitre: 'Tourrettes sur Loup',
		url: '/app/histoire/9',
		vignette: 'img/vignettes/chateau-tourrettes.jpg',
		lat : 43.715830,
		lng : 7.059306
    },
    {
		id: 12,
		name : 'Château',
		sousTitre: 'Gourdon',
		url: '/app/histoire/10',
		vignette: 'img/vignettes/chateau-gourdon.jpg',
		lat : 43.7201152,
		lng : 6.9784499
    },
    {
		id: 13,
		name : 'Château',
		sousTitre: 'Bar-sur-Loup',
		url: '/app/histoire/10',
		vignette: 'img/vignettes/chateau-bar.jpg',
		lat : 43.6911809,
		lng : 6.9809576
    },
    {
		id: 14,
		name : 'Château',
		sousTitre: 'Châteauneuf',
		url: '/app/histoire/10',
		vignette: 'img/vignettes/chateau-chateauneuf.jpg',
		lat : 43.674775,
		lng : 6.975999
    },
    {
		id: 15,
		name : 'Château',
		sousTitre: 'Opio',
		url: '/app/histoire/10',
		vignette: 'img/vignettes/chateau-opio.jpg',
		lat : 43.668726,
		lng : 6.981965
    },
    {
		id: 16,
		name : 'Tour médiévale',
		sousTitre: 'Tourrettes-sur-Loup',
		url: '/app/histoire/14',
		vignette: 'img/vignettes/tour-tourrettes.jpg',
		lat : 43.716161,
		lng : 7.059036
    },
    {
		id: 17,
		name : 'Maison de Lartigue',
		sousTitre: 'Opio',
		url: '/app/histoire/16',
		vignette: 'img/vignettes/maison-lartigue.jpg',
		lat : 43.716161,
		lat : 43.6682697,
		lng : 6.9822241
    },
    {
		id: 18,
		name : 'Château',
		sousTitre: 'Vallauris',
		url: '/app/histoire/22',
		vignette: 'img/vignettes/chateau-vallauris.jpg',
		lat : 43.57984,
		lng : 7.053051
    },
    {
		id: 19,
		name : 'Place des Arcades',
		sousTitre: 'Valbonne',
		url: '/app/histoire/21',
		vignette: 'img/vignettes/place-arcade.jpg',
		lat : 43.6414339,
		lng : 7.008779
    },
    {
		id: 20,
		name : 'Porte de Vence et Tour à mâchicoulis',
		sousTitre: 'Vence',
		url: '/app/histoire/24',
		vignette: 'img/vignettes/porte-vence.jpg',
		lat : 43.697988,
		lng : 7.121944
    },
    {
		id: 21,
		name : 'Fort Carré',
		sousTitre: 'Antibes',
		url: '/app/histoire/25',
		vignette: 'img/vignettes/fort-carre.jpg',
		lat : 43.590305,
		lng : 7.127230
    },
    {
		id: 22,
		name : 'Le bastion St André et ses remparts',
		sousTitre: 'Antibes',
		url: '/app/histoire/25',
		vignette: 'img/vignettes/bastion-andre.jpg',
		lat : 43.5772412,
		lng : 7.1260527
    },
    {
		id: 23,
		name : 'Le Clos Saint Pierre',
		sousTitre: 'Le Rouret',
		url: '/app/histoire/27',
		vignette: 'img/vignettes/clos-saintpierre.jpg',
		lat : 43.6744097,
		lng : 7.0062755
    },
    {
		id: 24,
		name : 'Maison seigneuriale',
		sousTitre: 'Courmes',
		url: '/app/histoire/29',
		vignette: 'img/vignettes/maison-courmes.jpg',
		lat : 43.742330,
		lng : 7.009302
    },
    {
		id: 25,
		name : 'Église Saint-Lambert',
		sousTitre: 'Caussols',
		url: '/app/religieux/16',
		vignette: 'img/vignettes/eglise-saintlambert.jpg',
		lat : 43.742240,
		lng : 6.899948
    },
    {
		id: 26,
		name : 'Grotte chapelle de Calern',
		sousTitre: 'Caussols',
		url: '/app/religieux/16',
		vignette: 'img/vignettes/grotte-calern.jpg',
		lat : 43.7516442,
		lng : 6.9029889
    },
    {
		id: 27, 
		name : 'Église Saint Grégoire',
		sousTitre: 'Tourrettes-sur-Loup',
		url: '/app/religieux/2',
		vignette: 'img/vignettes/eglise-saintgregoire.jpg',
		lat : 43.716708,
		lng : 7.059366
    },
    {
		id: 28,
		name : 'Chapelle Saint Jean',
		sousTitre: 'Tourrettes-sur-Loup',
		url: '/app/religieux/2',
		vignette: 'img/vignettes/chapelle-saint-jean.jpg',
		lat : 43.7175277,
		lng : 7.0565838
    },
    {
		id: 29,
		name : 'Abbaye du Canadel',
		sousTitre: 'La Colle sur Loup',
		url: '/app/religieux/3',
		vignette: 'img/vignettes/canadel.jpg',
		lat : 43.685581,
		lng : 7.102900
    },
    {
		id: 30,
		name : 'Chapelle Saint Roch',
		sousTitre: 'La Colle sur Loup',
		url: '/app/religieux/3',
		vignette: 'img/vignettes/chapelle-saint-roch.jpg',
		lat : 43.685471,
		lng : 7.09152
    },
    {
		id: 31,
		name : 'La Collégiale',
		sousTitre: 'Saint Paul de Vence',
		url: '/app/religieux/4',
		vignette: 'img/vignettes/collegiale.jpg',
		lat : 43.697273,
		lng : 7.121922
    },
    {
		id: 32,
		name : 'Chapelle Sainte Claire',
		sousTitre: 'Saint Paul de Vence',
		url: '/app/religieux/4',
		vignette: 'img/vignettes/chapelle-sainte-claire.jpg',
		lat : 43.699420,
		lng : 7.121561
    },
    {
		id: 33,
		name : 'Eglise Saint Vincent',
		sousTitre: 'Gourdon',
		url: '/app/religieux/5',
		vignette: 'img/vignettes/chapelle-saint-vincent.jpg',
		lat : 43.719634,
		lng : 6.977940
    },
    {
		id: 34,
		name : 'Chapelle Sainte-Catherine',
		sousTitre: 'Gourdon',
		url: '/app/religieux/5',
		vignette: 'img/vignettes/chapelle-sainte-catherine.jpg',
		lat : 43.719712,
		lng : 6.977710
    },
    {
		id: 35,
		name : 'Chapelle Saint-Pons',
		sousTitre: 'Gourdon',
		url: '/app/religieux/5',
		vignette: 'img/vignettes/chapelle-saint-pons.jpg',
		lat : 43.721076,
		lng : 6.977091
    },
    {
		id: 36,
		name : 'Chapelle',
		sousTitre: 'Pont du Loup',
		url: '/app/religieux/5',
		vignette: 'img/vignettes/chapelle-pontduloup.jpg',
		lat : 43.720750,
		lng : 6.991213
    },
    {
		id: 37,
		name : 'Église Saint Jacques le Majeur',
		sousTitre: 'Le Bar sur Loup',
		url: '/app/religieux/6',
		vignette: 'img/vignettes/eglise-saint-jacques.jpg',
		lat : 43.701562,
		lng : 6.989715
    },
    {
		id: 38,
		name : 'Chapelle des Soeurs Trinitaires',
		sousTitre: 'Le Bar sur Loup',
		url: '/app/religieux/6',
		vignette: 'img/vignettes/trinitaire.jpg',
		lat : 43.700297,
		lng : 6.987580
    },
    {
		id: 39,
		name : 'Église paroissiale Saint Martin',
		sousTitre: 'Châteauneuf',
		url: '/app/religieux/7',
		vignette: 'img/vignettes/eglise-saintmartin.jpg',
		lat : 43.6746727,
		lng : 6.975554
    },
    {
		id: 40,
		name : 'Église Saint Trophime',
		sousTitre: 'Opio',
		url: '/app/religieux/8',
		vignette: 'img/vignettes/sainte-trophime.jpg',
		lat : 43.668507,
		lng : 6.982157
    },
    {
		id: 41,
		name : 'Église Saint-Pons',
		sousTitre: 'Le Rouret',
		url: '/app/religieux/9',
		vignette: 'img/vignettes/eglise-saintpons.jpg',
		lat : 43.6745469,
		lng : 7.0067754
    },
    {
		id: 42,
		name : 'Église paroissiale Saint-Blaise',
		sousTitre: 'Valbonne',
		url: 'p/app/religieux/11',
		vignette: 'img/vignettes/sainte-blaise.jpg',
		lat : 43.6404762,
		lng : 7.0089746
    },
    {
		id: 43,
		name : 'Centre Pastoral Paul VI',
		sousTitre: 'Valbonne',
		url: '/app/religieux/11',
		vignette: 'img/vignettes/paulvi.jpg',
		lat : 43.6231425,
		lng : 7.052152
    },
    {
		id: 44,
		name : 'Eglise',
		sousTitre: 'Biot',
		url: '/app/religieux/12',
		vignette: 'img/vignettes/eglise-biot.jpg',
		lat : 43.6269388,
		lng : 7.099514
    },
    {
		id: 45,
		name : 'Chapelle des pénitents blancs',
		sousTitre: 'Biot',
		url: '/app/religieux/12',
		vignette: 'img/vignettes/chapelle-penitentsblancs.jpg',
		lat : 43.627358,
		lng : 7.098425
    },
    {
		id: 46,
		name : 'Eglise Saint Marc',
		sousTitre: 'Villeneuve-Loubet',
		url: '/app/religieux/13',
		vignette: 'img/vignettes/eglise-saintmarc.jpg',
		lat : 43.6775633,
		lng : 7.2188773
    },
    {
		id: 47,
		name : 'Eglise Saint Pierre de Golfe Juan',
		sousTitre: 'Golfe Juan',
		url: '/app/religieux/14',
		vignette: 'img/vignettes/eglise-saint-pierre-golfe.jpg',
		lat : 43.568973,
		lng : 7.074336
    },
    {
		id: 48,
		name : 'Cathédrale Notre-Dame-Sainte-Marie-de-la-Place',
		sousTitre: 'Antibes',
		url: '/app/religieux/15',
		vignette: 'img/vignettes/cathedrale-antibes.jpg',
		lat : 43.580797,
		lng : 7.127826
    },
    {
		id: 49,
		name : 'Chapelle du Saint Esprit',
		sousTitre: 'Antibes',
		url: '/app/religieux/15',
		vignette: 'img/vignettes/chapelle-saintbernardin.jpg',
		lat : 43.581786,
		lng : 7.124814
    },
    {
		id: 50,
		name : 'Chapelle Notre Dame de la Garoupe',
		sousTitre: 'Antibes',
		url: '/app/religieux/15',
		vignette: 'img/vignettes/notre-dame-garoupe.jpg',
		lat : 43.5642732,
		lng : 7.1318219
    },
    {
		id: 51,
		name : 'Chapelle Saint Jean',
		sousTitre: 'Antibes',
		url: '/app/religieux/15',
		vignette: 'img/vignettes/chapelle-saintjean.jpg',
		lat : 43.586369,
		lng : 7.091031
    },
    {
		id: 52,
		name : 'Chapelle Saint Benoît',
		sousTitre: 'Antibes',
		url: '/app/religieux/15',
		vignette: 'img/vignettes/eglise-saint-benoit.jpg',
		lat : 43.554273,
		lng : 7.128777
    },
    {
		id: 53,
		name : 'Lycée Agricole et Horticole',
		sousTitre: 'Antibes',
		url: '/app/vernaculaire/2',
		vignette: 'img/vignettes/lycee-horticole.jpg',
		lat : 43.5981474,
		lng : 7.1103913
    },
    {
		id: 54,
		name : 'Parfumerie Gazignaire',
		sousTitre: 'Golfe Juan',
		url: '/app/vernaculaire/3',
		vignette: 'img/vignettes/gazignaire.jpg',
		lat : 43.569408,
		lng : 7.074561
    },
    {
		id: 55,
		name : 'Bastide aux Violettes',
		sousTitre: 'Tourrettes sur Loup',
		url: '/app/vernaculaire/5',
		vignette: 'img/vignettes/bastide-violettes.jpg',
		lat : 43.7181229,
		lng : 7.0549477
    },
    {
		id: 56,
		name : 'Bastide du Roy',
		sousTitre: 'Antibes',
		url: '/app/vernaculaire/6',
		vignette: 'img/vignettes/bastide-roy.jpg',
		lat : 43.613959,
		lng : 7.106887
    },
    {
		id: 57,
		name : 'Papeterie',
		sousTitre: 'Le Bar-sur-Loup',
		url: '/app/vernaculaire/6',
		vignette: 'img/vignettes/papeterie.jpg',
		lat : 43.699769,
		lng : 7.000532
    },
    {
		id: 58,
		name : 'Manoir de Vaugrenier',
		sousTitre: 'Villeneuve-Loubet',
		url: '/app/vernaculaire/6',
		vignette: 'img/vignettes/manoire-vaugrenier.jpg',
		lat : 43.630070,
		lng : 7.118864
    },
    {
		id: 59,
		name : 'Mas Notre-Dame',
		sousTitre: 'Antibes',
		url: '/app/vernaculaire/6',
		vignette: 'img/vignettes/mas-notre-dame.jpg',
		lat : 43.566362,
		lng : 7.130814
    },
    {
		id: 60,
		name : 'Moulin' ,
		sousTitre: 'Opio',
		url: '/app/vernaculaire/8',
		vignette: 'img/vignettes/moulin-opio.jpg',
		lat : 43.6694099,
		lng : 6.9844821
    },
    {
		id: 61,
		name : 'Lavoir et fontaine' ,
		sousTitre: 'Courmes',
		url: '/app/vernaculaire/11',
		vignette: 'img/vignettes/abreuvoir-courmes.jpg',
		lat : 43.741694,
		lng : 7.008156
    },
    {
		id: 62,
		name : 'Abreuvoir' ,
		sousTitre: 'Tourrettes-sur-Loup',
		url: '/app/vernaculaire/12',
		vignette: 'img/vignettes/abreuvoir-tourrettes.jpg',
		lat : 43.716910,
		lng : 7.058243
    },
    {
		id: 63,
		name : 'Fontaine' ,
		sousTitre: 'La Colle-sur-Loup',
		url: '/app/vernaculaire/13',
		vignette: 'img/vignettes/fontaine-colle.jpg',
		lat : 43.687393,
		lng : 7.103404
    },
    {
		id: 64,
		name : 'Fontaine' ,
		sousTitre: 'Gourdon',
		url: '/app/vernaculaire/14',
		vignette: 'img/vignettes/fontaine-gourdon.jpg',
		lat : 43.720304,
		lng : 6.977901
    },
    {
		id: 65,
		name : 'La Grande Fontaine et le lavoir' ,
		sousTitre: 'Saint Paul de Vence',
		url: '/app/vernaculaire/15',
		vignette: 'img/vignettes/fontaine-saintpaul.jpg',
		lat : 43.696546,
		lng : 7.122053
    },
    {
		id: 66,
		name : 'Lavoir fontaine' ,
		sousTitre: 'Saint Paul de Vence',
		url: '/app/vernaculaire/15',
		vignette: 'img/vignettes/fontaine-saintpauldevence.jpg',
		lat : 43.695610,
		lng : 7.122791
    },
    {
		id: 67,
		name : 'Fontaine' ,
		sousTitre: 'Le Bar sur Loup',
		url: '/app/vernaculaire/16',
		vignette: 'img/vignettes/fontaine-bar.jpg',
		lat : 43.701375,
		lng : 6.988848
    },
    {
		id: 68,
		name : 'Source de la Brague' ,
		sousTitre: 'Châteauneuf',
		url: '/app/vernaculaire/18',
		vignette: 'img/vignettes/source-brague.jpg',
		lat : 43.675490,
		lng : 6.979461
    },
    {
		id: 69,
		name : 'Fontaine' ,
		sousTitre: 'Le Rouret',
		url: '/app/vernaculaire/20',
		vignette: 'img/vignettes/fontaine-rouret.jpg',
		lat : 43.674453,
		lng : 7.005998
    },
    {
		id: 70,
		name : 'Fontaine' ,
		sousTitre: 'Valbonne',
		url: '/app/vernaculaire/21',
		vignette: 'img/vignettes/fontaine-valbonne.jpg',
		lat : 43.641828,
		lng : 7.008828
    },
    {
		id: 71,
		name : 'Vieux Pont de la Brague' ,
		sousTitre: 'Biot',
		url: '/app/vernaculaire/22',
		vignette: 'img/vignettes/pont-brague.jpg',
		lat : 43.623256,
		lng : 7.098617
    },
    {
		id: 72,
		name : 'Fontaine Moussu' ,
		sousTitre: 'Villeneuve-Loubet',
		url: '/app/vernaculaire/23',
		vignette: 'img/vignettes/fontaine-moussu.jpg',
		lat : 43.658385,
		lng : 7.122107
    },
    {
		id: 73,
		name : 'Fontaine des Dauphins' ,
		sousTitre: 'Antibes',
		url: '/app/vernaculaire/25',
		vignette: 'img/vignettes/fontaine-dauphins.jpg',
		lat : 43.581601,
		lng : 7.126472
    },
    {
		id: 74,
		name : 'Lavoir et fontaine' ,
		sousTitre: 'Antibes',
		url: '/app/vernaculaire/25',
		vignette: 'img/vignettes/lavoire-antibes.jpg',
		lat : 43.579556,
		lng : 7.127232
    },
    {
		id: 75,
		name : 'Fontaine des casernes' ,
		sousTitre: 'Antibes',
		url: '/app/vernaculaire/25',
		vignette: 'img/vignettes/fontaine-casernes.jpg',
		lat : 43.582945,
		lng : 7.127848
    },
    {
		id: 76,
		name : 'Manufacture Jérome Massier Fils' ,
		sousTitre: 'Golfe-Juan',
		url: '/app/artistique/0',
		vignette: 'img/vignettes/massier.jpg',
		lat : 43.5766733,
		lng : 7.0544142
    },
    {
		id: 77,
		name : 'Usine de céramique Clément-Massier' ,
		sousTitre: 'Golfe-Juan',
		url: '/app/artistique/0',
		vignette: 'img/vignettes/ceramique-massier.jpg',
		lat : 43.567756,
		lng : 7.071142
    },
    {
		id: 78,
		name : 'Galerie internationale du verre' ,
		sousTitre: 'Biot',
		url: '/app/artistique/1',
		vignette: 'img/vignettes/galerie-verre.jpg',
		lat : 43.6261973,
		lng : 7.1025554
    },
    {
		id: 79,
		name : 'Musée national Fernand Léger' ,
		sousTitre: 'Biot',
		url: '/app/artistique/3',
		vignette: 'img/vignettes/musee-fernand-leger.jpg',
		lat : 43.6224935,
		lng : 7.1124714
    },
    {
		id: 80,
		name : 'Château Musée' ,
		sousTitre: 'Vallauris',
		url: '/app/artistique/3',
		vignette: 'img/vignettes/musee-magnelli.jpg',
		lat : 43.5796852,
		lng : 7.0528892
    },
    {
		id: 81,
		name : 'Fondation Maeght' ,
		sousTitre: 'Saint-Paul-de-Vence',
		url: '/app/artistique/4',
		vignette: 'img/vignettes/maeght.jpg',
		lat : 43.7008343,
		lng : 7.1149451
    },
    {
		id: 82,
		name : 'Château Salé' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/1',
		vignette: 'img/vignettes/chateau-sale.jpg',
		lat : 43.5844781,
		lng : 7.1122534
    },
    {
		id: 83,
		name : 'Grand Hôtel du Cap' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/2',
		vignette: 'img/vignettes/eilenroc.jpg',
		lat : 43.548408,
		lng : 7.121718
    },
    {
		id: 84,
		name : 'Villa Eilen Roc' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/2',
		vignette: 'img/vignettes/villa-eilenroc.jpg',
		lat : 43.545575,
		lng : 7.130325
    },
    {
		id: 85,
		name : 'Villa El Djézaïr' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/3',
		vignette: 'img/vignettes/villa-eldjezair.jpg',
		lat : 43.571217,
		lng : 7.101017
    },
    {
		id: 86,
		name : 'Château de l’Aube' ,
		sousTitre: 'Golfe-Juan',
		url: '/app/contemporain/3',
		vignette: 'img/vignettes/chateau-aube.jpg',
		lat : 43.5637025,
		lng : 7.0659878
    },
    {
		id: 87,
		name : 'Villa La Mosquée de l’Ilette' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/3',
		vignette: 'img/vignettes/mosquee-illette.jpg',
		lat : 43.544555,
		lng : 7.120281
    },
    {
		id: 88,
		name : 'Château Robert' ,
		sousTitre: 'Golfe-Juan',
		url: '/app/contemporain/4',
		vignette: 'img/vignettes/chateau-robert.jpg',
		lat : 43.561403,
		lng : 7.0653775
    },
    {
		id: 89,
		name : 'Château de la Croë' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/5',
		vignette: 'img/vignettes/chateau-croe.jpg',
		lat : 43.546126,
		lng : 7.134103
    },
    {
		id: 90,
		name : 'Hôtel Belles Rives' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/5',
		vignette: 'img/vignettes/hotel-belles-rives.jpg',
		lat : 43.564760,
		lng : 7.115493
    },
    {
		id: 91,
		name : 'Villa Sous le Vent' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/6',
		vignette: 'img/vignettes/villa-souslevent.jpg',
		lat : 43.547341,
		lng : 7.125502
    },
    {
		id: 92,
		name : 'Villa Aujourd’hui' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/7',
		vignette: 'img/vignettes/villa-aujourdhui.jpg',
		lat : 43.551151,
		lng : 7.119817
    },
    {
		id: 93,
		name : 'Marina Baie des Anges' ,
		sousTitre: 'Villeneuve-Loubet',
		url: '/app/contemporain/8',
		vignette: 'img/vignettes/marina.jpg',
		lat : 43.636388,
		lng : 7.135550
    },
    {
		id: 94,
		name : 'Centre de Vie Garbejaïre' ,
		sousTitre: 'Valbonne',
		url: '/app/contemporain/8',
		vignette: 'img/vignettes/garbejaire.jpg',
		lat : 43.622429,
		lng : 7.046265
    },
    {
		id: 95,
		name : 'Villa The Palm' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/8',
		vignette: 'img/vignettes/villa-thepalm.jpg',
		lat : 43.569938,
		lng : 7.132982
    },
    {
		id: 96,
		name : 'Jardin botanique de la Villa Thuret' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/10',
		vignette: 'img/vignettes/jardin-thuret.jpg',
		lat : 43.564165,
		lng : 7.124755
    },
    {
		id: 97,
		name : 'Parc Exflora' ,
		sousTitre: 'Antibes',
		url: '/app/contemporain/10',
		vignette: 'img/vignettes/parc-exflora.jpg',
		lat : 43.5661659,
		lng : 7.0742861
    },
    {
		id: 98,
		name : 'Viaduc du Loup' ,
		sousTitre: 'Tourrettes-sur-Loup',
		url: '/app/contemporain/13',
		vignette: 'img/vignettes/viaduc-tourrettes.jpg',
		lat : 43.720438,
		lng : 6.992183
    }
	
  ];

  return locationsObj;

}]);