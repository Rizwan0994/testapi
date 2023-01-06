const scheduleModel=require("../models/schedule");

const createSchedule= async (req,res)=>{
const {nearestYard,sDate,sTime,itemDetails}=req.body;
const newSchedule=scheduleModel({
    nearestYard:nearestYard,
    sDate:sDate,
    sTime:sTime,
    itemDetails:itemDetails,
    userId:req.userId
});
try{
await newSchedule.save();
res.status(201).json(newSchedule);
}catch(error){
    console.log(error);
    res.status(500).json({message:"Something went wrong"});
}
}

//........
const getSchedule=async(req,res)=>{
try{

const schedules= await scheduleModel.find({userId : req.userId});
res.status(200).json(schedules);

}catch(error){

    console.log(error);
    res.status(500).json({message:"Something went wrong"});
}
}

module.exports={
    createSchedule,
    getSchedule
}