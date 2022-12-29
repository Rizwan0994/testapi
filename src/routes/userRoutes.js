const express=require("express");
const { signin, signup, test } = require("../controllers/userController");
const userRouter=express.Router();

userRouter.post("/signup",signup);
userRouter.post("/signin",signin);

userRouter.get("/test",test);

module.exports=userRouter;