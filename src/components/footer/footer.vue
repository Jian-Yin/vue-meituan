<template>
	<footer class="footer">
		<div class="footer-container">
			<a href="#" :class="{'is-active': pageName == 'home'}"><iconSvg icon-class="home" /><span>首页</span></a>
			<a href="#" :class="{'is-active': pageName == 'category'}"><iconSvg icon-class="category" /><span>分类</span></a>
			<a href="#" :class="{'is-active': pageName == 'cart'}"><iconSvg icon-class="cart" /><span>购物车</span></a>
			<a href="#" :class="{'is-active': pageName == 'user'}"><iconSvg icon-class="user" /><span>我的</span></a>
		</div>
	</footer>
</template>
<script>
	import '../../css/common.scss'
	export default {
		props: {
			pageName: {
				type: String,
				required: true
			}
		},
	}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.footer{
	height: 52px;
	.footer-container{
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 52px;
		color: $color-999999;
		text-align: center;
		box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
		a{
			display: block;
			flex: 1 1 auto;
			&.is-active{
				color: $color-ff6700;
			}
			i{
				width: 20px;
				height: 20px;
			}
			span{
				display: block;
				margin: 5px 0 0;
			}
		}
	}
}
</style>