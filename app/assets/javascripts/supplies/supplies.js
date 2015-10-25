angular.module('edu')

.factory('supplies', ['$http',
	function($http){

		var o = {
			supplies: []
		};

		o.itemLookup = function(item_id) {
			console.log(item_id);
			var target_url = "https://api.target.com/items/v3/" + item_id.item_id + "?id_type=dpci&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb";
			console.log(target_url);
			return $http.get(target_url).success(function(res){
				console.log(res);
				// angular.copy(res, o.supplies);
			});
		};

		return o;
	}
	]);