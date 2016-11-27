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
     var icons = new Skycons({"color": "#fff"}),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;

      for(i = list.length; i--; )
      {  icons.set(list[i], list[i]);

      icons.play();
    }
   });
