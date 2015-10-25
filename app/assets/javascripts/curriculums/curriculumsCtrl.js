angular.module('edu')
.controller('curriculumsCtrl', [
'$scope', 'curriculums', 'supplies',
	function($scope, curriculums){
		$scope.curriculums = curriculums.curriculums;
		$scope.addCurriculum = function(){			
			 if(!$scope.name || $scope.name === '') { return; }
			 curriculums.create({
			    name: $scope.name,	
			    grade_level: $scope.grade_level	  
			});		
		    $scope.name = '';
		    $scope.grade_level = '';
		};
		
}]);