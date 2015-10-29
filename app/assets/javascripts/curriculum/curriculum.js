angular.module('edu')

.factory('curriculum', ['$http',
	function($http){

		var o = {
			curriculum: [],
			supplies: []
		};

		o.getSupplies = function() {
			return $http.get('/supplies.json').success(function(data){
				angular.copy(data, o.supplies);
			});
		};

		o.create = function(curriculum) {
			return $http.post('/curriculums.json', curriculum).success(function(data){
				o.curriculum.push(data);
			});
		};

		o.get = function(id) {
			return $http.get('/curriculums/' + id + '.json').success(function(data){
				angular.copy(data, o.curriculum);
			});
		};

		o.addSubject = function(id, subject) {
			return $http.post('/curriculums/' + id + '/subjects.json', subject);
		};

		return o;
	}
]);