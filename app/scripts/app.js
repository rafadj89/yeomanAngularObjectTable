'use strict';

/**
 * @ngdoc overview
 * @name optimusApp
 * @description
 * # optimusApp
 *
 * Main module of the application.
 */
angular
  .module('optimusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'objectTable',
    'ngDialog',
    'optimusApp.service',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html'
      })
      .when('/popup', {
        templateUrl: 'views/popupTmpl.html',
        controller: 'AboutCtrl'
      })
      .when('/viewdetail-about', {
        templateUrl: 'views/viewdetail-about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
