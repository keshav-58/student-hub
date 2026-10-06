const express = require("express");
const router = express.Router();
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "..", "..", "data", "home.json");
const { readFile } = fs;
async function homeBackend(req, res) {
  const { idLimit } = req.query;
  const data = await readFile(filePath, "utf-8");
  const parseData = JSON.parse(data);
  // const homeData = parseData.navigation.filter((item)=> item.id <= idLimit)
  res.status(200).json(parseData);
}

router.route("/").get(homeBackend);

module.exports = router;
