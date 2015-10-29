angular.module('edu')
.controller('coursesCtrl', [
'$scope', 'courses', '$stateParams', '$location',
	function($scope, courses, $stateParams, $location){
		$scope.curriculum_id = $stateParams.curriculum_id;
		$scope.subject_id = $stateParams.subject_id;
		$scope.courses = courses.courses;
		$scope.addCourse = function(){		

			if(!$scope.title || $scope.title === '') { return; }
			 courses.create({
			 	subject_id: $scope.subject_id,
			    title: $scope.title,
			    description: $scope.description
			});		
			 $location.path("/curriculums/" + $scope.curriculum_id);
		    $scope.title = '';
		    $scope.description = '';
		};
		
}]);