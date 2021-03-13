<template>
  <div>
    <p> {{error}}</p>
    <p> Email: <input v-model="email" type="text"/></p>
    <p> Mot de passe: <input v-model="password" type="password"/></p>
    <button v-on:click="login()"> Se connecter</button>
  </div>
</template>

<script>
import Users from '../services/users'
import Route from '../router/index'

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    error:"",
  }),
  methods: {
    login: function () {
      Users.login(this.email, this.password)
          .then(response => {
            if (response.data.token) {
              const user = response.data.user
              user.token = response.data.token
              localStorage.setItem('user', JSON.stringify(user));
              Route.push('/connected')
              location.reload()
            }
            else {
              this.error='probleme de connexion'
            }
          });


    }
  }
}
</script>

<style scoped>

</style>