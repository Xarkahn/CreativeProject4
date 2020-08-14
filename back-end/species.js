const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Species
//

const User = users.model;
const validUser = users.valid;

//Define species
const speciesSchema = new mongoose.Schema({
    name: String,
    size: String,
    speed: Number
  });

const Species = mongoose.model('Species', speciesSchema);

// get all species
router.get('/', validUser, async (req, res) => {
    try {
      let species = await Species.find().sort({
        name: -1
      });
      return res.send({
        species: species
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

// Get one species
router.get('/:id', validUser, async (req, res) => {
    try {
      let species = await Species.findOne({
        _id: req.params.id
      });
      return res.send({
        species: species
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // create a species
router.post('/', validUser, async (req, res) => {
    if (req.user.role !== "GM") {
      return res.sendStatus(403);
    }
    const species = new Species({
      name: req.body.name,
      size: req.body.size,
      speed: req.body.speed
    });
    try {
      await species.save();
      return res.send({
        species: species
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // edit a species
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
      species = await Species.findOne({
        _id: req.params.id
      });
      species.name = req.body.name,
      species.size = req.body.size,
      species.speed = req.body.speed,
      await species.save();
      return res.send({
        species: species
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
      await Species.deleteOne({
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
    model: Species
  }