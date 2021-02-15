<template>
  <div class="hello">
    <h1> Hello world </h1>
    <HowAreYou msg="How are you ???"/>
    <ul>
      <li v-for="test in infos" :key="test.id">
        {{test.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import HowAreYou from "./HowAreYou";
import axios from 'axios'
export default {
  name: 'HelloWorld',
  components: {HowAreYou},
  props: {
    msg: String

  },
  data : () => ({
    infos: [],
    url: process.env.VUE_APP_API,

  }),
  mounted () {
    let url = this.url+'/api/tests'

    axios
    .get(url)
    .then(response => {
      console.log(response.data)
      this.infos = response.data
      console.log(this.infos)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component onl -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
