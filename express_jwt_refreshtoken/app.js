const express = require('express');
const app = express();
const mongodb_connect = require('./models/index');
mongodb_connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(3000);
console.log("3000 port server is running");