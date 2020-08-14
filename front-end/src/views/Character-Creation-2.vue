<template>
  <body>
    <form id="page2" @submit.prevent="createCharacter()">
      <div>
        <h1>Skill Point Allocation</h1>
      </div>
      <div class="table-header">
        <h2>
          Max Ranks (Class Skill): {{ newCharacter.level + 3 }}
        </h2>
        <h2>
          Max Ranks (Cross-Class Skill):
          {{ (newCharacter.level + 3) / 2 }}
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
        <tr v-for="(skill, index) of skills" :key="skill._id">
          <td v-if="isClassSkill(skill.name)">
            &#9724;
          </td>
          <td v-else>&#9723;</td>
          <td>{{ skill.name }}</td>
          <td>
            <p>
              {{
                abilityModifier(
                  newCharacter.abilities[skill.ability]
                ) +
                  newCharacter.skills[index].ranks
              }}
            </p>
          </td>
          <td>
            <input
              type="number"
              min="0"
              :id="skill.name"
              :max="[
                isClassSkill(skill.name)
                  ? newCharacter.level + 3
                  : (newCharacter.level + 3) / 2
              ]"
              v-model.number="
                newCharacter.skills[index].ranks
              "
            />
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border-right: 1px solid black;">
            <div id="error" v-if="extraPoints">Too Many Points Spent</div>
            <button type="submit" style="width: 100%; margin: 1em 0;">
              Complete Character
              <i class="fas fa-user-plus"></i>
            </button>
          </td>
        </tr>
      </table>

      <div style="height: 3em;"></div>
    </form>
  </body>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
export default {
  name: "CharacterCreation2",
  data() {
    return {
      newCharacter: {},
      skills: [],
      charaClass: []
    }
  },
  computed: {
    pointsRemaining() {
      let totalSpent = 0;
      let index = 0;
      Array.prototype.forEach.call(this.skills, skill => {
        if (this.isClassSkill(skill.name)) {
          totalSpent += this.newCharacter.skills[index].ranks;
        } else
          totalSpent +=
            2 *
            this.newCharacter.skills[index].ranks;
        index++;
      });
      return (
        (this.charaClass.skill_points +
          this.abilityModifier(this.newCharacter.abilities.int)) *
          (this.newCharacter.level + 3) -
        totalSpent
      );
    },
    extraPoints() {
      return this.pointsRemaining < 0;
    },
  },
  async created() {
    this.newCharacter = this.$route.params.newCharacter;
    await this.getClass();
    await this.getSkills();
    await this.initiateSkills();
    //This is just to make Vue notice the changes
    this.$forceUpdate();
  },
  methods: {
    abilityModifier(ability) {
      return Math.floor((ability - 10) / 2);
    },
    async createCharacter() {
      if (this.pointsRemaining >= 0) {
        await axios.post("/api/characters", {
          name: this.newCharacter.name,
          class: this.newCharacter.class,
          level: this.newCharacter.level,
          species: this.newCharacter.species,
          alignment1: this.newCharacter.alignment1,
          alignment2: this.newCharacter.alignment2,
          age: this.newCharacter.age,
          gender: this.newCharacter.gender,
          height: this.newCharacter.height,
          weight: this.newCharacter.weight,
          eyes: this.newCharacter.eyes,
          hair: this.newCharacter.hair,
          skin: this.newCharacter.skin,
          abilities: this.newCharacter.abilities,
          skills: this.newCharacter.skills
        })
        this.$router.push(
          "/Character-Sheet/" + this.newCharacter.name
        );
        return;
      }
    },
    isClassSkill(skill) {
      return (
        this.charaClass.skills.findIndex(
          classSkill => {
            return classSkill.toLowerCase() == skill.toLowerCase();
          }
        ) >= 0
      );
    },
    async getClass() {
      try {
        let response = await axios.get("/api/charaClasses/" + this.newCharacter.class._id);
        this.charaClass = response.data.charaClass;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getSkills() {
      try {
        let response = await axios.get("/api/skills");
        this.skills = response.data.skills.reverse();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    initiateSkills() {
      let newSkills = [];
      for (const skill of this.skills)
      {
        newSkills.push(
          {
            name: skill.name,
            ranks: 0,
            misc: 0
          }
        )
      }
      Vue.set(this.newCharacter, "skills", newSkills)
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
  text-transform: capitalize;
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
