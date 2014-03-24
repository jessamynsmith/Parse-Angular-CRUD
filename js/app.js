//Parse.com Authentication Keys
Parse.initialize("wl50mn1xvCAwo1jmugvWxA8oRcpvotmQRY1kdcmD", "KbjSKxmV8ZEA0cwNAcXZFQxPHl7aXWQL2zjsxvJT");

// Declare app level module which depends on filters, and services
angular.module('assets', [
  'ngRoute',,
  'assets.filters',
  'assets.services',
  'assets.directives',
  'assets.controllers',
  'parse-angular',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home',     {templateUrl: 'views/home.html', 
                      controller: 'homeCtrl'});

  $routeProvider.when('/wp-themes', 		{templateUrl: 'views/wp-themes.html', 
  									  controller: 'wp-themesCtrl'});

  $routeProvider.when('/wp-plugins', 	{templateUrl: 'views/wp-plugins.html', 
  									  controller: ''});

  $routeProvider.when('/tutorials',  {templateUrl: 'views/tutorials.html', 
                      controller: 'tutorialsCtrl'});

  $routeProvider.when('/inspire',  {templateUrl: 'views/insperation.html', 
                      controller: 'insperationCtrl'});

  $routeProvider.otherwise({redirectTo: '/home'});


}]);