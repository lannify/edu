angular.module('edu')
.controller('MainCtrl', [
'$scope', 'curriculums',
	function($scope, curriculums){
		
		$scope.curriculums = curriculums.curriculums;
		$scope.addCurriculum = function(){
			if(!$scope.title || $scope.title === '') { return; }
			 curriculums.create({
			    title: $scope.name,
			    title: $scope.grade_level,
			    title: $scope.price			    
			  });
			$scope.title = '';
			$scope.link = '';
		};
		
}]);