<template>
  <div class="hello">
    <h1> {{info}}</h1>
    <HowAreYou msg="How are you ???"/>

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
    info: null,
    url: process.env.VUE_APP_API,

  }),
  mounted () {
    let url = this.url+'/api/hello_world'
    axios
    .get(url)
    .then(response => this.info = response.data)
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
