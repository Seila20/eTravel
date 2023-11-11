const express = require("express");
const router = express.Router();
const Package = require("../models/package.js");

router.get("/:id", async (req, res) => {
  const packages = await Package.findById(req.params.id);
  res.render("pages/editpackage", { package: packages });
});

router.post("/:id", async (req, res) => {
  const idToEdit = req.params.id;

  try {
    const package = await Package.findByIdAndUpdate(
      { _id: idToEdit },
      {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
      }
    );
    res.redirect("/management");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
