'use strict';

/**
 * @ngdoc overview
 * @name tornarApp
 * @description
 * # tornarApp
 *
 * Main module of the application.
 */
var app = angular
  .module('tornarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/filerepo/dmx/tornar/app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/filerepo/dmx/tornar/app/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/map', {
        templateUrl: '/filerepo/dmx/tornar/app/views/map.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
