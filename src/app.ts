import express from "express";
import { Request, Response } from 'express';
import cors from "cors"
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/v1", router)

app.get('/', (req:Request, res:Response)=>{
  res.json({
    status: "Ok",
    message:"Welcome to Our Tour management Backend"
  })
})

// error middale ware
app.use(globalErrorHandler);

// middle ware not found route
app.use(notFound)

export default app;