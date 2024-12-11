import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json()) // whenever we will get the req from the frontend to the backend that will be parsed using this jsmon
app.use(cors())  // using this we can access the backend from any frontend

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user',userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING");
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

//mongodb+srv://sumitsamanta:Sumit_2004@cluster0.4yvyf.mongodb.net/?