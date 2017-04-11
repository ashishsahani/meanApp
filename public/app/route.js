angular.module('appRoutes',['ngRoute'])
	   .config(function($routeProvider,$locationProvider){
	   	 $locationProvider.hashPrefix('');
	   	$routeProvider
	   	.when('/',{
	   		templateUrl:'app/views/templates/home.html'
	   	})
	   	.when('/about',{
	   		templateUrl:'app/views/templates/about.html'
	   	})
	   	.when('/register',{
	   		templateUrl:'app/views/templates/register.html'
	   	})
	   	.otherwise({redirectTo :"/"})
})