admin.controller("adminController" , function($scope , $http){


$scope.mylink;

// $scope.getCars = function(){
// 	var protocol = location.protocol;
// 	var host = location.host;


$scope.initAdmin = function(){

    
	var protocol = location.protocol;
    var host = location.host;
    
    $http({
        method: 'GET',
        url: protocol + '//' + host +'/linkedinUser'   // se adapta al entorno
      }).then(function successCallback(response) {
          $scope.mylink = response.data;  

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    
}


})	



