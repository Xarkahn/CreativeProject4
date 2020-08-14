let charaClasses = [
    {"name": "barbarian", "skills": [ "Acrobatics", "Athletics", "Craft", "Handle Animal", "Intimidate", "Perception", "Ride", "Stealth", "Survival" ], "skill_points": 4, "saves": { "fort": true, "ref": false, "will": false }, "attack": 1, "hd": 12 },
    { "name": "bard", "skills": [ "Acrobatics", "Athletics", "Bluff", "Concentration", "Craft", "Diplomacy", "Disguise", "Handle Animal", "Knowledge", "Linguistics", "Perception", "Perform", "Profession", "Sense Motive", "Sleight of Hand", "Spellcraft", "Stealth", "Use Magic Device" ], "skill_points": 6, "saves": { "fort": false, "ref": true, "will": true }, "attack": 3 / 4, "hd": 6 },
    { "name": "cleric", "skills": [ "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge", "Profession", "Sense Motive", "Spellcraft" ], "skill_points": 2, "saves":  { "fort": true, "ref": false, "will": true }, "attack": 3 / 4, "hd": 8 },
    { "name": "druid", "skills": [ "Athletics", "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge", "Perception", "Profession", "Ride", "Spellcraft", "Survival", "Stealth" ], "skill_points": 4, "saves":  { "fort": true, "ref": false, "will": true }, "attack": 3 / 4, "hd": 8 },
    { "name": "fighter", "skills": [ "Athletics", "Craft", "Handle Animal", "Intimidate", "Perception", "Ride" ], "skill_points": 2, "saves": { "fort": true, "ref": false, "will": false }, "attack": 1, "hd": 10 },
    { "name": "monk", "skills": [ "Acrobatics", "Athletics", "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge", "Perception", "Perform", "Profession", "Sense Motive", "Stealth" ], "skill_points": 4, "saves":  { "fort": true, "ref": true, "will": true }, "attack": 3 / 4, "hd": 8 },
    { "name": "paladin", "skills": [ "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge", "Profession", "Ride", "Sense Motive" ], "skill_points": 4, "saves": { "fort": true, "ref": false, "will": false }, "attack": 1, "hd": 10 },
    { "name": "ranger", "skills": [ "Athletics", "Concentration", "Craft", "Handle Animal", "Heal", "Knowledge", "Perception", "Profession", "Ride", "Spellcraft", "Survival", "Stealth" ], "skill_points": 6, "saves": { "fort": true, "ref": true, "will": false }, "attack": 1, "hd": 8 },
    { "name": "rogue", "skills": [ "Acrobatics", "Athletics", "Bluff", "Craft", "Diplomacy", "Disable Device", "Disguise", "Knowledge", "Linguistics", "Lockpicking", "Perception", "Perform", "Profession", "Sense Motive", "Sleight of Hand", "Spellcraft", "Stealth", "Use Magic Device" ], "skill_points": 8, "saves": { "fort": false, "ref": true, "will": false }, "attack": 3 / 4, "hd": 6 },
    { "name": "sorcerer", "skills": [ "Bluff", "Concentration", "Craft", "Knowledge", "Profession", "Spellcraft" ], "skill_points": 2, "saves":  { "fort": false, "ref": false, "will": true }, "attack": 1 / 2, "hd": 4 },
    { "name": "wizard", "skills": [ "Concentration", "Craft", "Knowledge", "Linguistics", "Profession", "Spellcraft", "Use Magic Device" ], "skill_points": 2, "saves":  { "fort": false, "ref": false, "will": true }, "attack": 1 / 2, "hd": 4 }
]

