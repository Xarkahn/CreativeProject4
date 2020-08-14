<template>
  <div class="category-container">
    <div class="attacks category">
      <div
        style="margin: auto; border-bottom:1px solid black; width: 90%; padding:0;"
      >
        <div
          style="margin:auto; vertical-align: top; position: relative; top: .5em;"
        >
          Attacks
        </div>
      </div>

      <div>
        <div class="verylong group">
          <h1 class="verylong" style="padding-top: 5px;">Base Attack Bonus</h1>
        </div>
        <p style="width: 17em;">{{ fullAttackBonus }}</p>
      </div>
      <div>
        <div class="standard group">
          <h1 class="standard">Grapple</h1>
          <h2 class="standard">modifier</h2>
        </div>
        <p>
          {{
            highAttackBonus +
              abilityModifier(character.abilities.str) +
              sizeModifier(character.species.size)
          }}
        </p>
        <div class="header-spacer">=</div>
        <p class="short">{{ highAttackBonus }}</p>
        <div class="header-spacer">+</div>
        <p class="short">{{ abilityModifier(character.abilities.str) }}</p>
        <div class="header-spacer">+</div>
        <p class="short">{{ sizeModifier(character.species.size)*-4 }}</p>
        <div class="header-spacer">+</div>
        <p class="short"></p>
      </div>
      <div>
        <div class="standard header-spacer"></div>
        <div class="short header-lower">Total</div>
        <div class="header-spacer2"></div>
        <div class="short header-lower">
          <span style="white-space: nowrap;">Base attack</span> bonus
        </div>
        <div class="header-spacer2"></div>
        <div class="short header-lower">strength modifier</div>
        <div class="header-spacer"></div>
        <div class="short header-lower">size modifier</div>
        <div class="header-spacer"></div>
        <div class="short header-lower">misc modifier</div>
      </div>
      <div v-for="index in [1, 2, 3]" :key="index">
        <table class="attack">
          <tr>
            <th
              class="long"
              rowspan="2"
              colspan="2"
              style="font-weight: bold;
               border-radius: 1em 1em 0 0; border:none;"
            >
              Attack
            </th>
            <th
              style="height:1em; background:white; visibility: hidden; border:none;"
            ></th>
          </tr>
          <tr>
            <th class="long">Attack Bonus</th>
            <th class="standard">Damage</th>
            <th class="standard">Critical</th>
          </tr>
          <tr>
            <td class="long" colspan="2"></td>
            <td class="long"></td>
            <td class="standard"></td>
            <td class="standard"></td>
          </tr>
          <tr>
            <th>Range</th>
            <th>Type</th>
            <th colspan="3" class="veryverylong">Notes</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td colspan="3" class="veryverylong"></td>
          </tr>
        </table>

        <div style="display:inline-block">Ammunition:</div>
        <div
          style="display:inline-block; border-bottom:1px solid black; width:24em;
                        vertical-align: text-bottom;"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "attacks",
  props: {
    character: Object
  },
  computed: {
    fullAttackBonus() {
      let bonus =
        Math.floor(this.character.class.attack * this.character.level);
      let toReturn = "+" + bonus;
      bonus -= 5;
      while (bonus > 0) {
        toReturn += " / +" + bonus;
        bonus -= 5;
      }
      return toReturn;
    },
    highAttackBonus() {
      return Math.floor(this.character.class.attack * this.character.level);
    }
  },
  methods: {
    abilityModifier(ability) {
      return Math.floor((ability - 10) / 2);
    },
    sizeModifier(size) {
      if (size == "medium") return 0;
      if (size == "small") return 1;
      else return NaN;
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
/*Formats for particular groups of traits*/
.category-container {
  overflow: hidden;
  overflow-x: auto;
  max-width: 95vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
.attacks {
  text-align: center;
  margin: auto;
  min-width: 500px;
}
.attacks th {
  font-weight: normal;
  width: 3rem;
  border: 1px solid black;
  background-color: black;
  color: white;
}
.attacks td {
  height: 2em;
  padding: 0;
  font-weight: normal;
  position: relative;
  white-space: nowrap;
  border: 1px solid black;
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
.category .header-spacer2 {
  width: 0.65em;
  height: 1em;
  font-size: inherit;
  font-weight: normal;
  overflow: visible;
  white-space: nowrap;
  top: -0.2em;
}
</style>
