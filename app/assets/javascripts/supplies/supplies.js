angular.module('edu')

.factory('supplies', ['$http',
	function($http){

		var o = {
			supplies: []
		};

		o.itemLookup = function(item_id) {
			console.log(item_id);
			var target_url = "https://api.target.com/items/v3/" + item_id.item_id + "?id_type=dpci&store_id=530&fields=all_fields_group&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb";
			console.log(target_url);
			var item_name = [];
			var item_price = [];
			var item_image = [];
			var item_url = [];
			return $http.get(target_url).success(function(res){
				console.log(res);
				item_name.push(res.product_composite_response.items[0].general_description);
				item_price.push(res.product_composite_response.items[0].store_product[0].price.display_original_price);
				item_image.push(res.product_composite_response.items[0].image.internal_primary_image_url);
				item_url.push(res.product_composite_response.items[0].data_page_link);
				console.log(item_name);
				console.log(item_price);
				o.supplies.push(item_name, item_price, item_image, item_url);
				// angular.copy(res, o.supplies);
			});
		};

		return o;
	}
	]);