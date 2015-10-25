angular.module('edu')
.controller('suppliesCtrl', [
'$scope', 'supplies',
	function($scope, supplies){
		console.log("step 1");
		$scope.supplies = supplies.supplies;
		$scope.itemLookup = function(){			
			 console.log("Adding supply");
			 supplies.itemLookup({
			    item_id: $scope.item_id		  
		});			
	};
		
}]);