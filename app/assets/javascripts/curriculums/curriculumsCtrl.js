angular.module('edu')
.controller('curriculumsCtrl', [
'$scope', 'curriculums', 'supplies', '$location',
	function($scope, curriculums, supplies, $location){

		$scope.curriculums = curriculums.curriculums;		
		console.log(curriculums);
		$scope.supplies = supplies.supplies;
		$scope.addCurriculum = function(){			
			 if(!$scope.name || $scope.name === '') { return; }
			 curriculums.create({
			    name: $scope.name,	
			    grade_level: $scope.grade_level	  
			});
			$location.path("/curriculums");		
		    $scope.name = '';
		    $scope.grade_level = '';
		};
		
	}

	
]);