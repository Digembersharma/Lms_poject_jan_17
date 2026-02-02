import mongoose, { trusted } from "mongoose"
import { Quiz } from "./quiz.model.js"
const moduleSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    video:{
        type:String, // cloud uniery ka use karna wala haa
        required : true
    },
    title:{
        type:String,
        required:true
    },
    quiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Quiz"
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
},{timestamps:true})

export const Modules = mongoose.model("Modules",moduleSchema);