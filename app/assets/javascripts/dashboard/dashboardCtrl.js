angular.module('edu')
.controller('dashboardCtrl', [
'$scope', 'dashboardFactory', 'Auth',
	function($scope, dashboardFactory, Auth){
		$scope.instructors = dashboardFactory.instructors;
		$scope.instructor = Auth._currentUser;
		console.log($scope.instructor);

		$scope.addInstructor = function(){			
			 if(!$scope.name || $scope.name === '') { return; }
			 instructors.create({
			    name: $scope.name,	
			    grade_level: $scope.grade_level	  
			});		
		    $scope.name = '';
		    $scope.grade_level = '';
		};	
	}
]);