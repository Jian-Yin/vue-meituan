<template>
	<div id="wrapper">
		<headerCom></headerCom>
		<section class="container">
			this page is list
		</section>
		<footerCom></footerCom>
	</div>
</template>
<script>
	import '../../css/common.css'
	import headerCom from '../../components/header/header';
	import footerCom from '../../components/footer/footer';
	export default {
		data() {
			return {}
		},
		components: {
			headerCom,
			footerCom
		}
	}
</script>
<style scoped>
@import '../../css/variables.css';
.container{
	height: 300px;
	text-align: center;
	line-height: 50px;
}
</style>