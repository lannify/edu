angular.module('edu')

.factory('lessons', ['$http',
	function($http){
		var lessons = {
			lessons: []
		};

		lessons.getAll = function() {

			return $http.get('/lessons.json').success(function(data){
				angular.copy(data, lessons.lessons);
			});
		};

		lessons.create = function(lesson) {
		
			return $http.post('/lessons.json', lesson).success(function(data){
				console.log(data);
				lessons.lessons.push(data);
			});
		};

		lessons.get = function(id) {
		
			return $http.get('/lessons/' + id + '.json').success(function(data){
					console.log(data);
				angular.copy(data, lessons.lessons);
			});
		};

		return lessons;
	}
	]);