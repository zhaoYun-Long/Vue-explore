<template>
  <div>

    <h1>products</h1>

    <ul>
      <li  v-for="item in products" :key="item.id">
        <span>{{item.title}}</span>
        -
        <span>{{item.price}}</span>
        <br>
        <button @click="addProductToCart(item)">add tp cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  mounted() {
  },
  computed: {
    ...mapState('products', {
      products: 'all'
    })
  },
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ])
  }
};
</script>

