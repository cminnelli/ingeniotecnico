
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobSchema =  new Schema({
	empresa:String,
	puesto:String,
	seniority:String,
	descripcion:Array,
	area:String,
	location:String,
	linkedin:String,
	requisitos:Array,
	fecha:Date	
	

}, {collection:"joboffer"});

var jobs = mongoose.model("jobs" , jobSchema)



module.exports = jobs;


