const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  { collection: "packages" }
);

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;
