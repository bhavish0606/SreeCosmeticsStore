import  express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import morgan  from "morgan";
import connectDB from "./config/db.js";
import authRoutes  from  "./routes/authRoute.js";
import  cors from 'cors';

// configure env
dotenv.config();
//database congig
connectDB();
const app=express()

app.use(cors())

app.use(express.json())
app.use(morgan('dev'))
app.use("/api/v1/auth",authRoutes);
//rest apis

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Shree Online Shopping Platform </h1>")
})
const PORT = 8000;

// run 
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});