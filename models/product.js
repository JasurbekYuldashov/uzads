const { mongoose } = require("../components/dbconnector");

const product = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    subCategoryId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    price:{
        type:Number
    },
    status:{
        type:String
    },
    description:{
        type:String
    },
    photos:{
        type:Array,
    },
    city:{
        type:String
    },
    telNumber:{
        type:Array
    },
    email:{
        type:String
    },
    usersname:{
        type:String
    },
    userId:{
        type:mongoose.Types.ObjectId
    },
    view:{
        type:Number
    },
    isTop:{
        type:Boolean
    }
})

const Product = new mongoose.model("category",product)

exports.Product=Product