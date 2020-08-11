<template>
  <body>
    <form>
      <div>
        <h1>
          Basic Character Information
        </h1>
      </div>
      <div class="basic-info">
        <label
          ><span>Name</span
          ><input
            type="text"
            id="name"
            name="name"
            v-model="$root.$data.newCharacter.name"
        /></label>
        <label
          ><span>Species</span>
          <select
            id="species"
            name="species"
            v-model="$root.$data.newCharacter.species"
          >
            <option
              v-for="option in Object.keys(species)"
              :value="option"
              :key="option"
            >
              {{ option }}
            </option>
          </select>
        </label>
        <label
          ><span>Class</span>
          <select
            id="class"
            name="class"
            v-model="$root.$data.newCharacter.class"
          >
            <option
              v-for="option in Object.keys(classes)"
              :value="option"
              :key="option"
            >
              {{ option }}
            </option>
          </select>
        </label>
        <label
          ><span>Level</span
          ><input
            type="number"
            id="level"
            name="level"
            value="1"
            style="width: 3em;"
            v-model.number="$root.$data.newCharacter.level"
        /></label>
        <label
          ><span>Alignment</span>
          <select
            id="alignment1"
            name="alignment1"
            v-model="$root.$data.newCharacter.alignment1"
          >
            <option value="Lawful">Lawful</option>
            <option value="Neutral">Neutral</option>
            <option value="Chaotic">Chaotic</option>
          </select>
          <select
            id="alignment2"
            name="alignment2"
            v-model="$root.$data.newCharacter.alignment2"
          >
            <option value="Good">Good</option>
            <option value="Neutral">Neutral</option>
            <option value="Evil">Evil</option>
          </select>
        </label>
        <label
          ><span>Age</span
          ><input
            type="number"
            id="age"
            name="age"
            style="width: 5em;"
            v-model="$root.$data.newCharacter.age"
        /></label>
        <label
          ><span>Gender</span
          ><input
            type="text"
            id="gender"
            name="gender"
            v-model="$root.$data.newCharacter.gender"
        /></label>
        <label
          ><span>Height</span
          ><input
            type="text"
            id="height"
            name="height"
            v-model="$root.$data.newCharacter.height"
        /></label>
        <label
          ><span>Weight</span
          ><input
            type="text"
            id="weight"
            name="weight"
            v-model="$root.$data.newCharacter.weight"
        /></label>
        <label
          ><span>Eyes</span
          ><input
            type="text"
            id="eyes"
            name="eyes"
            v-model="$root.$data.newCharacter.eyes"
        /></label>
        <label
          ><span>Hair</span
          ><input
            type="text"
            id="hair"
            name="hair"
            v-model="$root.$data.newCharacter.hair"
        /></label>
        <label
          ><span>Skin</span
          ><input
            type="text"
            id="skin"
            name="skin"
            v-model="$root.$data.newCharacter.skin"
        /></label>
      </div>
      <div id="abilities-header">
        <h1 style="width: fit-content;">
          <img src="@/assets/Twenty_sided_dice.svg" />Abilities
        </h1>
      </div>
      <div class="abilities">
        <table>
          <caption
            style="caption-side: top; text-align: center; color: black; padding: 0"
          >
            Click and Drag to Rearrange
          </caption>
          <tr>
            <td>Strength</td>
            <td
              draggable="true"
              v-on:dragstart="dragItem('str')"
              v-on:drop="dropItem('str')"
              v-on:dragover.prevent
            >
              <div>
                {{ $root.$data.newCharacter.abilities.str
                }}<svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-grip-horizontal"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>Dexterity</td>
            <td
              draggable="true"
              v-on:dragstart="dragItem('dex')"
              v-on:drop="dropItem('dex')"
              v-on:dragover.prevent
            >
              <div>
                {{ $root.$data.newCharacter.abilities.dex
                }}<svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-grip-horizontal"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>Constitution</td>
            <td
              draggable="true"
              v-on:dragstart="dragItem('con')"
              v-on:drop="dropItem('con')"
              v-on:dragover.prevent
            >
              <div>
                {{ $root.$data.newCharacter.abilities.con
                }}<svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-grip-horizontal"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>Intelligence</td>
            <td
              draggable="true"
              v-on:dragstart="dragItem('int')"
              v-on:drop="dropItem('int')"
              v-on:dragover.prevent
            >
              <div>
                {{ $root.$data.newCharacter.abilities.int
                }}<svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-grip-horizontal"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>Wisdom</td>
            <td
              draggable="true"
              v-on:dragstart="dragItem('wis')"
              v-on:drop="dropItem('wis')"
              v-on:dragover.prevent
            >
              <div>
                {{ $root.$data.newCharacter.abilities.wis
                }}<svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-grip-horizontal"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>Charisma</td>
            <td
              draggable="true"
              v-on:dragstart="dragItem('cha')"
              v-on:drop="dropItem('cha')"
              v-on:dragover.prevent
            >
              <div>
                {{ $root.$data.newCharacter.abilities.cha
                }}<svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-grip-horizontal"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </table>

        <button type="button" id="reroll" @click.prevent="reroll()">
          Reroll<img src="@/assets/Dice_simple_flat.svg" />
        </button>
        <p class="error" v-if="extraRolls">No rerolls remaining</p>
        <p>Rerolls Remaining: {{ rollsRemaining }}</p>
        <p
          class="error"
          v-if="$root.$data.newCharacter.name.length == 0"
          style="max-width: 153px"
        >
          Enter a Name to Continue
        </p>
        <router-link
          v-if="$root.$data.newCharacter.name.length != 0"
          tag="button"
          to="/Character-Creation-2"
          style="margin-bottom: 2em;"
        >
          Continue
        </router-link>
      </div>
    </form>
  </body>
