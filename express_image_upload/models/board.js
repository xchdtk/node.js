const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  idx: {
    type: Number,
    required: true,
  },
  image: {
    type: String
  }
});

const Board = mongoose.model("Board", boardSchema);

module.exports = { Board };
