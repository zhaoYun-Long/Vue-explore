import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
let elDiv = document.createElement('div')
elDiv.id = 'app'
elDiv.innerHTML = '<App></App>'
document.body.appendChild(elDiv)
new Vue({
	el: '#app',
	components: {
		App
	}
})