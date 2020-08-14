const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Class
//

const User = users.model;
const validUser = users.valid;

//Define charaClass
const charaClassSchema = new mongoose.Schema({
    name: String,
    skills: Array,
    skill_points: Number,
    saves: {
      fort: Boolean,
      ref: Boolean,
      will: Boolean
    },
    attack: Number,
    hd: Number
  });

const CharaClass = mongoose.model('CharaClass', charaClassSchema);

// get classes -- will list classes
router.get('/', validUser, async (req, res) => {
    try {
      let charaClasses = await CharaClass.find().sort({
        name: -1
      });
      return res.send({
        charaClasses: charaClasses
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // get class
router.get('/:id', validUser, async (req, res) => {
  try {
    let charaClass = await CharaClass.findOne({
      _id: req.params.id
    });
    return res.send({
      charaClass: charaClass
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

  // create a class
router.post('/', validUser, async (req, res) => {
    if (req.user.role !== "GM") {
      return res.sendStatus(403);
    }
    const charaClass = new CharaClass({
      name: req.body.name,
      skills: req.body.skills,
      skill_points: req.body.skill_points,
      saves: req.body.saves,
      attack: req.body.attack,
      hd: req.body.hd
    });
    try {
      await charaClass.save();
      return res.send({
        charaClass: charaClass
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // edit a charaClass -- only edits status and response
router.put('/:id', validUser, async (req, res) => {
    // can only do this if a game master
    if (req.user.role !== "GM") {
      return res.sendStatus(403);
    }
    if (!req.body.name || !req.body.skills || !req.body.skill_pointss || !req.body.saves || !req.body.attacks || !req.body.hd) {
      return res.status(400).send({
        message: "all fields are required"
      });
    }
    try {
      charaClass = await CharaClass.findOne({
        _id: req.params.id
      });
      charaClass.name = req.body.name,
      charaClass.skills = req.body.skills,
      charaClass.skill_points = req.body.skill_points,
      charaClass.saves = req.body.saves,
      charaClass.attack = req.body.attack,
      charaClass.hd = req.body.hd
      await charaClass.save();
      return res.send({
        charaClass: charaClass
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  router.delete('/:id', validUser, async (req, res) => {
    // can only do this if a game master
    if (req.user.role !== "GM") {
      return res.sendStatus(403);
    }
    try {
      await CharaClass.deleteOne({
        _id: req.params.id
      });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  module.exports = {
    routes: router,
    model: CharaClass
  }