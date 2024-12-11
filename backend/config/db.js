import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sumitsamanta:Sumit_2004@cluster0.4yvyf.mongodb.net/food-del').then(()=>console.log("Db connected"))
}