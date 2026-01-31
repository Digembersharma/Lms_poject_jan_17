import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User"

    },
    moduleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Modules"
    },
    comment:{
        type:String,
        required:true
    }
},{timestemps:true})
export const Comment = mongoose.model("Comment",commentSchema)