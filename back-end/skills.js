const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Skills
//

const User = users.model;
const validUser = users.valid;

//Define skill
const skillSchema = new mongoose.Schema({
  name: String,
  ability: String,
  armorCheck: Boolean,
  untrained: Boolean
  });

const Skill = mongoose.model('Skill', skillSchema);

// get all skills
router.get('/', validUser, async (req, res) => {
    try {
      let skills = await Skill.find().sort({
        name: -1
      });
      return res.send({
        skills: skills
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

// Get one skill
router.get('/:id', validUser, async (req, res) => {
    try {
      let skill = await Skill.findOne({
        _id: req.params.id
      });
      return res.send({
        skill: skill
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // create a skill
router.post('/', validUser, async (req, res) => {
    if (req.user.role !== "GM") {
      return res.sendStatus(403);
    }
    const skill = new Skill({
      name: req.body.name,
      ability: req.body.ability,
      armorCheck: req.body.armorCheck,
      untrained: req.body.untrained
    });
    try {
      await skill.save();
      return res.send({
        skill: skill
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // edit a skill
router.put('/:id', validUser, async (req, res) => {
    // can only do this if a game master
    if (req.user.role !== "GM") {
      return res.sendStatus(403);
    }
    if (!req.body.name || !req.body.size || !req.body.speed) {
      return res.status(400).send({
        message: "all fields are required"
      });
    }
    try {
      skill = await Skill.findOne({
        _id: req.params.id
      });
      skill.name = req.body.name,
      skill.ability = req.body.ability,
      skill.armorCheck = req.body.armorCheck,
      skill.untrained = req.body.untrained
      await skill.save();
      return res.send({
        skill: skill
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
      await Skill.deleteOne({
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
    model: Skill
  }