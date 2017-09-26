var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as HC'
    }).when('/lecter', {
        templateUrl:    'views/lecter.html',
        controller: 'LecterController as LC' 
    }).when('/jack', {
        templateUrl:    'views/jack.html',
        controller: 'JackController as JC'
    }).otherwise({redirectTo: '/'});
});