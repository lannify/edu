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
				subject.subjects.push(data);
			});
		};

		subject.get = function(id) {
			return $http.get('/subjects/' + id + '.json').then(function(res){
				return res.data;
			});
		};

		subject.addSubject = function(id, subject) {
			return $http.post('/subjects/' + id + '/subjects.json', subject);
		};

		return subject;
	}
	]);