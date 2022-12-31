const mongoose =require("mongoose");
const UserSchema=mongoose.Schema({
     username:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     contact:{
        type:String,
        required:true
     },  
     address:{
        type:String,
        required:true
     },
     email:{
        type:String,
     }
},{timestamps:true});
module.exports=mongoose.model("User", UserSchema);