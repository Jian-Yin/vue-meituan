<template>
	<header class="header">
		<div class="header-container">
			<div class="header-left"><a href=""><iconSvg icon-class="arrow-left" /></a></div>
			<div class="header-middle"><span>{{headerTitle}}</span></div>
			<div class="header-right"><a href=""><iconSvg icon-class="search" /></a></div>
		</div>
	</header>
</template>
<script>
	import '../../css/common.scss'
	export default {
		props: {
			headerTitle: {
				type: String,
				required: true
			}
		}
	}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.header{
	height: 50px;
	.header-container{
		position: fixed;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
		color: $color-666666;
		background: $color-f2f2f2;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
		.header-left,.header-right{
			padding: 5px 10px;
			a{
				display: block;
			}
		}
		.header-middle{
			font-size: 16px;
			line-height: 50px;
		}
		.icon-arrow-left{
			width: 25px;
			height: 25px;
		}
		.icon-search{
			width: 30px;
			height: 30px;
		}
	}
}
</style>