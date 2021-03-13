<template>
  <div>
    <h2 class="text-center">{{this.infos}} </h2>
    <p> L'application qui vaincra le Covid-19</p>
  </div>
</template>

<script>
import UserService from "../services/users.js"

export default {
  name: "Home",
  data : () => ({
    infos: [],
    url: process.env.VUE_APP_API,

  }),
  methods: {
  },
  mounted () {
    UserService.get_hello_world()
    .then(response => {
      console.log(response.data)
      this.infos = response.data
    })
  }
}

</script>

<style scoped>

</style>