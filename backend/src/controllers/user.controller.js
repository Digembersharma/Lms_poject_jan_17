import {User} from "../models/Usermodel";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const Register = async(req,res)=>{
    try{
        const{fullName,email,password}=req.body
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Please provide all details",
                success : false
            })
            
        }
         const user = await User.findOne({email})
            if(user){
                return res.status(401).json({
                    message:"User already registerd"
                })
            }
            //user phala bar register kar raha ha to uska password ko hash karanga 

            const hashePassword = await bcrypt.hash(password,10)
            const newUser = await User.create({
                fullName,
                email,
                password:hashedPassword

            })
            const token = await jwt.sign({userId:newUser._Id},) 
    }
    catch(error){
        console.log(`error form register backend,${error}`)
    }
}