
var express = require("express");
var app = express();
const port = process.env.PORT || 3000  
var path = require("path");
var fs = require("fs");
//instalar nodemon para actualizar cuando guardo

/*MONGO Y MONGOOSE*/
var mongoose = require("mongoose");
mongoose.connect("mongodb://ezeburr:alaska77@ds161194.mlab.com:61194/ingeniobd"); //MODO REMOTO MLAB
/*mongoose.connect("mongodb://localhost:27017/autos");  MODO LOCAL  */

/*MODELOS DE MONGOOSE*/
var joboffer = require("./models/jobofferbd_bd.js") 
var linkedinUser = require("./models/linkedin_bd.js") 


//agregar para agregar desde panel admin
// var newJOB = new joboffer ({
// 	puesto:"Analista de vigas",
// 	seniority:"semiSenior",
// 	descripcion:"excelente trabajo",
// 	area:"Finanzas",
// 	location:"Balvanera, CABA",
// 	linkedin:"http//:test",
// 	requisitos:"expandir requisitos"
// })


// newJOB.save(function(err , job){
// 	if (err) {
// 		throw err;
// 	}else{
// 		console.log(job)
// 	}
// })

/*BODY PARSER MIDDLEWARE*/
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*SERVE STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, function(req , res){
	console.log("Listening ingenio tecnico in port: " + port);
})

app.get("/" , function(req,res){
	res.sendFile(path.join(__dirname ,"index.html"));
})


app.get("/admin" , function(req,res){
	res.sendFile(path.join(__dirname ,"myadmin.html"));
})

app.post("/linkedin/:id" , function(req,res){
	var link = "https://www.linkedin.com/in/"
	var profile= req.params.id;
	var newProfile = new linkedinUser({
		linkedin:link + profile,
	})



	newProfile.save(function(err , user){
		if (err) {
			throw err;
		}else{
			console.log("nuevo usuario agregado");
		}
	})
	// newProfile.save().then(function(profile){
	// 	console.log("usuario agregado")
	// }, function(err){
	// 	throw err;
	// })

	var linkedin = {
		url:req.params.id,
		mensaje: "gracias por dejar tu mail"
	}

	res.send(linkedin)
})



app.get("/joboffer" , function(err, res ){


	joboffer.find({} , function(err, data){
		if (err){
			throw err;
		}else{
			res.send(data)
		}
	})


})


app.get("/linkedinUser" , function(err, res ){

	linkedinUser.find({} , function(err, data){
		if (err){
			throw err;
		}else{
			res.send(data);
		}
	})
	
	
	
	})



