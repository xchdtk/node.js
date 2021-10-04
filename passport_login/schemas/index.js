const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://xchdtk:xwlstn12@localhost:27017/admin", {
      useNewUrlParser: true,
    }).then(() => console.log('mongodb connected...'))
    .catch((err) => console.log(err));
};

module.exports = connect;