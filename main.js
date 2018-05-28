import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './src/App.vue'

Vue.use(VueRouter)

new Vue({
  render: h => h(App)
}).$mount('#app')