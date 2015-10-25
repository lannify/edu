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
			var item_name = [];
			return $http.get(target_url).success(function(res){
				console.log(res);
				item_name.push(res.product_composite_response.items[0].general_description);
				console.log(item_name);
				o.supplies.push(item_name);
				// angular.copy(res, o.supplies);
			});
		};

		return o;
	}
	]);