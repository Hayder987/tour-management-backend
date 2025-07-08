import express from "express";
import { Request, Response } from 'express';
import { UserRoutes } from "./app/modules/user/user.route";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/v1", UserRoutes)

app.get('/', (req:Request, res:Response)=>{
  res.json({
    status: "Ok",
    message:"Welcome to Our Tour management Backend"
  })
})

export default app;