import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'

import moment from 'moment'


import iView from 'iview';
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter)
Vue.use(iView)

console.log(iView)

import TestSlot from './components/TestSlot.vue'
import TestVuex from './components/TestVuex.vue'

const router = new VueRouter({
	routes: [
		{ path: '/testSlot', component: TestSlot},
		{ path: '/testVuex', component: TestVuex}
	]
})
new Vue({
	el: '#app',
	components: {
		App
	},
	router,
	methods: {
		moment () {
			return moment()
		}
	}
})