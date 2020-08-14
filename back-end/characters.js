const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Characters
//

const User = users.model;
const validUser = users.valid;

//Define character
const characterSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    name: String,
    class: Object,
    level: Number,
    species: Object,
    alignment1: String,
    alignment2: String,
    age: Number,
    gender: String,
    height: String,
    weight: String,
    eyes: String,
    hair: String,
    skin: String,
    abilities: { str: Number, dex: Number, con: Number, int: Number, wis: Number, cha: Number },
    skills: Array,
    created: {
      type: Date,
      default: Date.now
    }
  });

const Character = mongoose.model('Character', characterSchema);

// get all character
router.get('/', validUser, async (req, res) => {
  let characters = [];
  try {
    if (req.user.role === "GM") {
      characters = await Character.find().sort({
        created: -1
      });
    } else {
      characters = await Character.find({
        user: req.user
      }).sort({
        created: -1
      });
    }
    return res.send({
      characters: characters
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
  });

// Get one character
router.get('/:name', validUser, async (req, res) => {
    try {
      let character = await Character.findOne({
        name: req.params.name
      });
      if (req.user.role !== "GM" && character.user !== req.user){
        return res.sendStatus(403);
      }
      return res.send({
        character: character
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // create a character
router.post('/', validUser, async (req, res) => {
    const character = new Character({
      user: req.user,
      name: req.body.name,
      class: req.body.class,
      level: req.body.level,
      species: req.body.species,
      alignment1: req.body.alignment1,
      alignment2: req.body.alignment2,
      age: req.body.age,
      gender: req.body.gender,
      height: req.body.height,
      weight: req.body.weight,
      eyes: req.body.eyes,
      hair: req.body.hair,
      skin: req.body.skin,
      abilities: req.body.abilities,
      skills: req.body.skills
    });
    try {
      await character.save();
      return res.send({
        character: character
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // edit a character
router.put('/:id', validUser, async (req, res) => {
    try {
      character = await Character.findOne({
        _id: req.params.id
      });
      if (req.user.role !== "GM" && character.user !== req.user){
        return res.sendStatus(403);
      }
      character.name = req.body.name,
      character.class = req.body.class,
      character.level = req.body.level,
      character.species = req.body.species,
      character.alignment1 = req.body.alignment1,
      character.alignment2 = req.body.alignment2,
      character.age = req.body.age,
      character.gender = req.body.gender,
      character.height = req.body.height,
      character.weight = req.body.weight,
      character.eyes = req.body.eyes,
      character.hair = req.body.hair,
      character.skin = req.body.skin,
      character.abilities = req.body.abilities,
      character.skills = req.body.skills
      await character.save();
      return res.send({
        character: character
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  router.delete('/:id', validUser, async (req, res) => {
    // can only do this if a game master or character owner
    if (req.user.role !== "GM" && character.user !== req.user){
      return res.sendStatus(403);
    }
    try {
      await Character.deleteOne({
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
    model: Character
  }