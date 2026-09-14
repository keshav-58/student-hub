const Todo=require("../../models/Todo") 

const getAllTask  = async (req,res) => {
    try {
        const tasks = await Todo.find({userId : req.user._id})
        res.status(200).json(tasks,{message:"sucess"})
    } catch (err) {
        res.status(404).json({message:"tasks not found"})
    }
}
const addTasks = async (req,res) => {
    const {text} = req.body
    if(!text || text.trim() === ""){
        res.status(400).json({message:"task is required"})
    }
    try{
        const addedTask= await Todo.create({...req.body , userId : req.user._id})
        res.status(201).json(addedTask,{message:"sucess"})
    } catch(err){
        res.status(500).json({message:"internal server error"})
    }
}
const updateTasks = async (req,res) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate({ _id : req.params.id,userId : req.user._id },
                                                            req.body,{returnDocument:"after"})
        if(!updatedTask){
            return res.status(404).json({message : "task not found"})
        }
        res.status(200).json(updatedTask,{message:"sucess"})
    } catch (err) {
        console.log(err)
        res.status(500).json({message:"internal server error"})
    }
}

const deleteTasks = async(req,res) =>{
    try {
        const deletedTask = await Todo.findByIdAndDelete({ _id : req.params.id,
                                                            userId : req.user._id
                                                        })
        if(!deletedTask){
            res.status(404).json({message:"task not found"})
        }
        res.status(200).json(deletedTask,{message:"sucess"})

    } catch (err) {
        res.status(500).json({message:"internal error"})
    }
}

module.exports = { getAllTask,
                   addTasks,
                   updateTasks,
                   deleteTasks 
                }