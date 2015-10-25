angular.module('edu')
.controller('curriculumsCtrl', [
'$scope', 'curriculums',
	function($scope, curriculums){
		console.log("step 1");
		$scope.curriculums = curriculums.curriculums;
		$scope.addCurriculum = function(){			
			 console.log("Adding curriculum");
			 curriculums.create({
			    name: $scope.name,		  
		});			
	};
		
}]);