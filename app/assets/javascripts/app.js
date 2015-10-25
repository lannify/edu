angular.module('edu', ['ui.router', 'templates', 'Devise', 'permission'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html'
		
		})
		.state('curriculums', {
			url: '/curriculums',
			templateUrl: 'curriculums/_curriculums.html',
			controller: 'curriculumsCtrl',
			resolve: {
				postPromise: ['curriculums', function(curriculums){
					return curriculums.getAll();
				}]
			}			
		})
		// .state('curriculum', {
		// 	url: '/curriculum',
		// 	templateUrl: 'curriculums/_curriculum.html'			
		// })
		.state('curriculum', {
			url: '/curriculums/{id}',
			templateUrl: 'curriculums/_curriculums.html',
			controller: 'curriculumsCtrl',
			resolve: {
				post: ['$stateParams', 'curriculums', function($stateParams, curriculums) {
					return curriculums.get($stateParams.id);
				}]
			}
		})

		.state('add_curriculum', {
			url: '/add_curriculum',
			templateUrl: 'curriculums/_addCurriculum.html',
			controller: 'curriculumsCtrl'
			// data: {
		 //        permissions: {
		 //            except: ['anonymous', 'student'],
		 //            redirectTo: 'login'
			// 	    }
		 //    }
		})
		.state('lesson', {
			url: '/lesson',
			templateUrl: 'lessons/_lesson.html'			
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
		})
		.state('supplies', {
			url: '/supplies',
			templateUrl: 'supplies/_supplies.html',
			controller: 'suppliesCtrl'
		});
		
		$urlRouterProvider.otherwise('home');
	}]);
