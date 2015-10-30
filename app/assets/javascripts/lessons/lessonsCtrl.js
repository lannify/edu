angular.module('edu')
.controller('lessonsCtrl', [
'$scope', 'lessons', '$stateParams', '$location',
	function($scope, lessons, $stateParams, $location){
		$scope.curriculum_id = $stateParams.curriculum_id;
		$scope.subject_id = $stateParams.subject_id;
		$scope.course_id = $stateParams.course_id;
		$scope.chapter_id = $stateParams.chapter_id;
	
		$scope.lessons = lessons.lessons;
		console.log($scope.lessons);

		$scope.addLesson = function(){		
			if(!$scope.title || $scope.title === '') { return; }
			 lessons.create({
			 	chapter_id: $scope.chapter_id,
			    title: $scope.title,
			    description: $scope.description
			});		
			 $location.path("/curriculums/" + $stateParams.curriculum_id);
		    $scope.title = '';
		    $scope.description = '';

		};
		
}]);