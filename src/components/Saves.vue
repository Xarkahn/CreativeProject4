<template>
  <div class="category-container">
    <div class="saving-throws category">
      <div
        style="margin: auto; border-bottom:1px solid black; width: 90%; padding:0;"
      >
        <div
          style="margin:auto; vertical-align: top; position: relative; top: .5em;"
        >
          Saving Throws
        </div>
      </div>
      <div>
        <h1 class="standard header" style="width: 4rem;">
          Saving Throws
        </h1>
        <h1 class="header short">Total</h1>
        <div class="header-spacer"></div>
        <h1 class="header short">BASE SAVE</h1>
        <div class="header-spacer"></div>
        <h1 class="header short">Ability Modifier</h1>
        <div class="header-spacer"></div>
        <h1 class="header short">Magic Modifier</h1>
        <div class="header-spacer"></div>
        <h1 class="header short">Misc Modifier</h1>
      </div>
      <div>
        <span class="standard group">
          <h1 class="standard">REFLEX</h1>
          <h2>(Dexterity)</h2>
        </span>
        <p class="short">
          {{ getSave("Ref") + abilityModifier(character.abilities.dex) }}
        </p>
        <div class="header-spacer">=</div>
        <p class="short">{{ getSave("Ref") }}</p>
        <div class="header-spacer">+</div>
        <p class="short">{{ abilityModifier(character.abilities.dex) }}</p>
        <div class="header-spacer">+</div>
        <p class="short"></p>
        <div class="header-spacer">+</div>
        <p class="short"></p>
      </div>
      <div>
        <span class="standard group">
          <h1 class="standard">Fortitude</h1>
          <h2>(Constitution)</h2>
        </span>
        <p class="short">
          {{ getSave("Fort") + abilityModifier(character.abilities.con) }}
        </p>
        <div class="header-spacer">=</div>
        <p class="short">{{ getSave("Fort") }}</p>
        <div class="header-spacer">+</div>
        <p class="short">{{ abilityModifier(character.abilities.con) }}</p>
        <div class="header-spacer">+</div>
        <p class="short"></p>
        <div class="header-spacer">+</div>
        <p class="short"></p>
      </div>
      <div>
        <span class="standard group">
          <h1 class="standard">Will</h1>
          <h2>(Wisdom)</h2>
        </span>
        <p class="short">
          {{ getSave("Will") + abilityModifier(character.abilities.wis) }}
        </p>
        <div class="header-spacer">=</div>
        <p class="short">{{ getSave("Will") }}</p>
        <div class="header-spacer">+</div>
        <p class="short">{{ abilityModifier(character.abilities.wis) }}</p>
        <div class="header-spacer">+</div>
        <p class="short"></p>
        <div class="header-spacer">+</div>
        <p class="short"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "saves",
  props: {
    character: Object,
    classes: Object
  },
  methods: {
    getSave(save) {
      if (
        this.classes[this.character.class].saves.findIndex(
          classSave => classSave == save
        ) >= 0
      )
        return Math.floor(this.character.level / 3) * 2;
      else return Math.floor(this.character.level / 3);
    },
    abilityModifier(ability) {
      return Math.floor((ability - 10) / 2);
    }
  }
};
</script>

<style scoped>
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
.category-container {
  overflow: hidden;
  overflow-x: auto;
  max-width: 95vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
.saving-throws {
  min-width: 500px;
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
