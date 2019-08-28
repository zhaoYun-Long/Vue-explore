<template>
	<div>
		<div>
    	<router-link to="/testSlot" tag="li"><a> slot</a></router-link>
    	<router-link to="/testVueX">vuex</router-link>
			<router-link to="/testLayui">layui_datepicker</router-link>
    </div>
    <div>
			<keep-alive>
    		<router-view></router-view>
			</keep-alive>
    </div>
	</div>
</template>

<script>

export default {
  data () {
    return {
      message: 'demo'
    }
	},
	mounted() {
		console.log('app初始化')
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
#box .el-slider__runway {
  background-color: red !important;
}
</style>
