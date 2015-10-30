angular.module('edu')
.controller('dashboardCtrl', [
'$scope', '$stateParams', 'dashboardFactory', 'curriculums', 'students', 'Auth',
	function($scope, $stateParams, dashboardFactory, curriculums, students, Auth){
		// For instructor dashboard
		$scope.instructors = dashboardFactory.instructors;
		$scope.curriculums = curriculums.curriculums;
		console.log($scope.curriculums);
		$scope.instructor = Auth._currentUser;
		console.log($scope.instructor);

		// Generate random numbers...
		$scope.getRandomSpan = function(){
			return Math.floor((Math.random()*10));
		}
		$scope.student = students.students;
		console.log($scope.student);

	}
]);