const userModel=require("..//models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const SECRET_KEY=process.env.SECRET_KEY;
const signup= async(req, res)=>{
//Exisiting user Check
//Hashed Password
//Token Generate

const {username,email,password,contact}=req.body;
try{
    const existingUser=await userModel.findOne({contact:contact});
if(existingUser)
{
    return res.status(400).json({message:"user already exists"});
}

const hashedPassword= await bcrypt.hash(password,10);
const result= await userModel.create({
    username:username,
    email:email,
    password:hashedPassword,
    contact:contact
});

const token=jwt.sign({contact:result.contact,id:result._id},SECRET_KEY)

res.status(201).json({user:result,token:token});

} catch(error){

    console.log(error);
    res.status(500).json({message:"something went wrong"});

}
}


const signin= async(req,res)=>{

    const {password,contact}=req.body;
    try{
    const existingUser=await userModel.findOne({contact:contact});
    if(!existingUser){
        return res.status(404).json({message:"User not found"});
    }

    const matchPassword=await bcrypt.compare(password,existingUser.password);
    if(!matchPassword){
        return res.status(400).json({message:"Invalid Credentaisl"});
    }
    const token=jwt.sign({email:existingUser.contact,id:existingUser._id},SECRET_KEY);
    res.status(200).json({user:existingUser,token:token});

}
catch(error){

    console.log(error);
    res.status(500).json({message:"something went wrong"});
}
}

module.exports={signup,signin};