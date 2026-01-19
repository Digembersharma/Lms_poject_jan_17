import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    quizId:{

    },
    content:{
        type:String,
        required:true
    },
    options:[
        {
            type:String,
            
        }
    ],
    correctOption:{
         type :String,

    },
    explanation:{
        type:String
    }
},{timestamps:true})

export const Questions=mongoose.model("Questions",questionSchema)