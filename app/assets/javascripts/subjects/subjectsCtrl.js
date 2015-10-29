angular.module('edu')
.controller('subjectsCtrl', [
'$scope', 'subjects', '$stateParams', '$location',
	function($scope, subjects, $stateParams, $location){
		console.log($stateParams.curriculum_id);
		$scope.curriculum_id = $stateParams.curriculum_id;
		$scope.subjects = subjects.subjects;
		$scope.addSubject = function(){		


			if(!$scope.title || $scope.title === '') { return; }
			 subjects.create({
			 	curriculum_id: $scope.curriculum_id,
			    title: $scope.title,	
			    description: $scope.description	  
			});		
			 $location.path("/curriculums/" + $stateParams.curriculum_id);
		    $scope.title = '';
		    $scope.description = '';
		};
		
}]);