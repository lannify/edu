angular.module('edu')

.factory('courses', ['$http',
	function($http){
		var course = {
			courses: []
		};

		course.getAll = function() {

			return $http.get('/courses.json').success(function(data){
				angular.copy(data, course.courses);
			});
		};

		course.create = function(course) {
		
			return $http.post('/courses.json', course).success(function(data){
				console.log(data);
				course.courses.push(data);
			});
		};

		return course;
	}
	]);