(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
	function HomeController($scope, $http, HomeFactory, $mdToast) {
		var vm = this;
		vm.contact = {};
		vm.sent = false;


		vm.sendMail = function(){
			HomeFactory.sendMail(vm.contact).then(function(res) {
				vm.contact = null;
				vm.sent = true;
			});
		};

	}
})();
