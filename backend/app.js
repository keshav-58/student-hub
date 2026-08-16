require("dotenv").config()
const express = require("express")
const connectDb = require("./mongodb")
const Todo = require("./models/Todo")
const taskRoutes = require("./TODObackend/controllers.js")
const {router : roadmapsRoutes } = require("./courses/allcourses.js")
const courseByIdRoutes = require("./courses/courseById.js")
const app=express()

app.use(express.json())

app.use("/api/v1",taskRoutes,roadmapsRoutes,courseByIdRoutes)


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