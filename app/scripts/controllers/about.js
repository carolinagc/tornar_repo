'use strict';

/**
 * @ngdoc function
 * @name tornarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tornarApp
 */
angular.module('tornarApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
