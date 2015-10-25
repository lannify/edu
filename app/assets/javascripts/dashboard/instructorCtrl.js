angular.module('edu')
.controller('instructorCtrl', [
	'$scope',
	'Auth',
	function($scope, Auth){
		console.log($scope.user);
		console.log("hi");
}]);