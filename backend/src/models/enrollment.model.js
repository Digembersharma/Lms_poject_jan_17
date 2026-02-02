 import mongoose from "mongoose";
 const enrollmentSchema = new mongoose.Schema({
    userId:{
        type:mogoose.Schema.Types.ObjectId,
        ref:"User"
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses"
    },
    stripeSessionId:{
        type:String,
        required:true
    }
 },{timestamps:true})

 export const Enrollment = mongoose.model("Enrollment",enrollmentSchema)