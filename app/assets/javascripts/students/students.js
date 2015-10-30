angular.module('edu')

.factory('students', ['$http',
	function($http){
		var student = {
			students: [],
			curriculums: []

		};

		student.getAll = function() {
			return $http.get('/students.json').success(function(data){
				angular.copy(data, student.students);
			});
		};


		student.create = function(new_student) {
			return $http.post('/students.json', new_student).success(function(data){
				console.log(data);
				student.students.push(data);
			});
		};

		student.get = function(id) {
			return $http.get('/students/' + id + '.json').then(function(data){
				angular.copy(data, student.students);
			});
		};

		return student;
	}
]);