const express=require("express");
const app=express();
const userRouter=require("./routes/userRoutes");
const scheduleRouter=require("./routes/scheduleRoutes");
const dotenv=require("dotenv");
dotenv.config();
const mongoose=require("mongoose");
const cors=require("cors");
const feedbackRouter = require("./routes/feedbackRoutes");
const CollectorRouter = require("./routes/CollectorRoutes");
const notificationRouter = require('./routes/collectorNotificationRouter');
const productRoutes = require('./routes/productRoutes');
const stripRouter = require('./routes/stripeRoutes');
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
app.use("/schedule",scheduleRouter);
app.use("/feedback",feedbackRouter);
app.use("/collector",CollectorRouter);
app.use('/api', notificationRouter);
app.use('/api', productRoutes);
app.use('/api', stripRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to ScrapHub");
});



//.....yard.........
// Define schema for Yard model
const yardSchema = new mongoose.Schema({
    title: String,
    latitude: Number,
    longitude: Number,
  });
  
  // Create Yard model
  const Yard = mongoose.model('yards', yardSchema);
  
  // Define route to retrieve all yards
  app.get('/yards', async (req, res) => {
    try {
      const yards = await Yard.find({});
      res.json(yards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
//..............

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

 
