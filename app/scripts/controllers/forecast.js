'use strict';

/**
 * @ngdoc function
 * @name weatherapp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherapp
 */
 angular.module('weatherapp')
   .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
     $scope.cityID = $routeParams.cityID;

     $scope.forecastData = forecast.query({
         cityID: $routeParams.cityID
     });
   });
