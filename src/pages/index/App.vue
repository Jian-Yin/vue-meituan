<template>
	<div id="wrapper">
		<headerCom></headerCom>
		<section class="container">
			this page is index
		</section>
		<footerCom></footerCom>
	</div>
</template>
<script>
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
@import '../../css/common.css';
.container{
	height: 300px;
	text-align: center;
	line-height: 50px;
}
</style>