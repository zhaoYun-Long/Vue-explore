import { getAllProducts } from '../../api/shop.js'
const state = {
  foo: 'bar',
  all: []
}
const getters = {}
const mutations = {
  setProducts (state, n) {
    state.all = n
  },
  decrementProductInventoty (state, payload) {

    const needItem = state.all.find( item => item.id === payload.id)
    console.log(needItem)
    needItem.inventory--
  }
} 
const actions = {
   async getAllProducts ({ commit }) {
    const products = await getAllProducts()
    commit('setProducts', products)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}