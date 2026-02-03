import { Modules } from "../models/module.model.js";
import {Comment} from "../models/comment.model.js";

export const createComment = async(req,res)=>{
    try{
        const moduleId = req.params.id;
        const{comment}=req.boady;
        const userId = req.user._id  // kon comment kar raha haa 

        if(!moudleId){ // if we not found module id 
            return res.status(401).json({
                message:"module id not found"
            })
        }

        if(!comment){
            return res.status(401).json({
                message:"comment id required"
            })
        }

        // now we check the id we get it is excest or not 
        // findById is used in mongoodb to find throught by id 
        const module = await Modules.findById(moduleId);

        // if we not found module then agian {these are validation =} (validation)
        if(!module){
            return res.status(401).json({
                message:"Module not found"
            })
        }
        // if we found module then add comment 
        const newComment =  await Comment.create({
            userId,
            moduleId,
            comment
        })

        // ab module me comment ki id hama push karni i so we use await first we comment then we put into it 
        await Modules.findByIdAndUpdate(
            module.id,
            {$push:{comments:newComment._id}},
            {new:true}
        )
        //await Modules.findByIdAndUpdate( working of this is find module by id then update it throught new id 

        const populatedComment = await Comment.findById(newComment._id).populate('userId',"fullName email")

        return res.status(201).json({
            message:"comment added",
            populatedComment
        }
        )
    }
    catch(error){
        console.log(error)

    }
}