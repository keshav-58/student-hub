const { lowerCase } = require("lodash");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  luckyNumber: {
    type: Number,
    default: 5,
  },
  role: {
    type: String,
    enum: ["user", "head", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("users", userSchema);