</template>

<script>
import Vue from "vue";
export default {
  name: "CharacterCreation1",
  created() {
    this.$root.$data.newCharacter = {
      name: "",
      class: "Barbarian",
      level: 1,
      species: "Human",
      alignment1: "Neutral",
      alignment2: "Neutral",
      age: "20",
      gender: "",
      height: ``,
      weight: "lb",
      eyes: "",
      hair: "",
      skin: "",
      abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
      skills: {
        Acrobatics: 0,
        Athletics: 0,
        Bluff: 0,
        Craft: 0,
        Concentration: 0,
        Disable_Device: 0,
        Diplomacy: 0,
        Disguise: 0,
        Handle_Animal: 0,
        Heal: 0,
        Intimidate: 0,
        Knowledge: 0,
        Linguistics: 0,
        Lockpicking: 0,
        Perception: 0,
        Perform: 0,
        Persuade: 0,
        Profession: 0,
        Ride: 0,
        Sense_Motive: 0,
        Sleight_of_Hand: 0,
        Spellcraft: 0,
        Stealth: 0,
        Survival: 0,
        Use_Magic_Device: 0
      }
    };
    this.rollAbilities();
  },
  data: () => {
    return {
      rollsRemaining: 5,
      extraRolls: false,
      drag: {}
    };
  },
  computed: {
    skills() {
      return this.$root.$data.skills;
    },
    classes() {
      return this.$root.$data.classes;
    },
    species() {
      return this.$root.$data.species;
    }
  },
  methods: {
    rollAbilities() {
      Object.keys(this.$root.$data.newCharacter.abilities).forEach(ability => {
        let rolls = [];
        for (let i = 0; i < 4; i++) {
          let roll = Math.round(Math.random() * 5 + 1);
          rolls.push(roll);
        }
        rolls.sort((roll1, roll2) => {
          return roll1 - roll2;
        });
        let total = rolls.pop();
        total += rolls.pop();
        total += rolls.pop();
        this.$root.$data.newCharacter.abilities[ability] = total;
      });
      return;
    },
    reroll() {
      if (this.rollsRemaining <= 0) {
        this.extraRolls = true;
        return;
      } else {
        this.rollAbilities();
        this.rollsRemaining--;
        return;
      }
    },
    //These may not trigger on mobile. Trying to implement jquery touch punch
    dragItem(ability) {
      this.drag = ability;
    },
    dropItem(ability) {
      const fromValue = this.$root.$data.newCharacter.abilities[this.drag];
      const toValue = this.$root.$data.newCharacter.abilities[ability];
      Vue.set(this.$root.$data.newCharacter.abilities, ability, fromValue);
      Vue.set(this.$root.$data.newCharacter.abilities, this.drag, toValue);
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-variant: small-caps;
  margin: 0;
  padding: 0;
}
body {
  background-color: lightgray;
  text-align: center;
  min-height: 100vh;
}
button {
  border-radius: 0;
  width: 100%;
}
form {
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  margin: 0 auto 0 auto;
  min-width: 366px;
  max-width: 1024px;
}
form h1 {
  background-color: var(--accent-color);
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  color: white;
  margin: 0 auto;
  position: relative;
}
form h1 img {
  position: absolute;
  vertical-align: middle;
  left: -3em;
  top: 10px;
  max-height: 1.5em;
  margin: auto 1em;
}
form h2 {
  padding-left: 1rem;
  padding-right: 1rem;
  display: inline-block;
  font-size: inherit;
  font-weight: normal;
  color: white;
}
form .cell {
  margin-left: 1em;
  min-width: 3em;
  min-height: 1.5em;
  display: block;
  border: 1px groove black;
}
input[type="submit"] {
  display: block;
  align-self: center;
  margin-top: 1em;
  padding: 0.5em;
  background-color: var(--accent-color);
  color: white;
  width: 10em;
}
button {
  background-color: var(--accent-color);
  color: white;
  padding: 0.5em;
  font-size: larger;
}
button img {
  height: 1.5em;
  width: 1.5;
  margin-left: 1em;
  color: white;
}
form .basic-info {
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
form .basic-info label {
  display: flex;
}
form .basic-info span {
  width: 5em;
  display: inline-block;
}
#abilities-header {
  background-color: var(--accent-color);
  width: 100%;
  position: relative;
}
form .abilities {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 1em auto;
}
form .abilities tr,
form .abilities td {
  border: 1px groove black;
}
form .abilities td {
  width: 3em;
}
td[draggable="true"]:hover {
  cursor: grab;
}
td[draggable="true"]:-moz-drag-over {
  cursor: grabbing;
}
td[draggable="true"] {
  position: relative;
}
td[draggable="true"] div {
  position: relative;
  display: block;
}
td[draggable="true"] div svg {
  display: block;
  position: absolute;
  right: -5px;
  top: 4px;
  margin: 0;
  padding: 0;
}
</style>
