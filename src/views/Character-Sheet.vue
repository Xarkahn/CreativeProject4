/* eslint-disable vue/return-in-computed-property */ /* eslint-disable
vue/return-in-computed-property */
<template>
  <div class="wrapper">
    <div class="character-sheet">
      <div class="basic-info">
        <div class="long">
          <h3>{{ character.name }}</h3>
          <h4>NAME</h4>
        </div>

        <div class="standard">
          <h3>{{ character.class }}</h3>
          <h4>CLASS</h4>
        </div>

        <div class="short">
          <h3>{{ character.level }}</h3>
          <h4>LEVEL</h4>
        </div>

        <div class="standard">
          <h3>{{ character.species }}</h3>
          <h4>SPECIES</h4>
        </div>

        <div class="long">
          <h3>{{ character.alignment1 }} {{ character.alignment2 }}</h3>
          <h4>ALIGNMENT</h4>
        </div>

        <div class="standard">
          <h3>{{ this.$root.$data.species[character.species].size }}</h3>
          <h4>SIZE</h4>
        </div>

        <div class="standard">
          <h3>{{ character.age }}</h3>
          <h4>AGE</h4>
        </div>

        <div class="standard">
          <h3>{{ character.gender }}</h3>
          <h4>GENDER</h4>
        </div>

        <div class="standard">
          <h3>{{ character.height }}</h3>
          <h4>HEIGHT</h4>
        </div>

        <div class="standard">
          <h3 style="text-transform: lowercase">{{ character.weight }}</h3>
          <h4>WEIGHT</h4>
        </div>

        <div class="standard">
          <h3>{{ character.eyes }}</h3>
          <h4>EYES</h4>
        </div>

        <div class="standard">
          <h3>{{ character.hair }}</h3>
          <h4>HAIR</h4>
        </div>

        <div class="standard">
          <h3>{{ character.skin }}</h3>
          <h4>SKIN</h4>
        </div>
      </div>
      <div class="top-row">
        <abilities :character="this.character"> </abilities>
        <hparmor
          :character="this.character"
          :classes="this.classes"
          :species="this.species"
        >
        </hparmor>
      </div>
      <div class="bottom-row">
        <div class="bottom-row-left">
          <saves :character="this.character" :classes="this.classes"></saves>
          <attacks
            :character="this.character"
            :classes="this.classes"
            :species="this.species"
          ></attacks>
        </div>
        <skills
          :skills="this.skills"
          :character="this.character"
          :classes="this.classes"
        ></skills>
      </div>
    </div>
  </div>
</template>

<script>
import abilities from "@/components/Abilities.vue";
import hparmor from "@/components/HPArmor.vue";
import saves from "@/components/Saves.vue";
import attacks from "@/components/Attacks.vue";
import skills from "@/components/Skills.vue";
export default {
  name: "CharacterSheet",
  components: {
    abilities,
    hparmor,
    saves,
    attacks,
    skills
  },
  computed: {
    character() {
      return this.$root.$data.characters[
        this.$root.$data.characters.findIndex(
          chara => chara.name == this.$route.params.character
        )
      ];
    },
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
  methods: {}
};
</script>

<style scoped>
/* Character Sheet */
.wrapper {
  background-color: lightgrey;
  height: fit-content;
  width: 100%;
}
.character-sheet {
  top: 0;
  position: relative;
  background-color: white;
  margin: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-weight: bold;
  max-width: 1035px;
  max-height: 1340px;
}
.character-sheet h1,
.character-sheet p,
.character-sheet h2 {
  font-size: inherit;
  border-style: solid;
  border-width: thin;
  display: inline-block;
  vertical-align: top;
  height: 2em;
  width: 3em;
}
.character-sheet p {
  display: table-cell;
  max-height: 2em;
  height: 2em;
  text-align: center;
  vertical-align: middle;
}
.character-sheet h2 {
  width: auto;
  position: absolute;
  top: 60%;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: normal;
  font-size: 0.55rem;
}
.character-sheet h3 {
  text-transform: capitalize;
  text-emphasis: none;
  text-align: center;
  font-size: inherit;
  font-weight: normal;
  margin: 0 0 0.1em 0;
}
.character-sheet h4 {
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
.basic-info div {
  display: inline-block;
  margin: 0 0.5em 0 0.5em;
}
.top-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.top-row2 {
  margin: 0 auto;
}
.bottom-row {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
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
@media only screen AND (min-height: 1340px) {
  .wrapper {
    height: 100vh;
  }
}
@media print {
  * {
    -webkit-print-color-adjust: exact;
  }
  .character-sheet {
    top: 0;
    margin: 0;
  }
  .character-sheet * {
    overflow: visible;
  }
  .bottom-row {
    max-height: 850px;
  }
  footer {
    display: none;
  }
}
</style>
