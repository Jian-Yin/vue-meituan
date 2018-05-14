<template>
	<div id="wrapper">
		<!-- <headerCom header-title="购物车"></headerCom> -->
		<headerPage></headerPage>
		<section class="container">
		</section>
		<footerCom page-name="home"></footerCom>
	</div>
</template>
<script>
	import headerPage from './components/header'
	export default {
		data() {
			return {}
		},
		components: {
			headerPage
		},
		mounted() {
		},
	}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.container{
}
</style>