const users = require("../models/user")

async function gu(req,res){
    try{
        const allUsers=await users.find()
        res.status(200).json(allUsers)
    }catch(err){
        res.status(400).json({message:"error",error:err.message})
    }
}
module.exports=gu