import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"

dotenv.config();




const app = express();
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI).then(()=>{
    
    app.listen(PORT || 4000, () => {
        console.log(`app running on port : ${PORT}`)
    })
}).catch((error)=> console.log(error.message))

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


