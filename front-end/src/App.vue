<template>
  <div id="app">
    <div id="nav">
      <router-link tag="button" to="/">Characters</router-link>
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" data-toggle="dropdown">
          Spells <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <router-link class="dropdown-option" to="/Spells5e">
              <span>D&D 5e</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div id="logout"><button class="pure-button pure-button-primary" @click="logout()">Logout</button></div>
    </div>
    <router-view />
    <div class="footer">
      <a href="https://github.com/Xarkahn/CreativeProject4">Repository</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style>
:root {
  --header-color: rgb(73, 38, 91);
  --header-active-color: rgb(120, 63, 142);
  --accent-color: rgb(81, 62, 67);
  --accent-color-pale: rgb(231, 216, 216);
}
.pure-button-primary {
  background-color: var(--header-color);
}
</style>

<style scoped>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  position: relative;
  min-height: calc(100vh - 24px);
}

#nav {
  background-color: var(--header-color);
  padding: 15px 30px;
  display: flex;
}

.router-link-exact-active {
  background-color: var(--header-active-color);
}

button {
  background-color: var(--header-color);
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  margin-right: 0.5em;
}

a {
  color: white;
}

a:hover {
  color: white;
  text-decoration: none;
}
.dropdown-menu li {
  width: 100%;
}
.dropdown-option {
  background-color: transparent;
  color: black;
  padding-left: 1em;
  width: 100%;
  display: inline-block;
}

.dropdown-option:hover {
  background-color: lightgray;
  color: black;
}

.footer {
  position: absolute;
  bottom: -24px;
  background-color: var(--header-color);
  width: 100%;
  text-align: center;
}

#logout {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
