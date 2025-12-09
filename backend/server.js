import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {DbConnection} from "./config/dbConfig.js"
import authRoute from "./routes/authRoute.js"
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
DbConnection();
app.use("/user",authRoute)
app.listen(process.env.port,()=>{
   console.log(`server is running on ${process.env.port}`)
})
