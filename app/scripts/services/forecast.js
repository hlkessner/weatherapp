'use strict';

/**
 * @ngdoc service
 * @name weatherapp.forecast
 * @description
 * # forecast
 * Factory in the weatherapp.
 */
 angular.module('weatherapp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=7f8a8132d6e9c4269de7689197e96096', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '2172797'
        },
        isArray:false
      }
    });
  });
