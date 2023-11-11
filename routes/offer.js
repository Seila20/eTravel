const express = require("express");
const router = express.Router();
const Package = require("../models/package.js");

router.get("/:id", async (req, res) => {
  const packages = await Package.findById(req.params.id);

  res.render("pages/offer", { data: packages });
});

module.exports = router;
