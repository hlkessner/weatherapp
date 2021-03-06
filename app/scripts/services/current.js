'use strict';
/**
 * @ngdoc service
 * @name weatherapp.current
 * @description
 * # current
 * Factory in the weatherapp.
 */
 angular.module('weatherapp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=7f8a8132d6e9c4269de7689197e96096', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
