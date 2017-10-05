app.service("misServicios", function(){
	
		this.sessionInit = function(){
			var hola = localStorage.getItem("ingenioTecnico");
			var linkedin = $("#linkProfile").val(hola);
		}
	
	})
	
	app.controller("busquedaController" , function($scope , $http , misServicios){
	
	$scope.joboffer = [
	{puesto:"Analista Ingenieria" , location:"San Isidro" , seniority:"junior", descripcion:" en este puesto deberan hacer el relevamiento de las vigas que blablabla" , area:"Ingeniería tech"},
	{puesto:"Analista de planos" , location:"Martinez" , seniority:"semisenior", descripcion:" en este puesto deberan hacer el relevamiento de las vigas que blablabla" , area:"Ingeniería tech"},
	{puesto:"Supervisor de obras" , location:"Tortuguitas" , seniority:"senior", descripcion:" en este puesto deberan hacer el relevamiento de las vigas que blablabla" , area:"Ingeniería tech"},
	{puesto:"Ingeniero" , location:"Beccar" , seniority:"supervisor", descripcion:" en este puesto deberan hacer el relevamiento de las vigas que blablabla" , area:"Ingeniería tech"},
	{puesto:"Ingeniero Tecnologico" , location:"CABA" , seniority:"supervisor", descripcion:" en este puesto deberan hacer el relevamiento de las vigas que blablabla" , area:"Ingeniería tech"},
	{puesto:"Supervisor de vigas" , location:"Flores" , seniority:"supervisor", descripcion:" en este puesto deberan hacer el relevamiento de las vigas que blablabla" , area:"Ingeniería tech"},
	{puesto:"Ingeniero" , location:"San Martin" , seniority:"supervisor", descripcion:" en este puesto deberan hacer el relevamiento de las vigas que blablabla" , area:"Ingeniería tech"},
	
	]
	
		
	$scope.saveLinkedin = function(){
		var linkedin = $("#linkProfile").val();
		localStorage.setItem("ingenioTecnico" , linkedin);
		misServicios.checkLinkedin();
	}
	
	$scope.initBusquedas = function(){
		console.log("iniciando busquedas")
	
		misServicios.sessionInit();
	
		var protocol = location.protocol;
		var host = location.host;
	
		$http({
		  method: 'GET',
		  url: protocol + '//' + host +'/api'   // se adapta al entorno
		}).then(function successCallback(response) {
			$scope.autos = response.data;
			console.log("Busquedas cargadas")
		  }, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		  });
	
		
	}
	})	
	
	
