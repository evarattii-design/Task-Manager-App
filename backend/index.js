import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

console.log("MONGO_URI =", process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected"))
.catch(err => console.log("DB Error:", err))

const app = express()
//middleware for cors

app.use(cors({
  origin: process.env.FRONT_END_URL || "http://localhost:5174",
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"]
}))
//middleware for json

app.use(express.json())

app.listen(3000, () => console.log("Server is running on 3000"))
