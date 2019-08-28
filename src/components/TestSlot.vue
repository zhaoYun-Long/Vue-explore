<template>
<div id="box">
  <h1>{{msg}}</h1>
</div>

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      msg: 'lalala'
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('monted')
    setTimeout( () => {
      this.msg = '000000000'
    }, 2000)
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style scoped>

</style>