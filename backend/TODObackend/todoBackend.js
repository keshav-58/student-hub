const express = require("express")
const router = express.Router()
const Todo = require("../models/Todo.js")
const jwt = require("jsonwebtoken")
const authenticateUser = require("../authentication/authenticateUser.js")

const {getAllTask,
        addTasks,
        updateTasks,
        deleteTasks
        } = require("./controllers/controllers.js")
       
router.route("/tasks").get(authenticateUser,getAllTask).post(authenticateUser,addTasks)
router.route("/tasks/:id").patch(authenticateUser,updateTasks).delete(authenticateUser,deleteTasks)

module.exports=router








// router.get("/tasks", async (req,res)=>{
//     try {
//         const tasks = await Todo.find()
//         res.status(200).json(tasks)
//     } catch (err) {
//         res.status(404).json({message : "notfound"})
//     }
// })

// router.post("/tasks",async (req,res)=>{
//     const {text} = req.body
//     if(!text || text.trim() === ""){
//         return res.status(400).json({message : "title is required"})
//     }
//     try {
//         const task = await Todo.create(req.body)
//         res.status(201).json(task)
//     } catch (err) {
//         res.status(500).json({message : "internal server error"})
//     }
// })

// router.patch("/tasks/:id", async (req,res)=>{
//     try {
//         const task = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
//         if(!task){
//             return res.status(404).json({message : "task not found"})
//         }
//         res.status(200).json(task)
//     } catch (err) {
//         res.status(500).json({message : "internal server error"})
//     }
// })

// router.delete("/tasks/:id", async (req,res)=>{
//     try{
//         const task = await Todo.findByIdAndDelete(req.params.id)
//         if(!task){
//             return res.status(404).json({message : "task not found"})
//         }
//         res.status(200).json(task)
//     }catch(err){
//         res.status(500).json({message : "internal error"})
//     }
// })

