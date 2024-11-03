import mongoose from "mongoose"

const MONGODB_URL=process.env.MONGODB_URL;
export const ConnectDB=async()=>{
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("DB Connected");
        
    } catch (error) {
        console.log("DB not Connected");
    }
}