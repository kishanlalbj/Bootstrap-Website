var pb = angular.module('pitney');
pb.controller('mainController',['$scope','$state',function($scope,$state) {
	$scope.signin = function(username,password) {
		if(username == "kishanlalbj" && password == "password"){
			$state.go("index.home");
		}
		else{
			$scope.message = "Invalid Username or Passsword";
		}

	}
}])