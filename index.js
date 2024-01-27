const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key')
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// x-www 형태의 데이터를 가져올 수 있게 하기 위한 것
app.use(bodyParser.urlencoded({extended: true}))
// json 형태의 데이터를 가져올 수 있게 하기 위한 것

app.use(bodyParser.json())
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  // req.body를 사용하기 위해서는 bodyparser가 필요함
  const user = new User(req.body)
  // User 모델에 저장시키기
  user.save((err, doc) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({success: true})
  })
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});