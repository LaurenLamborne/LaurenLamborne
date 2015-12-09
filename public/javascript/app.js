(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/Home.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
