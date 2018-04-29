<template>
	<div id="wrapper">
		<headerCom></headerCom>
		<section class="container">
			<p>this page is index</p>
		</section>
		<footerCom></footerCom>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {
		}
	}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.container{
	height: 300px;
	p{
		text-align: center;
		line-height: 50px;
	}
}
</style>