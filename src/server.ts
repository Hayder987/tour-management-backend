/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;


const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("successfully connected with mongodb");

    server = app.listen(envVars.PORT, () => {
      console.log(`Server Running At Port: ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error)
  }
};

startServer();

// uncaught error handling---------------------

process.on("SIGTERM", ()=>{
    console.log("SIGTERM Signal received...server shutting down")

    if(server){
        server.close(()=>{
            process.exit(1)
        })    
    }
    process.exit(1)
});

process.on("SIGINT", ()=>{
    console.log("SIGINT Signal received...server shutting down")

    if(server){
        server.close(()=>{
            process.exit(1)
        })    
    }
    process.exit(1)
});

process.on("unhandledRejection", (err)=>{
    console.log("unhandled error detected...server shutting down", err)

    if(server){
        server.close(()=>{
            process.exit(1)
        })    
    }
    process.exit(1)
});

process.on("uncaughtException", (err)=>{
    console.log("uncaught Exception error detected...server shutting down", err)

    if(server){
        server.close(()=>{
            process.exit(1)
        })    
    }
    process.exit(1)
});

// --------------------------------



