<template>
	<header class="header">
		this is header
	</header>
</template>
<script>
	import '../../css/common.scss'
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
<style lang="scss">
@import '../../css/variables.scss';
.header{
	height: 200px;
	text-align: center;
	line-height: 200px;
	color: #fff;
}
</style>