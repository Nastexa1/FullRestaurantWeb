const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL ama path file
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Menu", MenuSchema);
