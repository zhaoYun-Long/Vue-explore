import Vuex from 'vuex'
import Vue from 'vue/dist/vue.js'

import actions from './actions.js'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'

import products from './modules/products.js'
import cart from './modules/cart.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		products,
		cart
	}
})


export default store