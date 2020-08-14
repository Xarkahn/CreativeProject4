<template>
<div class="hero">
  <div class="heroBox">
    <h2>Welcome, {{ $root.$data.user.username }}</h2>
    <hr>
    <div>
        <h1>Characters:</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Level</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="chara of characters" :key="chara.id">
                    <td>
                        <router-link
                        class="character"
                        :to="{
                                name: 'Character-Sheet',
                                params: { character: chara.name }
                                }"
                        >
                            {{chara.name}}
                        </router-link>
                    </td>
                    <td>
                        {{chara.class.name}}
                    </td>
                    <td>
                        {{chara.level}}
                    </td>
                    <td>
                        <router-link
                        class="character"
                        :to="{
                                name: 'Character-Edit-1',
                                params: { character: chara }
                                }"
                        >
                            <i class="fas fa-feather-alt"></i>
                        </router-link>
                    </td>
                    <td>
                        <a
                        class="character"
                        @click.prevent="deleteChara(chara)"
                        >
                            <i class="fas fa-user-slash"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
    <router-link tag="button" class="pure-button pure-button-primary" to="/Character-Creation-1">
        <span>New Character </span>
        <i class="far fa-plus-square"></i>
    </router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Characters',
  data() {
    return {
      characters: [],
    }
  },
  async created() {
      await this.getCharas();
  },
    methods: {
    async getCharas() {
        let response = await axios.get('/api/characters');
        this.characters = response.data.characters;
        return;
    },
    async deleteChara(chara) {
        if (confirm('Are you sure you want to delete ' + chara.name + '?')) {
            await axios.delete('/api/characters/' + chara._id)
        }
        this.$forceUpdate();
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 28px;
  font-variant: capitalize;
}

hr {
    width: 100%;
    border-top: solid darkgrey 1px;
}

.hero {
  padding: 30px;
  display: flex;
  justify-content: center;
}

.heroBox {
  background: white;
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-radius: 30px;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

.error {
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}

.character {
    text-decoration: none;
    color: black;
}

.character:hover {
    color: darkgrey;
    cursor: pointer;
}

table {
    min-width: 395px;
}

tr {
    border: solid black 1px;
}

td {
    text-transform: capitalize;
    padding: 5px;
}
</style>
