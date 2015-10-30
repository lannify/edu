angular.module('edu')
.controller('studentsCtrl', [
'$scope', 'students', 'curriculums', '$stateParams', '$location',
	function($scope, students, curriculums, $stateParams, $location){
		
		$scope.instructor_id = $stateParams.instructor_id;
		console.log($stateParams.instructor_id);
		$scope.curriculums = curriculums.curriculums;
		console.log(curriculums.curriculums);

		$scope.addStudent = function(){		

			if($scope.curriculum_1){
				var curriculum_id = $scope.curriculum_1
			} else if($scope.curriculum_2){
				var curriculum_id = $scope.curriculum_2	
			} else {
				return;
			}

			if(!$scope.name || $scope.name === '') { return; }
			
			students.create({
		    name: $scope.name,
		    email: $scope.email,
		    password: $scope.password,
		    user_level: 4,
		    curriculum_id: curriculum_id
			});		
			 	
		 	$location.path("/instructor_dash");
	    $scope.name = '';
	    $scope.email = '';
	    $scope.password = '';
		};	
	}
]);