var pb = angular.module('pitney',['ui.router'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');

	$stateProvider
	.state('index',{
		url:'/index',
		views:{
			'content':{
				templateUrl:'login/login.html',
				controller:'mainController'
			}
		}
	})
	.state('index.home',{
		url:'/home',
		views :{
			'content@':{
				templateUrl:'home/homeTemp.html'
			}
		}
	})
	.state('index.postage',{
		url:'/postage',
		views: {
			'content@':{
				template:'<h1>Postage page</h1>'
			}
		}
	})
	.state('index.online',{
		url:'/online',
		views:{
			'content@':{
				template:'<h1>Online Page</h1>'
			}
		}
	})
}])

pb.controller('mainController',['$scope','$state',function($scope,$state) {
	$scope.signin = function(username,password) {
		if(username == "kishanlalbj" && password == "password"){
			$state.go("index.home");
		}
		else{
			$scope.message = "Invalid Username or Passsword";
		}

	}

	$scope.shipmentLabelList = ['USPS', 'FedEx', 'UPS'];
	$scope.selectedShipLabel = 'USPS';
	$scope.dropboxitemselected = function (item) {
		$scope.selectedShipLabel = item;
	}

}])