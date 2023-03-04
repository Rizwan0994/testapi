const express=require("express");
const { submitfeeback } = require("../controllers/feedbackController");
const auth = require("../middlewares/auth");
const feedbackRouter=express.Router()

feedbackRouter.post("/",submitfeeback)
module.exports=feedbackRouter