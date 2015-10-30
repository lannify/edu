angular.module('edu')
.controller('curriculumsCtrl', [
'$scope', 'curriculums', 'supplies', '$stateParams', '$location', 
	function($scope, curriculums, supplies, $stateParams, $location){

		$scope.curriculums = curriculums.curriculums;		
		$scope.supplies = supplies.supplies;
		$scope.instructor_id = $stateParams.instructor_id;

		$scope.addCurriculum = function(){			
			 if(!$scope.name || $scope.name === '') { return; }
			 curriculums.create({
			    name: $scope.name,	
			    grade_level: $scope.grade_level,
			    instructor_id: $scope.instructor_id
			});
			$location.path("/instructor_dash");		
		    $scope.name = '';
		    $scope.grade_level = '';
		};	
	}
]);