const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;


mongoose.connect('mongodb+srv://joshuacho:joshua2003@boilerplate3.jbftbys.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});