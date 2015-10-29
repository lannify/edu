angular.module('edu')

.factory('subjects', ['$http',
	function($http){


		var subject = {

			subjects: []
		};



		subject.getAll = function() {

			return $http.get('/subjects.json').success(function(data){
				angular.copy(data, subject.subjects);
			});
		};

		subject.create = function(subject) {
		
			return $http.post('/subjects.json', subject).success(function(data){
				console.log(data);
				subject.subjects.push(data);
			});
		};

		subject.get = function(id) {
			return $http.get('/curriculums/' + id + '.json').success(function(data){
				console.log(id);
				angular.copy(data, o.curriculum);
			});
		};

		subject.addCourse = function(id, subject) {
			return $http.post('/subjects/' + id + '/subjects.json', subject);
		};

		return subject;
	}
	]);