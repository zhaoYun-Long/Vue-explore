<template>
  <div>
    <input type="text" id="test1">
  </div>
</template>
<script>
require('../../assets/layui-laydate/src/theme/default/laydate.css')
let laydate = require('../../assets/layui-laydate/src/laydate.js')

export default {
  data () {
    return {

    }
  },

  mounted () {
    this.initDatePicker()
  },

  methods: {
    initDatePicker () {
      console.log(111)
      console.log(laydate)

    laydate.render({
      elem: '#test1' //指定元素
    })
    }
  }
}
</script>

<style scoped>

</style>


