import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    }catch(err){
        console.log(`Error connecting to MongoDB: ${err}`);
        process.exit(1); //exit with failure
    }
}