<template>
  <div class="abilities category">
    <div>
      <h1 class="header" style="width: 4.5rem;">Ability</h1>
      <h1 class="header" style="width: 3rem;">Score</h1>
      <h1 class="header" style="width: 3rem;">Modifier</h1>
    </div>
    <div>
      <div class="group">
        <h1>STR</h1>
        <h2>STRENGTH</h2>
      </div>
      <p>{{ character.abilities.str }}</p>
      <p>{{ modifier(character.abilities.str) }}</p>
    </div>
    <div>
      <span class="group">
        <h1>DEX</h1>
        <h2>DEXTERITY</h2>
      </span>
      <p>{{ character.abilities.dex }}</p>
      <p>{{ modifier(character.abilities.dex) }}</p>
    </div>
    <div>
      <span class="group">
        <h1>CON</h1>
        <h2>CONSTITUTION</h2>
      </span>
      <p>{{ character.abilities.con }}</p>
      <p>{{ modifier(character.abilities.con) }}</p>
    </div>
    <div>
      <span class="group">
        <h1>INT</h1>
        <h2>INTELLIGENCE</h2>
      </span>
      <p>{{ character.abilities.int }}</p>
      <p>{{ modifier(character.abilities.int) }}</p>
    </div>
    <div>
      <span class="group">
        <h1>WIS</h1>
        <h2>WISDOM</h2>
      </span>
      <p>{{ character.abilities.wis }}</p>
      <p>{{ modifier(character.abilities.wis) }}</p>
    </div>
    <div>
      <span class="group">
        <h1>CHA</h1>
        <h2>CHARISMA</h2>
      </span>
      <p>{{ character.abilities.cha }}</p>
      <p>{{ modifier(character.abilities.cha) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "abilities",
  props: {
    character: Object
  },
  methods: {
    modifier(ability) {
      let mod = Math.floor((ability - 10) / 2);
      if (mod > 0) {
        return "+" + mod;
      } else return mod;
    }
  }
};
</script>

<style scoped>
/* Character Sheet */
h1,
p,
h2 {
  font-size: inherit;
  border-style: solid;
  border-width: thin;
  display: inline-block;
  vertical-align: top;
  height: 2em;
  width: 3em;
}
p {
  display: table-cell;
  max-height: 2em;
  height: 2em;
  text-align: center;
  vertical-align: middle;
}
h2 {
  width: auto;
  position: absolute;
  top: 60%;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: normal;
  font-size: 0.55rem;
}
h3 {
  text-transform: capitalize;
  text-emphasis: none;
  text-align: center;
  font-size: inherit;
  font-weight: normal;
  margin: 0 0 0.1em 0;
}
h4 {
  text-emphasis: none;
  text-align: center;
  border-top: solid;
  border-color: black;
  border-width: 0.1em;
  font-size: 0.55rem;
  padding-top: 0.25em;
  margin: 0;
  text-transform: uppercase;
}
/* Widths for elements */
.short {
  width: 3rem !important;
}
.standard5 {
  width: 5rem !important;
}
.standard {
  width: 6rem !important;
}
.long {
  width: 9rem !important;
}
.verylong {
  width: 12rem !important;
}
.veryverylong {
  width: 15rem !important;
}
/* General format for character sheet tables */
.category {
  margin-left: auto;
  margin-right: auto;
}
.category div {
  display: table;
  border-collapse: separate;
  border-spacing: 0.55rem 0.25em;
}

.category .group {
  display: table-cell;
  color: white;
  background-color: black;
  width: 4.5em;
  height: 2em;
  text-align: center;
  position: relative;
  text-transform: uppercase;
}
.category .group * {
  margin: 0;
  text-align: center;
  border-style: none;
}
.category [class*="header"] {
  color: black;
  width: 3em;
  display: table-cell;
  text-align: center;
  vertical-align: bottom;
  border-style: none;
  padding: 0;
  font-size: 0.55em;
  position: relative;
  top: 0.4rem;
  text-transform: uppercase;
}
.category .header-lower {
  vertical-align: top;
  top: -0.4rem;
  font-weight: normal;
}
.category .header-spacer {
  width: 1em;
  height: 1em;
  font-size: inherit;
  font-weight: normal;
  overflow: visible;
  white-space: nowrap;
  top: -0.2em;
}
</style>
