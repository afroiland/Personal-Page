var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/dean' ,{
      templateUrl: '/views/templates/dean.html',
      controller: 'DeanController',
      controllerAs: 'dean',
    })
    .when('/jess' ,{
      templateUrl: '/views/templates/jess.html',
      controller: 'JessController',
      controllerAs: 'jess'
    })
    .when('/logan' ,{
      templateUrl: '/views/templates/logan.html',
      controller: 'LoganController',
      controllerAs: 'logan'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Navigate the gallery and reflect on Rory's romantic past.";

});

app.controller('DeanController', function() {
  console.log('dean controller running');
  var self = this;
  self.message = "Dean Forester";

});

app.controller('JessController', function() {
  console.log('jess controller running');
  var self = this;
  self.message = "Jess Mariano";

});

app.controller('LoganController', function() {
  console.log('logan controller running');
  var self = this;
  self.message = "Logan Huntzberger";

});
