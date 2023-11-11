const express = require("express");
const router = express.Router();
const Package = require("../models/package.js");

router.get("/:id", async (req, res) => {
  const idToDelete = req.params.id;

  try {
    const deletedData = await Package.findByIdAndDelete(idToDelete);

    if (deletedData) {
      res.redirect(`/management`);
    } else {
      res.status(404).json({ message: "Document not found in MongoDB" });
    }
  } catch (error) {
    console.error("Error deleting document from MongoDB:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
