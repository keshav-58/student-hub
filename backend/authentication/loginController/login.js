require("dotenv").config();
const jwt = require("jsonwebtoken");
const users = require("../../models/user");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const inputUser = req.body;
    const registeredUser = await users.findOne({
      userName: inputUser.userName,
    });
    if (!registeredUser) {
      return res.status(401).json({ message: "not registered" });
    }
    const isMatch = await bcrypt.compare(
      inputUser.password,
      registeredUser.password,
    );
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const newToken = jwt.sign(
      {
        userId: registeredUser._id,
        userName: registeredUser.userName,
        role: registeredUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    res.cookie("token", newToken, { httpOnly: true });
    return res
      .status(200)
      .json({
        message: "sucess",
        newToken,
        user: { name: registeredUser.userName },
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

module.exports = login;
