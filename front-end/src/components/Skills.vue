<template>
  <div class="skill-wrapper">
    <table>
      <thead>
        <tr>
          <th rowspan="2" id="class-skill">
            <div>class skill?</div>
          </th>
          <th colspan="9" id="primary-head">SKILLS</th>
        </tr>
        <tr>
          <th style="font-size: small;">SKILL NAME</th>
          <th>KEY ABILITY</th>
          <th>SKILL MODIFIER</th>
          <th class="operator"></th>
          <th>ABILITY MODIFIER</th>
          <th class="operator"></th>
          <th>RANKS</th>
          <th class="operator"></th>
          <th>MISC MODIFIER</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(skill, index) in skills"
          :class="{ 'armor-check': skill.armorCheck }"
          :key="skill.name"
        >
          <td v-if="isClassSkill(skill.name)">
            &#9724;
          </td>
          <td v-else>
            &#9723;
          </td>
          <td class="skill-name">{{ skill.name }}</td>
          <td class="ability">{{ skill.ability }}</td>
          <td class="total-mod">
            <div>
              {{
                Math.floor(
                    modifier(character.abilities[skill.ability]) +
                    character.skills[index].ranks +
                    character.skills[index].misc
                )
              }}
            </div>
          </td>
          <td class="operator">=</td>
          <td class="mod">
            <div>
              {{ modifier(character.abilities[skill.ability]) }}
            </div>
          </td>
          <td class="operator">+</td>
          <td class="mod">
            <div>{{ character.skills[index].ranks }}</div>
          </td>
          <td class="operator">+</td>
          <td class="mod"><div>{{ character.skills[index].misc }}</div></td>
        </tr>
      </tbody>
      <caption>
        <div
          style="display: flex; flex-direction: row; justify-content: space-between;"
        >
          <div>
            <div
              class="armor-check"
              style="height: 1em; width: 1em; display: inline-block;"
            ></div>
            = apply armor check penalty
          </div>
          <div>
            Unpsent Skill Points:
            {{ pointsRemaining }}
          </div>
        </div>
      </caption>
    </table>
  </div>
</template>

<script>
export default {
  name: "skills",
  props: {
    skills: Array,
    character: Object
  },
  computed: {
    pointsRemaining() {
      let totalSpent = 0;
      let index = 0;
      for (const skill of this.skills) {
        if (this.isClassSkill(skill.name)) {
          totalSpent += this.character.skills[index];
        } else
          totalSpent +=
            2 * this.character.skills[index];
      };
      return (
        (this.character.class.skill_points +
          this.modifier(this.character.abilities.int)) *
          (this.character.level + 3) -
        totalSpent
      );
    }
  },
  methods: {
    isClassSkill(skill) {
      return (
        this.character.class.skills.findIndex(
          name => name.toLowerCase() == skill.toLowerCase()
        ) >= 0
      );
    },
    modifier(ability) {
      return Math.floor((ability - 10) / 2);
    }
  }
};
</script>

<style scoped>
.skill-wrapper {
  margin-top: 40px;
  margin-left: 20px;
}
#primary-head {
  background-color: black;
  color: white;
  font-size: large;
}
#class-skill {
  background-color: black;
  color: white;
  padding: 0;
  margin: 0;
}
#class-skill div {
  text-orientation: sideways-right;
  writing-mode: vertical-rl;
  max-height: 5em;
  white-space: nowrap;
  font-size: x-small;
  font-weight: normal;
  text-indent: 0;
}
th {
  border-bottom: solid black 2px;
  max-width: 5em;
  font-size: x-small;
  font-weight: normal;
}
th:last-of-type {
  border-right: solid black 2px;
}
td {
  font-size: smaller;
  font-weight: normal;
}
caption {
  position: relative;
  font-size: small;
  padding: 0;
  padding-top: 0.5em;
}
caption div {
  position: relative;
  bottom: -2px;
}
.skill-name {
  text-align: left;
}
.total-mod div {
  border: solid black 1px;
}
.mod div {
  border-bottom: solid black 1px;
}
.skill-name {
  font-variant: small-caps;
}
.ability {
  text-transform: uppercase;
}
.armor-check {
  background-color: lightgrey;
}
</style>
