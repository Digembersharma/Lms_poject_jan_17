 import { configDotenv } from "dotenv";
 configDotenv({quiet:true})
 export const ENV={
    MONGO_URI:process.env.MONGO_URI,
    PORT:process.env.PORT
 }