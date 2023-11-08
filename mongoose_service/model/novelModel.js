const mongoose = require("mongoose");

let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  is_hot: Boolean,
});
let bookModel = mongoose.model("Novel", BookSchema);

module.exports = bookModel;
