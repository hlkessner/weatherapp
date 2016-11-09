"use strict";angular.module("weatherappApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("weatherappApp").controller("MainCtrl",["$scope","current",function(a,b){a.current=b.query(),a.refreshCurrent=function(){a.current=b.query({location:a.location})}}]),angular.module("weatherappApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("weatherappApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=imperial&APPID=7f8a8132d6e9c4269de7689197e96096",{},{query:{method:"GET",params:{location:"Seattle,us"},isArray:!1}})}]),angular.module("weatherappApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p> <p>This view is about the app. </p> <p>This app tells you about the weather. </p>"),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Weather for {{current.name}}</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()">Get Current Weather</button> </p> <dl> <dt>Currently</dt> <dd>{{current.weather[0].main}}</dd> <dd>{{current.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{current.main.temp}}</dd> <dt>Wind</dt> <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd> <dt>Clouds</dt> <dd>{{current.clouds.all}}%</dd> </dl> </div> </p> </div>')}]);