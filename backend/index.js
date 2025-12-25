import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
//middleware cors
app.use(cors({
    origin: process.env.FRONT_END_URL || "http://localhost:5174/",
    metods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["Content-Type", "Authorization"],
}))
//middleware for json
app.use(express.json())

app.listen(3000, ()=>{
    console.log("Server is running on 3000");
})