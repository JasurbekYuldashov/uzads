const { mongoose } = require("../components/dbconnector");

const subCategory = new mongoose.Schema({
    subCategoryName:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        required:true
    }
})

const SubCategory = new mongoose.model("subcategory",subCategory)

exports.SubCategory=SubCategory