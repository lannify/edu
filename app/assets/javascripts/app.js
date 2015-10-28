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
		.state('curriculum', {
			url: '/curriculum',
			templateUrl: 'curriculums/_curriculum.html',
			controller: 'curriculumsCtrl',
			resolve: {
				postPromise: ['supplies', function(supplies){
					return supplies.getAll();
				}]
			}		
		})
		.state('curriculum_page', {
			url: '/curriculums/{id}',
			templateUrl: 'curriculums/_curriculum.html',
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

		.state('add_subject', {
			url: '/add_subject',
			templateUrl: 'subjects/_addSubject.html',
			controller: 'subjectsCtrl'

		})
		.state('add_course', {
			url: '/add_course',
			templateUrl: 'courses/_addCourse.html',
			controller: 'coursesCtrl'

		})
		.state('add_chapter', {
			url: '/add_chapter',
			templateUrl: 'chapters/_addChapter.html',
			controller: 'chapterCtrl'

		})
		.state('add_lesson', {
			url: '/add_lesson',
			templateUrl: 'lessons/_addLesson.html',
			controller: 'lessonsCtrl'

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
	}],
	['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;

        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }

]);
