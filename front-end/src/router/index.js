import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterSheet from "../views/Character-Sheet.vue";
import CharacterCreation1 from "../views/Character-Creation-1.vue";
import CharacterCreation2 from "../views/Character-Creation-2.vue";
import CharacterEdit1 from "../views/Character-Edit-1.vue";
import CharacterEdit2 from "../views/Character-Edit-2.vue";
import Spells5e from "../views/Spells5e.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Character-Sheet/:character",
    name: "Character-Sheet",
    component: CharacterSheet
  },
  {
    path: "/Character-Creation-1",
    name: "Character-Creation-1",
    component: CharacterCreation1
  },
  {
    path: "/Character-Creation-2",
    name: "Character-Creation-2",
    component: CharacterCreation2,
  },
  {
    path: "/Character-Edit-1",
    name: "Character-Edit-1",
    component: CharacterEdit1
  },
  {
    path: "/Character-Edit-2",
    name: "Character-Edit-2",
    component: CharacterEdit2,
  },
  {
    path: "/Spells5e",
    name: "Spells5e",
    component: Spells5e
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
