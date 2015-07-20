var app = angular.module('Patrimoine', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/intro.html',
            controller: 'introController'
        })
        .when('/paysages', {
            templateUrl: 'partials/paysages.html',
            controller: 'paysagesController'
        })
        .when('/sitehistoriques', {
            templateUrl: 'partials/siteshistoriques.html',
            controller: 'siteshistoriquesController'
        })
        .otherwise({ redirectTo: '/' });

});