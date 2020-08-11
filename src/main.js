import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let data = {
  characters: [
    {
      name: "Grognak",
      class: "Barbarian",
      level: 20,
      species: "Human",
      alignment1: "Chaotic",
      alignment2: "Good",
      age: 34,
      gender: "Male",
      height: `6'2"`,
      weight: "230 lb",
      eyes: "Brown",
      hair: "Blonde",
      skin: "Pale",
      abilities: { str: 20, dex: 16, con: 18, int: 9, wis: 12, cha: 14 },
      skills: {
        Acrobatics: 10,
        Athletics: 10,
        Bluff: 0,
        Craft: 0,
        Concentration: 0,
        Disable_Device: 0,
        Diplomacy: 0,
        Disguise: 0,
        Handle_Animal: 0,
        Heal: 3.5,
        Intimidate: 10,
        Knowledge: 0,
        Linguistics: 0,
        Lockpicking: 0,
        Perception: 0,
        Perform: 0,
        Persuade: 0,
        Profession: 0,
        Ride: 10,
        Sense_Motive: 0,
        Sleight_of_Hand: 0,
        Spellcraft: 0,
        Stealth: 10,
        Survival: 10,
        Use_Magic_Device: 0
      },
      attacks: [
        {
          name: "Greataxe",
          attackBonus: "str",
          baseDamage: "1d12",
          dmgBonus: "str",
          crit: "x3",
          type: "Slashing"
        },
        {
          name: "Unarmed",
          attackBonus: "str",
          baseDamage: "1d3",
          dmgBonus: "str",
          crit: "x2",
          type: "Bludgeoning"
        },
        {
          name: "Sling",
          attackBonus: "dex",
          baseDamage: "",
          dmgBonus: "str",
          crit: "",
          type: "Bludgeoning",
          range: "",
          ammunition: 50
        }
      ]
    }
  ],
  newCharacter: {},
  classes: {
    Barbarian: {
      skills: [
        "Acrobatics",
        "Athletics",
        "Craft",
        "Handle Animal",
        "Intimidate",
        "Perception",
        "Ride",
        "Stealth",
        "Survival"
      ],
      skill_points: 4,
      saves: ["Fort"],
      attack: 1,
      hd: 12
    },
    Bard: {
      skills: [
        "Acrobatics",
        "Athletics",
        "Bluff",
        "Concentration",
        "Craft",
        "Diplomacy",
        "Disguise",
        "Handle Animal",
        "Knowledge",
        "Linguistics",
        "Perception",
        "Perform",
        "Profession",
        "Sense Motive",
        "Sleight of Hand",
        "Spellcraft",
        "Stealth",
        "Use Magic Device"
      ],
      skill_points: 6,
      saves: ["Ref", "Will"],
      attack: 3 / 4,
      hd: 6
    },
    Cleric: {
      skills: [
        "Concentration",
        "Craft",
        "Diplomacy",
        "Heal",
        "Knowledge",
        "Profession",
        "Sense Motive",
        "Spellcraft"
      ],
      skill_points: 2,
      saves: ["Fort", "Will"],
      attack: 3 / 4,
      hd: 8
    },
    Druid: {
      skills: [
        "Athletics",
        "Concentration",
        "Craft",
        "Diplomacy",
        "Handle Animal",
        "Heal",
        "Knowledge",
        "Perception",
        "Profession",
        "Ride",
        "Spellcraft",
        "Survival",
        "Stealth"
      ],
      skill_points: 4,
      saves: ["Fort", "Will"],
      attack: 3 / 4,
      hd: 8
    },
    Fighter: {
      skills: [
        "Athletics",
        "Craft",
        "Handle Animal",
        "Intimidate",
        "Perception",
        "Ride"
      ],
      skill_points: 2,
      saves: ["Fort"],
      attack: 1,
      hd: 10
    },
    Monk: {
      skills: [
        "Acrobatics",
        "Athletics",
        "Concentration",
        "Craft",
        "Diplomacy",
        "Heal",
        "Knowledge",
        "Perception",
        "Perform",
        "Profession",
        "Sense Motive",
        "Stealth"
      ],
      skill_points: 4,
      saves: ["Fort", "Ref", "Will"],
      attack: 3 / 4,
      hd: 8
    },
    Paladin: {
      skills: [
        "Concentration",
        "Craft",
        "Diplomacy",
        "Handle Animal",
        "Heal",
        "Knowledge",
        "Profession",
        "Ride",
        "Sense Motive"
      ],
      skill_points: 4,
      saves: ["Fort"],
      attack: 1,
      hd: 10
    },
    Ranger: {
      skills: [
        "Athletics",
        "Concentration",
        "Craft",
        "Handle Animal",
        "Heal",
        "Knowledge",
        "Perception",
        "Profession",
        "Ride",
        "Spellcraft",
        "Survival",
        "Stealth"
      ],
      skill_points: 6,
      saves: ["Fort", "Ref"],
      attack: 1,
      hd: 8
    },
    Rogue: {
      skills: [
        "Acrobatics",
        "Athletics",
        "Bluff",
        "Craft",
        "Diplomacy",
        "Disable Device",
        "Disguise",
        "Knowledge",
        "Linguistics",
        "Lockpicking",
        "Perception",
        "Perform",
        "Profession",
        "Sense Motive",
        "Sleight of Hand",
        "Spellcraft",
        "Stealth",
        "Use Magic Device"
      ],
      skill_points: 8,
      saves: ["Ref"],
      attack: 3 / 4,
      hd: 6
    },
    Sorcerer: {
      skills: [
        "Bluff",
        "Concentration",
        "Craft",
        "Knowledge",
        "Profession",
        "Spellcraft"
      ],
      skill_points: 2,
      saves: ["Will"],
      attack: 1 / 2,
      hd: 4
    },
    Wizard: {
      skills: [
        "Concentration",
        "Craft",
        "Knowledge",
        "Linguistics",
        "Profession",
        "Spellcraft",
        "Use Magic Device"
      ],
      skill_points: 2,
      saves: ["Will"],
      attack: 1 / 2,
      hd: 4
    }
  },
  species: {
    Human: {
      size: "medium",
      speed: 30
    },
    Dwarf: {
      size: "medium",
      speed: 20
    },
    Elf: {
      size: "medium",
      speed: 30
    },
    Gnome: {
      size: "small",
      speed: 20
    },
    Half_Elf: {
      size: "medium",
      speed: 30
    },
    Half_Orc: {
      size: "medium",
      speed: 30
    },
    Halfling: {
      size: "small",
      speed: 20
    }
  },
  skills: [
    { name: "Acrobatics", ability: "dex", armorCheck: true },
    { name: "Athletics", ability: "str", armorCheck: true },
    { name: "Bluff", ability: "cha", armorCheck: false },
    { name: "Craft", ability: "int", armorCheck: false },
    { name: "Concentration", ability: "con", armorCheck: false },
    { name: "Diplomacy", ability: "cha", armorCheck: false },
    { name: "Disable Device", ability: "dex", armorCheck: true },
    { name: "Disguise", ability: "cha", armorCheck: false },
    { name: "Handle Animal", ability: "wis", armorCheck: false },
    { name: "Heal", ability: "wis", armorCheck: false },
    { name: "Intimidate", ability: "cha", armorCheck: false },
    { name: "Knowledge", ability: "int", armorCheck: false },
    { name: "Linguistics", ability: "int", armorCheck: false },
    { name: "Lockpicking", ability: "dex", armorCheck: true },
    { name: "Perception", ability: "wis", armorCheck: false },
    { name: "Perform", ability: "cha", armorCheck: false },
    { name: "Persuade", ability: "cha", armorCheck: false },
    { name: "Profession", ability: "wis", armorCheck: false },
    { name: "Ride", ability: "dex", armorCheck: true },
    { name: "Sense Motive", ability: "wis", armorCheck: false },
    { name: "Sleight of Hand", ability: "dex", armorCheck: true },
    { name: "Spellcraft", ability: "int", armorCheck: false },
    { name: "Stealth", ability: "dex", armorCheck: true },
    { name: "Survival", ability: "wis", armorCheck: false },
    { name: "Use Magic Device", ability: "int", armorCheck: true }
  ]
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
