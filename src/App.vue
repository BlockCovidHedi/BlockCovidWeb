<template>
  <div id="app">
    <div id="nav">

      <div v-if="token">
        <router-link to="/connected">Home</router-link>
        <button v-on:click="logout">Se deconnecter</button>
      </div>

      <div v-else>
        <router-link to="/">Home</router-link>
        <router-link to="/signin">Se connecter</router-link>
        <router-link to="/signup">S'inscrire</router-link>
      </div>

    </div>
    <router-view/>
  </div>
</template>
<script>
  import Users from './services/users'
  import Route from './router/index'
  export default {
    data : () => ({
      token: Users.isToken()
    }),
    methods : {
      logout : function() {
        Users.logout()
        Route.push('/')
      }
    }
  }

</script>

<style scoped>
#app a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
