import mongoose, { trusted } from "mongoose"
const moduleSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    video:{
        type:String,
        required : true
    },
    title:{
        type:String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    quiz:{
        type:mongoose.Schema.Types.ObjecId,
        ref:"Quiz"
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
},{timestamps:true})