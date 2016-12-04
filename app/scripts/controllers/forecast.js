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
     $scope.mapskycon = function(text) {
       if (text === "Rain") {
         return "rain";
       } else if(text === "Snow") {
         return "snow";
      } else if(text === "Sleet") {
        return "sleet";
      } else if(text === "Wind") {
        return "wind";
      } else if(text === "Clear"){
        return "clear-day";
      } else if(text === "Fog") {
        return "fog";
      } else if(text === "Cloudy") {
        return "cloudy";
      } else if(text === "Partly Cloudy") {
        return "partly-cloudy-day";
      } else {
        return "clear-day";

       //else **default icon**
     }
   };
   });
