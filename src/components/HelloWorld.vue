<template>
  <div class="hello">
  test
    <q bold co="red" foSi="50px">
      test ds ds dd s
    </q>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import div from '../components/q.div.vue'
@Options({
  props: {
    msg: String
  },
  components: {
    div
  }
})
export default class HelloWorld extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
