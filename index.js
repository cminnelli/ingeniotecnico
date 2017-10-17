
var express = require("express");
var app = express();
const port = process.env.PORT || 3000  
var path = require("path");
var fs = require("fs");
var nodemailer = require("./node_aux/nodeMailer.js")
//instalar nodemon para actualizar cuando guardo

/*NODE MAILER CALL*/
// nodemailer.hola("charlie")



/*MONGO Y MONGOOSE*/
var mongoose = require("mongoose");
mongoose.connect("mongodb://ezeburr:alaska77@ds161194.mlab.com:61194/ingeniobd"); //MODO REMOTO MLAB
// /*mongoose.connect("mongodb://localhost:27017/autos");  MODO LOCAL  */

/*MODELOS DE MONGOOSE*/
var joboffer = require("./models/jobofferbd_bd.js") 
var linkedinUser = require("./models/linkedin_bd.js") 


/*BODY PARSER MIDDLEWARE*/
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*SERVE STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));



/*APP ROUTES*/
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

app.post("/joboffer_new" , function(req,res){
	var puesto = req.body.puesto;
	var seniority = req.body.seniority;
	var area = req.body.area;
	var descripcion = req.body.descripcion;
	var requisitos = req.body.requisitos;

	var descripcion2 = descripcion.split(". ");

	var location = req.body.location;
	var linkedin = req.body.linkedin;


	var newJob =  new joboffer({
	puesto:puesto,
	seniority:seniority,
	descripcion:descripcion2,
	area:area,
	location:location,
	linkedin:linkedin,

	fecha: Date.now()

	})

	newJob.save(function(err , job){
		if (err){
			throw err;
		}else{
			res.sendFile(path.join(__dirname,"index.html"));
		}
	})	

})

app.post("/joboffer_remove/:job" , function(req,res){
	var jobId = req.params.job;

	joboffer.remove({_id:jobId} , function(err){
		console.log(err)
	})

	res.send("eliminamos "+ jobId)

})

app.get("/hola/:fruits&:papas",function(req,res){
	res.send(req.params.fruits + req.params.papas)
})

/*RESOLVER*/
// app.post("/eraseJob:id" , function(err , job){
// var joberase= req.params.id;
// 		user.remove({puesto:"charlie" ,apellido: “minnelli”}, function(err){  
// 		    if (err) return handleError(err);
// 		})

// })



//sendgrid trest

