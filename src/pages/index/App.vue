<template>
	<div id="wrapper">
		<headerCom></headerCom>
		<section class="container">
			<p>this page is index</p>
			<iconSvg icon-class="user" />
		</section>
		<footerCom page-name="home"></footerCom>
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
	.icon-user{
		width: 60px;
		height: 60px;
		color: red;
	}
}
</style>