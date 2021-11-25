const express = require("express");
const multer = require("multer");
const path = require("path");
const { Board } = require("../models/board");
const router = express.Router();


var upload = multer({ dest: 'uploads/' });

router.post("/write", upload.single("image"), async (req, res, next) => {
  const idx = 1;
  const image = `${req.file.filename}`;
  console.log(req.file)
  const board = new Board({
    idx: 1,
    image: image
  })
  try {
    await board.save();
    res.render("index", { image: board.image });
  } catch (err) {
    console.log(err)
    res.status(400).send({"err" : err});
  }
});

module.exports = router;

