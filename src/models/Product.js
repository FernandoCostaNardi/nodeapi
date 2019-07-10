const mogoose = require("mongoose");

const ProductSchema = new mogoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

mogoose.model("Product", ProductSchema);
