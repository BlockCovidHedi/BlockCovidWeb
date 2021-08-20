<template>
  <div class="text-center">

    <div v-if="is_error == true">
      <p> Erreur de chargement de page, veuillez recharger la page </p>
    </div>
    <div v-else-if="this.infos == null">
      <p> Chargement de la page...</p>
    </div>
    <div v-else>
        <div class="row">
          <h2>{{this.infos}} </h2>
          <p> L'application qui vaincra le Covid-19</p>
        </div>
        <div>
          <Login/>
        </div>
        <a href="/signup"> Pas encore de compte ? </a>
    </div>
  </div>
</template>

<script>
import UserService from "../services/users.js";
import Login from "@/components/Login";

export default {
  name: "Home",
  components: {Login},
  data : () => ({
    infos: null,
    url: process.env.VUE_APP_API,
    is_error: false,

  }),
  methods: {
  },
  mounted () {
    UserService.get_hello_world()
    .then(response => {
      setTimeout(() => {
        console.log(response.data)
        this.infos = response.data
      },2000)
    })
    .catch(error => {
      this.is_error = true
      console.log(error)
    })
  }
}

</script>

<style scoped>

</style>