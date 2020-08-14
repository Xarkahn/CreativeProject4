const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to convert to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/d20', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['secretValue'],
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// import the modules and setup their API paths
const users = require("./users.js");
app.use("/api/users", users.routes);

const characters = require("./characters.js");
app.use("/api/characters", characters.routes);

const skills = require("./skills.js");
app.use("/api/skills", skills.routes);

const species = require("./species.js");
app.use("/api/species", species.routes);

const charaClasses = require("./charaClasses.js");
app.use("/api/charaClasses", charaClasses.routes);

// listen on port 3000
app.listen(3000, () => console.log('Server listening on port 3000!'));