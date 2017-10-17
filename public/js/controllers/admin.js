admin.controller("adminController" , function($scope , $http){

$scope.removeJob = function(id){
    var protocol = location.protocol;
    var host = location.host;
    var path = "/joboffer_remove/" + id;

    $http({
        method: 'post',
        url: protocol + '//' + host + path   // se adapta al entorno
      }).then(function successCallback(response) {
          window.location = "/admin";

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });


    
}


$scope.mylink;
$scope.myjob;


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

      $http({
          method: 'GET',
          url: protocol + '//' + host +'/joboffer'   // se adapta al entorno
        }).then(function successCallback(response) {
            $scope.myjob = response.data;
            console.log($scope.myjob);  

          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });



    
}


})	



