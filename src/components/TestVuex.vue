<template>
 	<div>
		 <h1>{{id}}</h1>
		 <Products>}</Products>
		 <Cart></Cart>
	</div>
</template>

<script>

import Products from './Products.vue'
import Cart from './Cart.vue'

import { obj } from './text'

obj.b = 333

export default {
	components: {
		Products,
		Cart
	},
	data () {
		return {
			id: obj,
			b: {
				name: 'heihie',
			}
		}
	},
	watch: {
		id: {
			handler: function() {
				console.log(this.id)
			},
			deep:true
		}
	},
	computed: {
	},
	mounted () {
		console.log(obj)
	},
	methods: {
	}
}
</script>

<style>
/*aa*/
</style>