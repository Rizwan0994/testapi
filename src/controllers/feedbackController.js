const FeedbackModel=require("../models/feedback")

const submitfeeback= async (req,res)=>{

    const { name, email, feedback, rating } = req.body;
    const newFeedback = new  FeedbackModel({
        name,
        email,
        feedback,
        rating
      });
     await newFeedback.save()
      .then(() => {
        res.status(201).json({ message: 'Feedback submitted successfully' });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'Error submitting feedback' });
      });
  };

  module.exports ={
    submitfeeback
  }