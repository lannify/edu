angular.module('edu', ['ui.router', 'templates', 'Devise'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
		
		})
		.state('curriculums', {
			url: '/curriculums',
			templateUrl: 'curriculums/_curriculums.html',
			
		})
		.state('add_curriculums', {
			url: '/add_curriculum',
			templateUrl: 'curriculums/_add_curriculum.html',
			
		})
		.state('instructor_dash', {
			url: '/instructor_dash',
			templateUrl: 'dashboard/instructor_dash.html',
			
		})
		.state('student_dash', {
			url: '/student_dash',
			templateUrl: 'dashboard/student_dash.html',
			
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
