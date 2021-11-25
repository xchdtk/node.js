const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
