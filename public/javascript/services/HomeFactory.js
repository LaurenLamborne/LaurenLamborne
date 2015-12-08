(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {
		var o = {};
		
		o.sendMail = function(msg){
			var q  = $q.defer();
			$http.post('/api/msg', msg).then(function(){
				q.resolve();
			});
			return q.promise;
		};

		return o;
	}
})();
