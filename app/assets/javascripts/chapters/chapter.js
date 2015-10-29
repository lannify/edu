angular.module('edu')

.factory('chapters', ['$http',
	function($http){
		var chapter = {
			chapters: []
		};

		chapter.getAll = function() {

			return $http.get('/chapters.json').success(function(data){
				angular.copy(data, chapter.chapters);
			});
		};

		chapter.create = function(chapter) {
		
			return $http.post('/chapters.json', chapter).success(function(data){
				console.log(data);
				chapter.chapters.push(data);
			});
		};

		return chapter;
	}
	]);