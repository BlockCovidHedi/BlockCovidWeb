<template>
  <div>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="dark" id="nav">
          <b-navbar-brand>BLOCKCOVID</b-navbar-brand>
          <div v-if="token">
            <router-link to="/connected">Home</router-link>
            <a href="#" @click.prevent="logout()">Se déconnecter</a>
          </div>

          <div v-else>
            <router-link to="/">Home</router-link>
            <router-link to="/about">A propos</router-link>
          </div>
        </b-navbar>
    </header>
    <body class="mt-5">

      <router-view/>
    </body>
    <footer>
      <img src="./assets/covid_logo_footer.jpg" height="100" width="250" alt="covid logo">
    </footer>
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
  color: #502c2c;
}

#nav a {
  padding: 50px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
footer {
  position:fixed;
  bottom: 0;
  right: 0;
}
</style>
