'use strict';

/**
 * @ngdoc function
 * @name weatherapp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the weatherapp
 */
 angular.module('weatherapp')
   .controller('CurrentCtrl', function ($scope, $routeParams, current) {
     $scope.cityID = $routeParams.cityID;

     $scope.currentWeather = current.query({
         cityID: $routeParams.cityID
     });
   });
