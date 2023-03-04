const express=require("express");
const { submitfeeback } = require("../controllers/feedbackController");
const auth = require("../middlewares/auth");
const feedbackRouter=express.Router()

feedbackRouter.post("/",auth,submitfeeback)
module.exports=feedbackRouter