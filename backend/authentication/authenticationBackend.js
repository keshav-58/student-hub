const express = require("express")
const router = express.Router()
const loginRoute = require("./loginController/login")
const registerRoute = require("./registerController/register")
const authenticateUser = require("./authenticateUser")


router.route("/login").post(loginRoute)
router.route("/register").post(registerRoute)
router.route("/user").get(authenticateUser,(req,res)=>{
    res.status(200).json({messages:"logged in sucess",user:req.user})
})

module.exports=router