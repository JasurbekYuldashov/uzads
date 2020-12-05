const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser: true, useUnifiedTopology: true}).then(async r=>{
	console.log("Mongodbga ulandi")
}).catch(e=>{
	console.error("Mongodbga ulana olmadi")
})

exports.mongoose = mongoose