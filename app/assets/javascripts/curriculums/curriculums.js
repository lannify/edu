angular.module('edu')

.factory('curriculum', ['$http',
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
			return $http.curriculum('/curriculums.json', curriculum).success(function(data){
				o.curriculums.push(data);
			});
		};

		o.get = function(id) {
			return $http.get('/curriculums/' + id + '.json').then(function(res){
				return res.data;
			});
		};

		o.addComment = function(id, comment) {
			return $http.curriculum('/curriculums/' + id + '/comments.json', comment);
		};

		return o;
	}
	]);