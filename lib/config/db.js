import mongoose from "mongoose"

export const ConnectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://greatstack:saikirancluster@cluster0.eb73v.mongodb.net/todo-app');
        console.log("DB Connected");
        
    } catch (error) {
        console.log("DB not Connected");
    }
}