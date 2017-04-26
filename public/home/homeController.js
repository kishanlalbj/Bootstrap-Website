var pb = angular.module('pitney');
pb.controller('homeController',['$scope','$state',function($scope) {
  console.log('Log from homeController');
  $scope.shipmentLabelList = ['USPS', 'FedEx', 'UPS'];
  $scope.selectedShipLabel = 'USPS';
  $scope.dropboxitemselected = function (item) {
    $scope.selectedShipLabel = item;
  }
  $scope.previousProductList = ['1706563--3/21/17', '1706562--3/21/17', '1706561--3/21/17','1705573--3/21/17','1705571--3/21/17','1705569--3/21/17','1705568--3/21/17','1705567--3/21/17','1705566--3/21/17','1705565--3/21/17','1705561--3/21/17','1705562--3/21/17','1705564--3/21/17','1705563--3/21/17','1704562--3/21/17','1704563--3/21/17','1472696--2/24/17','1994585--10/3/16','1387589--7/21/16','1382593--7/13/16','1382590--7/13/16'];
  $scope.selectedPreviousProduct = $scope.previousProductList[0];
}]);
