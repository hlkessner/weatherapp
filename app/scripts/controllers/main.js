'use strict';

/**
 * @ngdoc function
 * @name yourApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yourApp
 */
angular.module('weatherapp')
  .controller('MainCtrl', function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
  
