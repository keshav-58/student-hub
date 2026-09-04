const jwt = require("jsonwebtoken")
const users = require("../../models/user.js")
require("dotenv").config()

async function registerUser(req,res,next){

    try {
        const newUser = await users.create(req.body)
        const token = jwt.sign(
            {userId:newUser._id, userName:newUser.userName, role:newUser.role },
            process.env.JWT_SECRET,
            {"expiresIn":"7d"}
        )

        res.cookie("token",token,{httpOnly:true})
        res.status(201).json({message:"sucess generation",token})
    } catch (err) {
        res.status(500).json({error:err.message})
    }

}

module.exports=registerUser