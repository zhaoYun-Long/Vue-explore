<template>
	<div class="abc">{{doneTodosCount}}__{{a}}__{{b}}</div>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
	data () {
		return {
			b: {
				name: 'heihie'
			}
		}
	},
	computed: {
		a: function() {
			
			return this.$store.state.count
		},
		// ...mapState({
		// 		count: state => state.count + 1,
		// 		countAlias: 'counte',
		// 	}),
		...mapGetters([
				'doneTodosCount'
				]
			),
		...mapMutations({
			add: 'increment'
		}),
		...mapActions([
			'increment',
			'incrementBy'
		]),
		...mapActions({
			add: 'increment'
		})
	},
	mounted () {
		// this.$set(this.b, 'age', 12)
		// console.log({a:1, c:2, ...(this.b)})
		let o = 'ccc'
		console.log({[o]: 666})
	},
	methods: {
	}
}
</script>

<style>
/*aa*/
</style>