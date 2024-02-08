const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{
    versionKey:false
})

const UserModel=mongoose.model("UserDetail",userSchema)

module.exports={UserModel};