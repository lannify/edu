angular.module('edu', ['ui.router', 'templates', 'Devise'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'MainCtrl',
			resolve: {
				curriculumPromise: ['curriculums', function(posts){
					return posts.getAll();
				}]
			}
		})
		.state('curriculums', {
			url: '/curriculums/{id}',
			templateUrl: 'curriculums/_curriculums.html',
			controller: 'curriculumsCtrl',
			resolve: {
				curriculum: ['$stateParams', 'curriculums', function($stateParams, curriculums) {
					return curriculums.get($stateParams.id);
				}]
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: 'auth/_login.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'Auth', function($state, Auth) {
				Auth.currentUser().then(function (){
					$state.go('home');
				})
			}]
		})
		.state('register', {
			url: '/register',
			templateUrl: 'auth/_register.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'Auth', function($state, Auth) {
				Auth.currentUser().then(function (){
					$state.go('home');
				})
			}]
		});
		

		$urlRouterProvider.otherwise('home');
	}]);
