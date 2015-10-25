angular.module('edu')

.factory('curriculums', ['$http',
	function($http){

		var o = {
			curriculums: []
		};

		o.getAll = function() {
			return $http.get('/curriculums.json').success(function(data){
				angular.copy(data, o.curriculums);
			});
		};

		o.create = function(curriculum) {
			return $http.post('/curriculums.json', curriculum).success(function(data){
				o.curriculums.push(data);
			});
		};

		o.get = function(id) {
			return $http.get('/curriculums/' + id + '.json').then(function(res){
				return res.data;
			});
		};

		o.addSubject = function(id, subject) {
			return $http.post('/curriculums/' + id + '/subjects.json', subject);
		};

		return o;
	}
	]);