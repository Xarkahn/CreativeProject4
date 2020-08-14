const reader = require("readline-sync");
const mongoose = require('mongoose');
const users = require("./users.js");

const User = users.model;

// connect to Mongo
mongoose.connect('mongodb://localhost:27017/d20', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


// get the needed info
let username = reader.question("Username: ");
const password = reader.question("Password: ", {
  hideEchoBack: true
});

if (username === "" || password === "") {
  console.log("Please enter a username and password");
  process.exit();
}

User.findOne({
  username: username
}).then((user) => {
  if (user) {
    console.log("That username is already in use");
    process.exit();
  }
}).then(() => {
  let user = new User({
    username: username,
    password: password,
    role: "GM"
  });
  user.save().then(() => {
    console.log("Game Master account created with username", username);
    process.exit();
  });
}).catch(error => {
  console.log(error);
});