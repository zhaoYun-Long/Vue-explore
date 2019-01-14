<template>
<div>
<h1>YOUR cart</h1>
<h2 v-show="!cartProducts.length">购物车为空</h2>
<ul>
  <li v-for="item in cartProducts" :key="item.id">
    <span>item.title</span>-<span>{{item.price}}</span> * <span>{{item.quantity}}</span>
  </li>
</ul>
总价<i>{{total}}</i>
<div>
  <button @click="checkOut(cartProducts)" :disabled="!cartProducts.length">结算</button>
</div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('cart', ['checkoutStatus']),
    ...mapGetters('cart',[
      'cartProducts',
      'total'
    ])
  },
  methods: {
    ...mapActions('cart', ['checkOut'])
  }
}
</script>

