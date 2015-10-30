angular.module('edu')
.controller('studentsCtrl', [
'$scope', 'students', 'curriculums', '$stateParams', '$location',
	function($scope, students, curriculums, $stateParams, $location){
		$scope.instructor_id = $stateParams.instructor_id;
		$scope.curriculums = curriculums.curriculums;
		console.log(curriculums.curriculums);
		$scope.students = students.students;
		$scope.addStudent = function(){		

			if(!$scope.name || $scope.name === '') { return; }
			 students.create({
			 	instructor_id: $scope.instructor_id,
		    name: $scope.name,
		    email: $scope.email,
		    password: $scope.password,
		    user_level: 3,
		    curriculum_id: $scope.curriculum_1
			});		
			 $location.path("/instructor_dash");
		    $scope.name = '';
		    $scope.email = '';
		    $scope.password = '';

		};
		
}]);