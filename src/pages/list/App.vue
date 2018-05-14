<template>
	<div id="wrapper">
		<headerCom header-title="分类"></headerCom>
		<section class="container">
			this page is list
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
	text-align: center;
	line-height: 50px;
}
</style>