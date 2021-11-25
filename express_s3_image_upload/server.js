const express = require("express");
const app = express();
// const board = require("./cotrollers/board");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use("/board", board);

// app.set("view engine", "ejs");
// app.set("views", "./views");

// const mongoose = require("mongoose");
// const connect = mongoose
//   .connect("mongodb://xchdtk12:xwlstn1234@localhost:27017/board", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));
app.use('/', require('./routes/upload'))
app.get("/", (req, res) => {
  res.render("write");
});
app.listen(3003, () => {
  console.log("server is running 3003");
});
