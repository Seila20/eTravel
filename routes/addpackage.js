const express = require("express");
const router = express.Router();
const Package = require("../models/package.js");

router.get("/", async (req, res) => {
  res.render("pages/addpackage");
});

router.post("/", async (req, res) => {
  try {
    await Package.create({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
    });

    res.redirect(`/management`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
