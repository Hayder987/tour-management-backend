import express from "express";
import { Request, Response } from 'express';

const app = express();

app.get('/', (req:Request, res:Response)=>{
  res.json({
    status: "Ok",
    message:"Welcome to Our Tour management Backend"
  })
})

export default app;