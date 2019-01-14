<template>
 	<div>
		 <Products>}</Products>
		 <Cart></Cart>
	</div>
</template>

<script>

import Products from './Products.vue'
import Cart from './Cart.vue'

export default {
	components: {
		Products,
		Cart
	},
	data () {
		return {
			b: {
				name: 'heihie'
			}
		}
	},
	computed: {
	},
	mounted () {
	},
	methods: {
	}
}
</script>

<style>
/*aa*/
</style>