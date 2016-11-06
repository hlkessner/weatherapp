'use strict';
/**
 * @ngdoc service
 * @name weatherapp.current
 * @description
 * # current
 * Factory in the weatherapp.
 */
angular.module('weatherappApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=imperial&APPID=7f8a8132d6e9c4269de7689197e96096', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
