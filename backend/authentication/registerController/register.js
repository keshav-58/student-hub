const jwt = require("jsonwebtoken");
const users = require("../../models/user.js");
require("dotenv").config();
const bcrypt = require("bcrypt");

async function registerUser(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await users.create({
      ...req.body,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { userId: newUser._id, userName: newUser.userName, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, { httpOnly: true });
    res
      .status(201)
      .json({
        message: "sucess generation",
        token,
        user: { name: newUser.userName },
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = registerUser;
