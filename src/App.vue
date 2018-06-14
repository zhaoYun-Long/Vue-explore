<template>
	<div>
		<div>
    	<router-link to="/testSlot">slot</router-link>
    	<router-link to="/testVueX">vuex</router-link>
    </div>
    <div>
    	<router-view></router-view>
    </div>
	</div>
</template>

<script>

export default {
  data () {
    return {
      message: 'demo'
    }
  }
}
</script>


<style>
div a {
	text-decoration: none;
	display: inline-block;
	padding: 5px;
	border: 1px solid #ccc;
	background-color: #eee;
}
</style>
