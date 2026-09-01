require("dotenv").config()
const authentication=require("./auth/auth.js")
const express = require("express")
const connectDb = require("./mongodb")
const Todo = require("./models/Todo")
const taskRoutes = require("./TODObackend/todoBackend.js")
const {router : roadmapsRoutes } = require("./courses/allcourses.js")
const courseByIdRoutes = require("./courses/courseById.js")
const cookiePraser = require("cookie-parser")
const cors = require("cors")
const app=express()
const gu = require("./auth/getAllUsers.js")
app.use(cors())

app.use(express.json())
app.use(cookiePraser())

app.use("/api/v1",taskRoutes,roadmapsRoutes,courseByIdRoutes)
app.post("/api/v1/auth/register",authentication)
app.get("/api/v1/gu",gu)

const start = async () =>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(process.env.PORT,()=>{
            console.log(`server is listning on port ${process.env.PORT}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()