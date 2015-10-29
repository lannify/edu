angular.module('edu')
.controller('chaptersCtrl', [
'$scope', 'chapters', '$stateParams', '$location',
	function($scope, chapters, $stateParams, $location){
		$scope.curriculum_id = $stateParams.curriculum_id;
		$scope.subject_id = $stateParams.subject_id;
		$scope.course_id = $stateParams.course_id;
		$scope.chapters = chapters.chapters;
		$scope.addChapter = function(){		

			if(!$scope.title || $scope.title === '') { return; }
			 chapters.create({
			 	course_id: $scope.course_id,
			    title: $scope.title,
			    description: $scope.description
			});		
			 $location.path("/curriculums/" + $scope.curriculum_id);
		    $scope.title = '';
		    $scope.description = '';
		};
		
}]);