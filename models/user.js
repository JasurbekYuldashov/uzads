const { mongoose } = require("../components/dbconnector");

const user = new mongoose.Schema({
    uniqId:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumbers:{
        type:mongoose.Types.Array,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = new mongoose.model("user",user)

exports.User=User