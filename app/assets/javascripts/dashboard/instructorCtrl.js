angular.module('edu')
.controller('instructorCtrl', [
'$scope', 'instructorFactory',
	function($scope, instructorFactory, curriculum){
		$scope.instructors = instructors;
		console.log($scope.instructors);
		
}]);