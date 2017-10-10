app.controller("mainController" , function($scope , $http){


$scope.servicios = [
	{nombre:"Busqueda y selección" , descripcion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa eveniet reiciendis quos sit? Odit quasi sit itaqu" , img:"/imagenes/web/service1.jpg"},
	{nombre:"Capacitación" , descripcion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa eveniet reiciendis quos sit? Odit quasi sit itaqu" , img:"/imagenes/web/service1.jpg"},
	{nombre:"Evaluaciones técnicas" , descripcion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa eveniet reiciendis quos sit? Odit quasi sit itaqu" , img:"/imagenes/web/service1.jpg"},
	
]

// $scope.autos;
// $scope.viewAuto;
// $scope.servicios =[{"nombre":"Venta de autos","descripcion":"Mira todos nuestros autos en stock!","imgUrl":"/imagenes/icons/venta.png","referencia":"autos"},
// {"nombre":"Cotizá tu auto","descripcion":"Compramos autos de terceros. Si estas vendiendo tu auto, pedinos cotización!." , "imgUrl":"/imagenes/icons/compra.png","referencia":"contacto"},
// {"nombre":"Gestoria","descripcion":"Gestión de transferencia , libre deuda, alta/bajas de patentes. Para más información contactanos","imgUrl":"/imagenes/icons/gestoria.png","referencia":"contacto"},
// {"nombre":"Contactanos!","descripcion":"Ubicanos en el mapa y dejanos tu mensaje!","imgUrl":"/imagenes/icons/ubicacion.png","referencia":"contacto"}]	
	
// $scope.seePhoto = function(obj){
// 	$scope.viewAuto = obj;
// 	 return $scope.viewAuto; 
// }

// $scope.consultar  = function(auto){
// 	$("#auto").val(auto.nombre);
// 	$("#tipoConsulta").val('Venta de Autos');
// 	window.location = "#contacto"
// }

// $scope.contacto = function(nombre , referencia){

// 	if (nombre ==="Venta de autos"){
// 	$("#tipoConsulta").val(nombre);
// 	window.location = "/#autos"
		
// 	}else {
// 		window.location = "/#contacto"
// 		$("#tipoConsulta").val(nombre);
// 	}
// }


// $scope.getCars = function(){
// 	var protocol = location.protocol;
// 	var host = location.host;

// 	$http({
// 	  method: 'GET',
// 	  url: protocol + '//' + host +'/api'   // se adapta al entorno
// 	}).then(function successCallback(response) {
// 		$scope.autos = response.data;
// 		console.log("Autos en stock cargados")
// 	  }, function errorCallback(response) {
// 	    // called asynchronously if an error occurs
// 	    // or server returns response with an error status.
// 	  });
// }
})	




