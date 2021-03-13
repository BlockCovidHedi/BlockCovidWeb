<template>
  <div>
    <h1> Hello {{infos.name}}, you're a {{current_user.role}} </h1>
    <div v-if="current_user.role=='doctor'">

    </div>
  </div>

</template>
<script>
import Users from '../services/users'
import Route from '../router/index'

export default {
  name: "Connected",
  data: () => ({
    current_user: [],
    infos: []
  }),
  methods: {},
  mounted() {
    Users.getAll()
        .then(response => {
          this.current_user = response.data.user
          this.infos = response.data.doctor
        })
        .catch(error => {
          console.log(error)
          Users.logout()
          Route.push('/')
        })
  },
}
</script>

<style>

</style>