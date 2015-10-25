angular.module('edu')
.controller('curriculumsCtrl', [
	'$scope', 'curriculum', 'curriculums'
	function($scope, curriculum, curriculums){
		$scope.curriculum = curriculum;

	}]);