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
  console.log('home controller running');
  var self = this;
  self.message = "Home";

  this.test = function() {
    console.log('clicky');
  }

});

app.controller('CrystalsController', function() {
  console.log('Crystals controller running');
  var self = this;
  self.message = "Crystals";

});

app.controller('EngineerController', function() {
  console.log('Engineer controller running');
  var self = this;
  self.message = "Engineer";

});

app.controller('DreamingController', function() {
  console.log('Dreaming controller running');
  var self = this;
  self.message = "Dreaming";

});
