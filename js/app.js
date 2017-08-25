var app=angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('/',{
			url:'/',
			templateUrl:'index.html',
			controller:'indexController'
		})
		.state('home',{
			url:'/home',
			templateUrl:'home.html'
		})
});
