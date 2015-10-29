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


		student.create = function(student) {
		
			return $http.post('/students.json', student).success(function(data){
				console.log(data);
				student.students.push(data);
			});
		};

		return student;
	}
	]);