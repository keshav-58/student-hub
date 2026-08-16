const express = require("express")
const {readFile} = require("fs")
const {filePath} = require("./allcourses.js")
const router = express.Router()

router.get("/courses/:id", (req,res)=>{
    readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            return res.status(500).json({message:"file reading error"})
        }
        const json = JSON.parse(data)
        const course = json.categories.find(item => item.id === Number(req.params.id))
        if(!course){
            return res.status(404).json({message:"not found"})
        }
        return res.status(200).json(course)
    })
})
module.exports = router