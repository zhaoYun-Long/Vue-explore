<template>
	<div>
		<ul>
		  <li
		    v-for="todo in todos"
		    v-bind:key="todo.id"
		  >
		    <!-- 我们为每个 todo 准备了一个插槽，-->
		    <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
		    <slot v-bind:todo="todo">
		      <!-- 回退的内容 -->
		      {{ todo.text }}
		    </slot>
		  </li>
		</ul>
	</div>
</template>

<script>

export default {
	data () {
		return {
			todo: {
				text: '66666'
			}
		}
	}
}
</script>

<style>

</style>