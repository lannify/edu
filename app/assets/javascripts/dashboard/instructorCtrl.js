angular.module('edu')
.controller('instructorCtrl', [
'$scope', 'instructorFactory', 'Auth',
	function($scope, instructorFactory, Auth){
		$scope.instructors = instructorFactory.instructors;
		$scope.instructor_id = Auth._currentUser.id;
		console.log($scope);
		// console.log($scope.instructor_id);
		console.log(Auth._currentUser);

		$scope.addInstructor = function(){			
			 if(!$scope.name || $scope.name === '') { return; }
			 instructors.create({
			    name: $scope.name,	
			    grade_level: $scope.grade_level	  
			});		
		    $scope.name = '';
		    $scope.grade_level = '';
		};
		
}]);