angular.module('edu')

.factory('curriculums', ['$http',
	function($http){

		var o = {
			curriculums: [],
			supplies: []
		};

		o.getAll = function() {
			return $http.get('/curriculums.json').success(function(data){
				angular.copy(data, o.curriculums);
			});
		};

		o.getSupplies = function() {
			return $http.get('/supplies.json').success(function(data){
				angular.copy(data, o.supplies);
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