angular.module('edu')

.factory('dashboardFactory', ['$http',
	function($http){

		var dashboard = {
			instructors: [],
			curriculums: []
		};

		dashboard.getAll = function() {
			return $http.get('/users.json').success(function(data){
				angular.copy(data, dashboard.instructors);
			});
		};

		return dashboard;
	}
]);