angular.module('edu')
.controller('subjectsCtrl', [
'$scope', 'subjects', 
	function($scope, subjects){
		$scope.subjects = subjects.subjects;
		$scope.addSubject = function(){			
			 if(!$scope.title || $scope.title === '') { return; }
			 subjects.create({
			    title: $scope.title,	
			    description: $scope.description	  
			});		
		    $scope.title = '';
		    $scope.description = '';
		};
		
}]);