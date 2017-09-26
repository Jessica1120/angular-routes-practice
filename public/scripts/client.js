var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as HC'
    }).when('/lecter', {
        templateUrl:    'views/lecter.html',
        controller: 'LecterController as LC' //add 2 more character Controllers
    }).otherwise({redirectTo: '/'});
});