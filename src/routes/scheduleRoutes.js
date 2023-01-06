const express=require("express")
const {getSchedule,createSchedule}=require("..//controllers/scheduleController");
const auth = require("../middlewares/auth");
const scheduleRouter=express.Router()

scheduleRouter.get("/",auth,getSchedule);
scheduleRouter.post("/",auth,createSchedule);

module.exports=scheduleRouter;
