<template>
  <body>
    <form id="page2" @submit.prevent="createCharacter()">
      <div>
        <h1>Skill Point Allocation</h1>
      </div>
      <div class="table-header">
        <h2>
          Max Ranks (Class Skill): {{ $root.$data.newCharacter.level + 3 }}
        </h2>
        <h2>
          Max Ranks (Cross-Class Skill):
          {{ ($root.$data.newCharacter.level + 3) / 2 }}
        </h2>
      </div>
      <table class="skillallocation">
        <thead>
          <tr>
            <th rowspan="2" class="class-skill">
              <div>class skill ?</div>
            </th>
            <th colspan="3" id="points-remaining">
              Points Remaining: {{ pointsRemaining }}
            </th>
          </tr>
          <tr>
            <th>Skill Name</th>
            <th>Bonus</th>
            <th>Ranks</th>
          </tr>
        </thead>
        <tr v-for="skill in skills" :key="skill.name">
          <td v-if="isClassSkill(skill)">
            &#9724;
          </td>
          <td v-else>&#9723;</td>
          <td>{{ skill.name }}</td>
          <td>
            <p>
              {{
                abilityModifier(
                  $root.$data.newCharacter.abilities[skill.ability]
                ) +
                  $root.$data.newCharacter.skills[skill.name.replace(/ /g, "_")]
              }}
            </p>
          </td>
          <td>
            <input
              type="number"
              min="0"
              :id="skill"
              :max="[
                isClassSkill(skill)
                  ? $root.$data.newCharacter.level + 3
                  : ($root.$data.newCharacter.level + 3) / 2
              ]"
              v-model.number="
                $root.$data.newCharacter.skills[skill.name.replace(/ /g, '_')]
              "
            />
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border-right: 1px solid black;">
            <p id="error" v-if="extraPoints">Too Many Points Spent</p>
            <button type="submit" style="width: 100%; margin: 1em 0;">
              Complete Character
              <img src="@/assets/PersonPlus.svg" />
            </button>
          </td>
        </tr>
      </table>

      <div style="height: 3em;"></div>
    </form>
  </body>
</template>

<script>
export default {
  name: "CharacterCreation2",
  data: () => {
    return {
      extraPoints: false
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
    },
    pointsRemaining() {
      let totalSpent = 0;
      Array.prototype.forEach.call(this.skills, skill => {
        if (this.isClassSkill(skill)) {
          totalSpent += this.$root.$data.newCharacter.skills[
            skill.name.replace(/ /g, "_")
          ];
        } else
          totalSpent +=
            2 *
            this.$root.$data.newCharacter.skills[skill.name.replace(/ /g, "_")];
      });
      return (
        (this.classes[this.$root.$data.newCharacter.class].skill_points +
          this.abilityModifier(this.$root.$data.newCharacter.abilities.int)) *
          (this.$root.$data.newCharacter.level + 3) -
        totalSpent
      );
    }
  },
  methods: {
    abilityModifier(ability) {
      return Math.floor((ability - 10) / 2);
    },
    createCharacter() {
      if (this.pointsRemaining >= 0) {
        this.$root.$data.characters.push(this.$root.$data.newCharacter);
        this.$router.push(
          "/Character-Sheet/" + this.$root.$data.newCharacter.name
        );
        return;
      } else {
        this.extraPoints = true;
        return;
      }
    },
    isClassSkill(skill) {
      return (
        this.classes[this.$root.$data.newCharacter.class].skills.findIndex(
          classSkill => {
            return classSkill == skill.name;
          }
        ) >= 0
      );
    }
  },
  created() {
    if (this.$root.$data.newCharacter.name == undefined) {
      this.$root.$data.newCharacter = {
        name: "TEST",
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
    }
  }
};
</script>

<style scoped>
#error {
  color: red;
  font-variant: small-caps;
  margin: 0;
  padding: 0;
}
body {
  background-color: lightgray;
  text-align: center;
  height: fit-content;
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
form h2 {
  padding-left: 1rem;
  padding-right: 1rem;
  display: inline-block;
  font-size: inherit;
  font-weight: normal;
  color: white;
}
form .page2 {
  width: 100vw;
}
form .table-header {
  margin: 0 auto;
  width: 100%;
  background-color: var(--accent-color);
}
th {
  top: 0;
  color: white;
  background-color: var(--accent-color);
  border-bottom: 1px solid black;
}
#points-remaining {
  top: 0;
  border-top: 1px groove black;
  border-right: 1px groove black;
  border-left: 1px groove black;
}
form .skillallocation {
  background-color: whitesmoke;
  border-collapse: separate;
  border-spacing: 0;
  width: fit-content;
  margin: 26px auto 0 auto;
  border-bottom: 1px groove black;
}
form .skillallocation .class-skill {
  background-color: var(--accent-color);
  font-size: smaller;
  padding: 0.5em 0;
  top: 0;
}
form .skillallocation td:nth-child(2) {
  padding: 0 2.5em;
}
form .skillallocation td:nth-child(3) {
  padding-left: 1.25em;
  padding-right: 1.25em;
}
form .skillallocation td:last-child {
  padding-left: 1.25em;
  padding-right: 1.25em;
}
form td,
form th {
  padding-left: 0.5em;
  padding-right: 0.5em;
  white-space: nowrap;
}
form td:first-child,
form th:first-child {
  border-left: 1px groove black;
}
form td:nth-child(2),
form th:nth-child(2) {
  border-right: 1px groove black;
}
form td p {
  border-bottom: 1px groove black;
  margin: 0;
  height: 1.5em;
  width: 3em;
}
form td:nth-child(4),
form th:nth-child(4) {
  border-right: 1px groove black;
}
form .skillallocation input {
  width: 3em;
}
form .skillallocation #submit {
  margin: 0.5em 0;
  padding: 0.5em 0;
  width: 100%;
  background-color: var(--accent-color);
  color: white;
}
table {
  margin-bottom: 5em;
}
</style>
