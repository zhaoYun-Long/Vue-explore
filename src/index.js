import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		count: 6,
		todos: [
			{id: 1, text: '...', done: true},
			{id: 2, text: '...', done: true}
		]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			return getters.doneTodos.length
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		}
	},
	// mutation都是同步事务
	mutations: {
		increment (state, payload) {
			state.count += payload.amount
		}
	},
	// Action 可以包含任意异步操作
	actions: {
		increment ({ commit }, payload) {
			setTimeout( () => {
				commit('increment', payload)
			}, 1000)
		}
	}
})

// store.commit('increment', {
// 	amount: 10
// })

// store.commit({
// 	type: 'increment',
// 	amount: 10
// })

store.dispatch('increment', {
	amount: 18
})

import moment from 'moment'


import iView from 'iview';
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter)
Vue.use(iView)



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
	store,
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