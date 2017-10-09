
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobSchema =  new Schema({
	puesto:String,
	seniority:String,
	descripcion:String,
	area:String,
	location:String,
	linkedin:String,
	requisitos:String	
	

}, {collection:"joboffer"});

var jobs = mongoose.model("jobs" , jobSchema)



module.exports = jobs;


