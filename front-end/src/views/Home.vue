<template>
  <body>
    <div class="home">
      <Characters v-if="user" />
      <Login v-else />
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import Characters from '@/components/Characters.vue'
import Login from '@/components/Login.vue'
export default {
  name: "Home",
   components: {
    Characters,
    Login
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
};
</script>

<style scoped>
body {
  background-color: lightgray;
  height: fit-content;
}
.home {
  background-color: white;
  min-height: calc(100vh - 24px - 70px);
  max-width: 1024px;
  margin: auto;
  padding: 3em;
}
h1 {
  text-align: center;
}
p {
  text-align: left;
}
</style>
