const mongoose =require("mongoose");
const UserSchema=mongoose.Schema({
     nearestYard:{
        type:String,
        required:true
     },
     sDate:{
        type:String,
        required:true
     },
     sTime:{
        type:String,
        required:true
     },  
     itemDetails:{
        type:String,
        required:true
     },  
     userId:{
        type:String,
        required:true
     }
},{timestamps:true});
module.exports=mongoose.model("PickupSchedule", UserSchema);