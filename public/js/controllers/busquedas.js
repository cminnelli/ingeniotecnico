
app.service("misServicios", function(){
	
		this.sessionInit = function(){
			var hola = localStorage.getItem("ingenioTecnico");
			if (hola){
				return false;
			}else{
			return true
			}
		}
	
	})
	
	app.controller("busquedaController" , function($scope , $http , misServicios){
	

	var protocol = location.protocol;
	var host = location.host;

	$scope.check2 = true; //agregar a index html check2 en linkedin wrapper

	$scope.joboffer;
		
	$scope.saveLinkedin = function(){
		var profileInput = $("#linkProfile")
		var linkdiv = $(".linkedin-div")
		var linkmsg = $(".linkedin-msg")
		var profile = profileInput.val();
		localStorage.setItem("ingenioTecnico" , profile);

		$http({
		  method: 'post',
		  url: protocol + '//' + host +'/linkedin/'+ profile   // se adapta al entorno
		}).then(function successCallback(response) {
			linkmsg.slideDown("slow");
			linkdiv.fadeOut("fast");

		  }, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		  });
	}





	
	$scope.initBusquedas = function(){
		console.log("iniciando busqueda 2")
		$scope.check2 = misServicios.sessionInit();

		$http({
		  method: 'get',
		  url: protocol + '//' + host +'/joboffer'   
		}).then(function successCallback(response) {
			$scope.joboffer = response.data;
			console.log("ahora va a mandar job offers");
			console.log($scope.joboffer)		
		  }, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		  });




				
	}
	})	
	
	