let skills = [
    { name: "acrobatics", ability: "dex", armorCheck: true, untrained: false },
    { name: "athletics", ability: "str", armorCheck: true, untrained: true },
    { name: "bluff", ability: "cha", armorCheck: false, untrained: true },
    { name: "craft", ability: "int", armorCheck: false, untrained: true },
    { name: "concentration", ability: "con", armorCheck: false, untrained: true },
    { name: "disable device", ability: "dex", armorCheck: true, untrained: false },
    { name: "disguise", ability: "cha", armorCheck: false, untrained: true },
    { name: "handle animal", ability: "wis", armorCheck: false, untrained: false },
    { name: "heal", ability: "wis", armorCheck: false, untrained: true },
    { name: "intimidate", ability: "cha", armorCheck: false, untrained: true },
    { name: "knowledge", ability: "int", armorCheck: false, untrained: false },
    { name: "linguistics", ability: "int", armorCheck: false, untrained: true },
    { name: "lockpicking", ability: "dex", armorCheck: true, untrained: true },
    { name: "perception", ability: "wis", armorCheck: false, untrained: true },
    { name: "perform", ability: "cha", armorCheck: false, untrained: false },
    { name: "persuade", ability: "cha", armorCheck: false, untrained: true },
    { name: "profession", ability: "wis", armorCheck: false, untrained: false },
    { name: "ride", ability: "dex", armorCheck: true, untrained: true },
    { name: "sense motive", ability: "wis", armorCheck: false, untrained: true },
    { name: "sleight of hand", ability: "dex", armorCheck: true, untrained: false },
    { name: "spellcraft", ability: "int", armorCheck: false, untrained: false },
    { name: "stealth", ability: "dex", armorCheck: true, untrained: true },
    { name: "survival", ability: "wis", armorCheck: false, untrained: true },
    { name: "use magic device", ability: "int", armorCheck: true, untrained: false }
  ]

  let species = [
      {
        name: "human",
        size: "medium",
        speed: 30
      },
      {
        name: "dwarf",
        size: "medium",
        speed: 20
      },
      {
        name: "elf",
        size: "medium",
        speed: 30
      },
      {
        name: "gnome",
        size: "small",
        speed: 20
      },
      {
        name: "half elf",
        size: "medium",
        speed: 30
      },
      {
        name: "half orc",
        size: "medium",
        speed: 30
      },
      {
        name: "halfling",
        size: "small",
        speed: 20
      }
  ]

  const express = require('express');
  const bodyParser = require("body-parser");
  
  // setup express
  const app = express();
  
  // setup body parser middleware to convert to JSON and handle URL encoded forms
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  const mongoose = require('mongoose');
  const cl = require("./charaClasses.js");
  const sk = require("./skills.js");
  const sp = require("./species.js");

  const CharaClass = cl.model;
  const Skill = sk.model;
  const Species = sp.model;
  
  mongoose.connect('mongodb://localhost:27017/d20', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

async function addClasses() {
      for (charaClass of charaClasses) {
        const exists =  await CharaClass.findOne({ name: charaClass.name }) 
        if (!exists) {
        const newCharaClass = new CharaClass({
            name: charaClass.name,
            skills: charaClass.skills,
            skill_points: charaClass.skill_points,
            saves: charaClass.saves,
            attack: charaClass.attack,
            hd: charaClass.hd
          });
          console.log("Adding class", newCharaClass.name);
          await newCharaClass.save();
        }}
        return;
  };

  async function addSkills() {
    for (theSkill of skills) {
        const exists =  await Skill.findOne({ name: theSkill.name }) 
        if (!exists) {
    const skill = new Skill({
      name: theSkill.name,
      ability: theSkill.ability,
      armorCheck: theSkill.armorCheck,
      untrained: theSkill.untrained
    });
    console.log("Adding skill", skill.name);
    await skill.save();
    }}
    return;
  };

    async function addSpecies() {
    for (theSpecies of species) {
        const exists =  await Species.findOne({ name: theSpecies.name });
        if (!exists) {
    const species = new Species({
      name: theSpecies.name,
      size: theSpecies.size,
      speed: theSpecies.speed
    });
    console.log("Adding species", species.name);
    await species.save();
    }}
    return;
  };

  (async () => {
    await addClasses()
    await addSkills()
    await addSpecies()
    await mongoose.connection.close()
    process.exit();
  })()