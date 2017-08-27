var app=angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('root',{
			url:'/',
			templateUrl:'html/main.html'
		})
		.state('about',{
			url:'/about',
			templateUrl:'html/about.html',
			controller:'aboutController'
		});

	//send to home is route is not found
	$urlRouterProvider.otherwise('/');

	//enable html5 mode url rewriting
	/*$locationProvider.html5Mode({
		enabled:true,
		requireBase:true
	})*/
});


app.run(($rootScope)=>{
	$rootScope.appname='AppName';
	$rootScope.navlinks=[
		{
			text:'Home',
			href:'root'
		},
		{
			text:'About',
			href:'about'
		}
	];
});

app.controller('aboutController',($scope)=>{
	$scope.text='Some text from controller';
});