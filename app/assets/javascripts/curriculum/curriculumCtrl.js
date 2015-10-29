angular.module('edu')
.controller('curriculumCtrl', [
'$scope', 'curriculum', 'supplies', 
	function($scope, curriculum, supplies){

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
		
}]);