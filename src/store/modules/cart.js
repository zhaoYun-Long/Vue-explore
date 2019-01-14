import by from '../../api/shop.js'
const state = {
  checkoutStatus: null,  // null | success | failed
  items: []
}
const getters = {
  cartProducts (state, getters, rootState) {
    return state.items.map(item => {
      const prod =  rootState.products.all.find(productItem => item.id === productItem.id)
      return {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: item.quantity
      }
    })
  },
  total (state, getters) {
    return getters.cartProducts.reduce( (x, y) => {
      return x + y.quantity * y.price
    }, 0)
  }
}
const mutations = {
  incrementItemQuantity (state, payload) {
    const curtItem = state.items.find( item => item.id === payload.id)
    curtItem.quantity++
  },
  pushProductTocart (state, payload) {
    state.items.push({
      id: payload.id,
      quantity: 1
    })
  },
  setCheckStatus (state, payload) {
    state.checkoutStatus = payload
  },
  setItems (state, payload) {
    state.items = payload
  }
}
const actions = {
  checkOut({commit, state}, products) {
    let saveCartData = [...products]
    commit('setCheckStatus', null)
    commit('setItems', [])
    by(
      products,

      () => {
        // 成功
      },

      () => {
        commit('setItems', saveCartData)
      }
      )
  },
  addProductToCart ({state, commit}, product) {
    console.log(product.inventory)
    if (product.inventory > 0) {
      const one = state.items.find( item => {
          return item.id === product.id
      }
        )
      if(one) {
        commit({
          type: 'incrementItemQuantity',
          id: product.id
        })
      } else {
        commit({
          type: 'pushProductTocart',
          id: product.id
        })
      }
      commit('products/decrementProductInventoty', { id: product.id}, { root: true} )
    } else {
      console.log('库存不足')
    }

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}