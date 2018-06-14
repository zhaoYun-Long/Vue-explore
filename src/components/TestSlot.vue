<template>
	<div>
		<Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
<!-- 		<Todo :todos='todos'>
			<template slot-scope="slotProps">
				<span v-if="slotProps.todo.isComplete">对号</span>
				{{ slotProps.todo.text}}
			</template>
		</Todo> -->
	</div>
</template>

<script>
import Todo from './Todo.vue'
export default {
	components: {
		Todo
	},
	data () {
		return {

		}
	}
}
</script>

<style>

</style>