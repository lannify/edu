angular.module('edu')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){
	$scope.login = function() {
    Auth.login($scope.user).then(function(){
      console.log(Auth._currentUser.user_level);
      if (Auth._currentUser.user_level == 2) {
        $state.go('instructor_dash');
      } else if (Auth._currentUser.user_level == 3) {
        $state.go('student_dash');
      } else {
        $state.go('curriculums');
      }
      
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      // $state.go('curriculums');
      console.log(Auth._currentUser.user_level);
      if (Auth._currentUser.user_level == 2) {
        $state.go('instructor_dash');
      } else if (Auth._currentUser.user_level == 3) {
        $state.go('student_dash');
      } else {
        $state.go('curriculums');
      }
    });
  };
}]);