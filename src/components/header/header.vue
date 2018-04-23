<template>
	<header class="header">
		this is header
	</header>
</template>
<script>
	import '../../css/common.css'
	export default {
		data(){
			return{}
		},
		beforeCreate(){},
		created(){},
		beforeMount(){},
		mounted(){
			console.log(0);
		},
		beforeUpdate(){},
		updated(){},
		beforeDestroy(){},
		destroyed(){}
	}
</script>
<style scoped>
@import '../../css/variables.css';
.header{
	height: 200px;
	text-align: center;
	line-height: 200px;
	color: #fff;
	background: var(--color-dc1f34);
}
</style>