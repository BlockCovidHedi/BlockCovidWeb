<template>
  <div>
    <header>
      <b-navbar id="nav" toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand>BLOCKCOVID</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <template v-if="token">
            <b-navbar-nav>
              <b-nav-item to="/connected">Home</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Paramètre" right>
                <b-dropdown-item to="/">Profile</b-dropdown-item>
                <b-dropdown-item href="/" @click.prevent="logout()">Se déconnecter</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </template>
          <template v-else>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/about">A propos</b-nav-item>
            </b-navbar-nav>
          </template>
        </b-collapse>
      </b-navbar>
    </header>
    <body class="mt-5">
    <router-view/>
    </body>
    <footer>
      <img alt="covid logo" height="100" src="./assets/covid_logo_footer.jpg" width="250">
    </footer>
  </div>
</template>
<script>
import Users from './services/users'
import Route from './router/index'

export default {
  data: () => ({
    token: Users.isToken()
  }),
  methods: {
    logout: function () {
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
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
