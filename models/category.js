const { mongoose } = require("../components/dbconnector");

const category = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    imgId:{
        type:mongoose.Types.ObjectId,
        required:true
    }
})

const Category = new mongoose.model("category",category)

exports.Category=Category