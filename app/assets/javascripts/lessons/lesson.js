angular.module('edu')

.factory('lessons', ['$http',
	function($http){
		var lesson = {
			lessons: []
		};

		lesson.getAll = function() {

			return $http.get('/lessons.json').success(function(data){
				angular.copy(data, lesson.lessons);
			});
		};

		lesson.create = function(lesson) {
		
			return $http.post('/lessons.json', lesson).success(function(data){
				console.log(data);
				lesson.lessons.push(data);
			});
		};

		return lesson;
	}
	]);