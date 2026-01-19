 import mongoose from "mongoose"
 // when user purchese the course this course id is come in order schema 
 const orderSchema = new mongoose.Schema({
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses"
    },
    totalAmount:{
        type:Number,
        required:true,
    },
    stripeSessionId:{
        type:String,
        unique:true
    }
 },{timestamps:true})

 export const Order = mongoose.model("Order",orderSchema)