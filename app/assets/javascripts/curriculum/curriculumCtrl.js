angular.module('edu')
.controller('curriculumCtrl', [
'$scope', 'curriculum', 'supplies', 'subjects', 
	function($scope, curriculum, supplies, subjects){

		$scope.curriculum = curriculum.curriculum;
		console.log(curriculum);
		$scope.supplies = supplies.supplies;
		$scope.addCurriculum = function(){			
			 if(!$scope.name || $scope.name === '') { return; }
			 curriculum.create({
			    name: $scope.name,	
			    grade_level: $scope.grade_level	  
			});		
		    $scope.name = '';
		    $scope.grade_level = '';
		};

		$scope.deleteSubject = function(curr_id, sub_id){		
			console.log(sub_id)
			subjects.delete({id: sub_id});		
			
			$location.path("/curriculums/" + curr_id);
		    $scope.title = '';
		    $scope.description = '';
		};
		
}]);