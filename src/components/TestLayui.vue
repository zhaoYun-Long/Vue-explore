<template>
  <div>
    <input type="text" id="test1">
    <h3>{{testData}}</h3>
  </div>
</template>
<script>
require('../../assets/layui-laydate/src/theme/default/laydate.css')
let laydate = require('../../assets/layui-laydate/src/laydate.js')
import { obj } from './text.js'

export default {
  data () {
    return {

    }
  },

  mounted () {
    this.initDatePicker()
      obj.a = 222
  },

  computed: {
    testData: function() {
      return this.$root.testData
    }
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


