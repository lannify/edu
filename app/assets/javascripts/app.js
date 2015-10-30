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
			url: '/curriculums/{id}',
			templateUrl: 'curriculum/_curriculum.html',
			controller: 'curriculumCtrl',
			resolve: {
				post: ['$stateParams', 'curriculum', function($stateParams, curriculum) {
					
					return curriculum.get($stateParams.id);
				}]
			}
		})

		.state('add_curriculum', {
			url: '/add_curriculum/:instructor_id',
			templateUrl: 'curriculums/_addCurriculum.html',
			controller: 'curriculumsCtrl',
	
			// data: {
		 //        permissions: {
		 //            except: ['anonymous', 'student'],
		 //            redirectTo: 'login'
			// 	    }
		 //    }
		})
		
		.state('add_student', {
			url: '/add_student/:instructor_id',
			templateUrl: 'students/_addStudent.html',
			controller: 'studentsCtrl',
			resolve: {
				postPromise: ['curriculums', function(curriculums){
					return curriculums.getAll();
				}]
			}
		})

		.state('add_subject', {
			url: '/add_subject/:curriculum_id',
			templateUrl: 'subjects/_addSubject.html',
			controller: 'subjectsCtrl'
		})

		.state('destroy_subject', {
			url: '/destroy_subject/:curriculum_id/:subject_id',
			controller: 'subjectsCtrl'
		})

		.state('add_course', {
			url: '/add_course/:curriculum_id/:subject_id',
			templateUrl: 'courses/_addCourse.html',
			controller: 'coursesCtrl'

		})

		.state('destroy_course', {
			url: '/destroy_course/:curriculum_id/:course_id',
			controller: 'coursesCtrl'
		})


		.state('add_chapter', {
			url: '/add_chapter/:curriculum_id/:subject_id/:course_id',
			templateUrl: 'chapters/_addChapter.html',
			controller: 'chaptersCtrl'

		})

		.state('destroy_chapter', {
			url: '/destroy_chapter/:curriculum_id/:chapter_id',
			controller: 'chaptersCtrl'
		})

		.state('add_lesson', {
			url: '/add_lesson/:curriculum_id/:subject_id/:course_id/:chapter_id',
			templateUrl: 'lessons/_addLesson.html',
			controller: 'lessonsCtrl'

		})

		.state('destroy_lesson', {
			url: '/destroy_lesson/:curriculum_id/:lesson_id',
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

		.state('destroy_curriculum', {
			url: '/destroy_curriculum/:curriculum_id',
			controller: 'curriculumsCtrl'
		})
		.state('instructor_dash', {
			url: '/instructor_dash',
			templateUrl: 'dashboard/_instructorDash.html',
			controller: 'dashboardCtrl',
			// onEnter: ['$state', 'Auth', function($state, Auth) {
			// 	Auth.currentUser().then(function (){
			// 		$state.go('instructor_dash');
			// 	})
			// }],
			// resolve: {
			// 	postPromise: ['instructorFactory', function(instructors){
			// 		return instructors.getAll();
			// 	}]
			// }
			
		})
		.state('student_dash', {
			url: '/student_dash',
			templateUrl: 'dashboard/_student_dash.html',
			controller: 'dashboardCtrl'
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
