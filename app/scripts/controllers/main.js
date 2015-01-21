'use strict';

/**
 * @ngdoc function
 * @name tornarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tornarApp
 */
angular.module('tornarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
