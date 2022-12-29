const express=require("express");
const app=express();
const userRouter=require("./routes/userRoutes");
const dotenv=require("dotenv");
dotenv.config();
const mongoose=require("mongoose");
const cors=require("cors")

mongoose.set('strictQuery', true);


//covert body data to json
app.use(express.json());
//help to call api from everywhere
app.use(cors());
//middel ware for authentication
app.use((req,res,next)=>{
console.log("HTTP Method -"+req.method+", URL - "+req.url);
next();
});
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to ScrapHub");
});


//db connection
const PORT=process.env.PORT|| 5000; 
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected with database!");
    app.listen(PORT,()=>{
        console.log("server is running on port number "+PORT);
    });
})
.catch((error)=>{
    console.log(error);
});

 
