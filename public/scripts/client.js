var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/crystals' ,{
      templateUrl: '/views/templates/crystals.html',
      controller: 'CrystalsController',
      controllerAs: 'crystals',
    })
    .when('/engineer' ,{
      templateUrl: '/views/templates/engineer.html',
      controller: 'EngineerController',
      controllerAs: 'engineer'
    })
    .when('/dreaming' ,{
      templateUrl: '/views/templates/dreaming.html',
      controller: 'DreamingController',
      controllerAs: 'dreaming'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('Home controller running');
  var self = this;
  self.message = "Home";

  this.goToCrystals = function() {
    location.href = "#crystals";
  }

  this.goToEngineer = function() {
    location.href = "#engineer";
  }

  this.goToDreaming = function() {
    location.href = "#dreaming";
  }

});

app.controller('CrystalsController', function() {
  console.log('Crystals controller running');
  var self = this;
  self.message = "Crystals";

  this.goHome = function() {
    location.href = "#home";
  }

});

app.controller('EngineerController', function() {
  console.log('Engineer controller running');
  var self = this;
  self.message = "Engineer";

  this.goHome = function() {
    location.href = "#home";
  }

});

app.controller('DreamingController', function() {
  console.log('Dreaming controller running');
  var self = this;
  self.message = "Dreaming";

  this.goHome = function() {
    location.href = "#home";
  }

});
