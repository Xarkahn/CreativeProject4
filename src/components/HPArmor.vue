<template>
  <div class="top-row2">
    <div class="category-container">
      <div class="armor category">
        <div>
          <h1 class="header-spacer" style="width: 4.5em;"></h1>
          <h1 class="header short">Current</h1>
          <div class="header-spacer"></div>
          <h1 class="header short">BASE TOTAL</h1>
          <div class="header-spacer"></div>
          <h1 class="header long">LETHAL DAMAGE</h1>
          <div class="header-spacer"></div>
          <h1 class="header long">NON-LETHAL DAMAGE</h1>
          <h1 class="header standard">DAMAGE REDUCTION</h1>
          <h1 class="header short">SPELL RESISTANCE</h1>
        </div>
        <div>
          <span class="group">
            <h1>HP</h1>
            <h2>HIT POINTS</h2>
          </span>
          <p class="short">{{ baseHP - lethal - nonLethal }}</p>
          <div class="header-spacer">=</div>
          <p class="short">{{ baseHP }}</p>
          <div class="header-spacer">-</div>
          <input type="number" class="long" v-model="lethal" />
          <div class="header-spacer">-</div>
          <input type="number" class="long" v-model="nonLethal" />
          <p class="standard"></p>
          <p class="short"></p>
        </div>
        <div>
          <span class="group">
            <h1>AC</h1>
            <h2>ARMOR CLASS</h2>
          </span>
          <p class="short">
            {{
              10 +
                abilityModifier(character.abilities.dex) +
                sizeModifier(species[character.species].size)
            }}
          </p>
          <div class="header-spacer short">= 10 +</div>
          <p class="short"></p>
          <div class="header-spacer">+</div>
          <p class="short"></p>
          <div class="header-spacer">+</div>
          <p class="short">{{ abilityModifier(character.abilities.dex) }}</p>
          <div class="header-spacer">+</div>
          <p class="short">
            {{ sizeModifier(species[character.species].size) }}
          </p>
          <div class="header-spacer">+</div>
          <p class="short"></p>
          <div class="header-spacer">+</div>
          <p class="short"></p>
          <div class="header-spacer">+</div>
          <p class="short"></p>
        </div>
        <div>
          <h1 class="header-lower" style="width: 4.5rem;"></h1>
          <h1 class="header-lower short">TOTAL</h1>
          <div class="header-spacer short"></div>
          <h1 class="header-lower short">ARMOR BONUS</h1>
          <div class="header-spacer"></div>
          <h1 class="header-lower short">SHIELD BONUS</h1>
          <div class="header-spacer"></div>
          <h1 class="header-lower short">DEX MODIFIER</h1>
          <div class="header-spacer"></div>
          <h1 class="header-lower short">SIZE MODIFIER</h1>
          <div class="header-spacer"></div>
          <h1 class="header-lower short">NATURAL ARMOR</h1>
          <div class="header-spacer" style="width: .75em;"></div>
          <h1 class="header-lower short">DEFLECTION MODIFIER</h1>
          <div class="header-spacer" style="width: .75em;"></div>
          <h1 class="header-lower short">MISC MODIFIER</h1>
        </div>
      </div>
    </div>
    <div class="category-container">
      <div class="armor2 category">
        <div>
          <div class="standard group">
            <h1 class="standard">touch</h1>
            <h2 class="standard">armor class</h2>
          </div>
          <p>{{ 10 + abilityModifier(character.abilities.dex) }}</p>
        </div>
        <div>
          <div class="long group">
            <h1 class="long">flat-footed</h1>
            <h2 class="long">armor class</h2>
          </div>
          <p>10</p>
        </div>
        <div>
          <div class="standard group">
            <h1 class="standard">condition</h1>
            <h2 class="standard">disease/etc</h2>
          </div>
          <p style="width: 14.5em;"></p>
        </div>
      </div>
      <div class="armor2 category">
        <div>
          <div class="standard group">
            <h1 class="standard">initiative</h1>
            <h2 class="standard">modifier</h2>
          </div>
          <p>{{ abilityModifier(character.abilities.dex) + 10 }}</p>
        </div>
        <div>
          <div class="standard group">
            <h1 class="standard">speed</h1>
            <h2 class="standard">feet/round</h2>
          </div>
          <p style="width:5em">{{ species[character.species].speed }}</p>
          <p style="width:5em"></p>
          <p style="width:5em"></p>
          <p style="width:5em"></p>
          <p class="standard"></p>
        </div>
      </div>
      <div class="armor2 category">
        <div>
          <div class="standard header-spacer"></div>
          <div class="short header-spacer"></div>
        </div>
        <div>
          <div class="standard header-spacer"></div>
          <h1 class="standard5 header-lower">Walk</h1>
          <h1 class="standard5 header-lower">Swim</h1>
          <h1 class="standard5 header-lower">Climb</h1>
          <h1 class="standard5 header-lower">Burrow</h1>
          <h1 class="standard header-lower">Fly</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hparmor",
  props: {
    character: Object,
    classes: Object,
    species: Object
  },
  data() {
    return {
      lethal: 0,
      nonLethal: 0
    };
  },
  computed: {
    baseHP() {
      return this.classes[this.character.class].hd;
    }
  },
  methods: {
    sizeModifier(size) {
      if (size == "medium") return 0;
      if (size == "small") return -4;
      else return NaN;
    },
    abilityModifier(ability) {
      return Math.floor((ability - 10) / 2);
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

.top-row2 {
  margin: 0 auto;
}
.armor {
  position: relative;
  top: -0.3em;
  width: auto;
  min-width: 728px;
  overflow-x: auto;
}
.armor2 {
  min-width: 744px;
  display: flex;
  flex-direction: row;
}
.category-container {
  overflow: hidden;
  overflow-x: auto;
  max-width: 95vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
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
input {
  border-radius: 0;
  border: solid black 1px;
  min-height: 36px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: inherit;
  font-weight: bold;
}
</style>
