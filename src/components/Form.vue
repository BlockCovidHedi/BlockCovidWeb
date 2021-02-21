<template>
  <div>
    <h2> Page d'inscription </h2>
    <form @submit="addNewUser">
      <p>
        <label for="role">Rôle: </label>
        <select
            id="role"
            v-model="role"
            name="role"
        >
          <option value="doctor">Médecin</option>
          <option value="establishment">Etablissement</option>
        </select>
      </p>
      <div v-if="role">
        <p> Nom: <input v-model="input_name" type="text"/> </p>
        <p v-if="role=='doctor'"> Prénom: <input v-model="firstname" type="text"/> </p>
        <p v-if="role=='doctor'"> Inami: <input v-model="inami"  type="text"/> </p>
        <p> Email: <input v-model="email" type="text"/> </p>
        <p> Mot de passe: <input v-model="password" type="password"/> </p>
        <p> Telephone: <input v-model="phone" type="text"/> </p>
        <button onsubmit="click"> S'inscrire </button>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from '../services/users.js'
import Route from '../router/index'
export default {
  name: "Form",
  data: () => ({
    input_name:"",
    firstname:"",
    inami:"",
    email:"",
    password:"",
    phone:"",
    role:""
  }),
  methods: {
    addNewUser : function(event) {
      event.preventDefault();

      const newUser= {
        email:this.email,
        password:this.password,
        role:this.role,
        name:this.input_name,
      };
      if(this.role=='doctor') {
        newUser.first_name=this.firstname;
        newUser.inami=this.inami;
        newUser.phone_number = this.phone;
      }
      UserService.add_user(newUser)
      .then(response => {
        console.log(response.data)
        Route.push('/')
      })
      .catch(error => (
          console.log(error)
      ))

    },
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>