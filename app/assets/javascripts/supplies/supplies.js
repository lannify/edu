angular.module('edu')

.factory('supplies', ['$http',
	function($http){

		// var o = {
		// 	supplies: []
		// };

		var o = {
			item_name: "",
			item_price: 0,
			item_image: "",
			item_url: ""
		};

		o.itemLookup = function(item_id) {
			
			var target_url = "https://api.target.com/items/v3/" + item_id.item_id + "?id_type=dpci&store_id=530&fields=all_fields_group&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb";
			
			// var item_name = [];
			// var item_price = [];
			// var item_image = [];
			// var item_url = [];

			var success = $http.get(target_url).success(function(res){

				var p = {
					item_name: "",
					item_price: 0,
					item_image: "",
					item_url: ""
				};
				console.log(res);
				p.item_name =res.product_composite_response.items[0].general_description;
			
				// item_name.push(res.product_composite_response.items[0].general_description);
				p.item_price = res.product_composite_response.items[0].store_product[0].price.display_original_price;

				// item_price.push(res.product_composite_response.items[0].store_product[0].price.display_original_price);
				p.item_image = res.product_composite_response.items[0].image.internal_primary_image_url[0];

				// item_image.push(res.product_composite_response.items[0].image.internal_primary_image_url);
				p.item_url = res.product_composite_response.items[0].data_page_link;

				// item_url.push(res.product_composite_response.items[0].data_page_link);
				console.log(p);
				// o.supplies.push(item_name, item_price, item_image, item_url);
				// angular.copy(res, o.supplies);

				//rails controller
				$http.post('/supplies.json', p);
			});

			return success;
		};

		return o;
	}
	]);