const express = require("express");
const router = express.Router();
const Package = require("../models/package.js");

router.get("/", async (req, res) => {
  const packages = await Package.find({});

  res.render("pages/home", { data: packages });
});

module.exports = router;
