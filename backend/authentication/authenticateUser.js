require("dotenv").config();
const jwt = require("jsonwebtoken");
const users = require("../models/user");

async function authenticateUser(req, res, next) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "not authenticated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userLoggedIn = await users
      .findById(decoded.userId)
      .select("-password -__v -role -luckyNumber");

    if (!userLoggedIn) {
      return res.status(401).json({ message: "user no longer exist" });
    }
    req.user = userLoggedIn;
    next();
  } catch (err) {
    res
      .status(400)
      .json({ message: "Invalid or expired session", error: err.message });
  }
}
module.exports = authenticateUser;
