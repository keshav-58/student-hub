const express = require("express");
const { createReadStream, readFile } = require("fs");
const path = require("path");
const router = express.Router();
const filePath = path.join(__dirname, "../../data/roadmaps.json");

router.get("/courses", (req, res) => {
  res.setHeader("content-type", "application/json");

  const stream = createReadStream(filePath);

  stream.on("error", (err) => {
    console.log(err);
    res.status(500).json({ message: "Error reading file" });
  });
  stream.pipe(res);
});

module.exports = { router, filePath };
