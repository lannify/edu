angular.module('edu')

.factory('instructorFactory', ['$http',
	function($http){
		var instructors = {};

		instructors.getAll = function() {
			return $http.get('/users.json').success(function(data){
				angular.copy(data, instructors);
			});
		};

		return instructors;
	}
]);