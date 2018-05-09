<template>
	<header class="header">
		<div class="header-container">
			<div class="header-search">
				<div class="header-left"><a><iconSvg icon-class="logo" /></a></div>
				<div class="header-middle">
					<div class="search-box"><iconSvg icon-class="search" /><span>搜索商品名称</span></a></div>
				</div>
				<div class="header-right"><a><iconSvg icon-class="user" /></a></div>
			</div>
			<div class="header-nav swiper-container" ref="swiperNav">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item, index) in navList" :key="index">
						<span>{{item}}</span>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	import '../../css/common.scss'
	import 'swiper/dist/css/swiper.min.css';
	import Swiper from 'swiper';
	export default {
		data(){
			return{
				navList: []
			}
		},
		mounted(){
			this.axios.get('/api/index/headerNav').then(response => {
				let tabs = response.data.data.tabs
				for (let i = 0, j = tabs.length; i < j; i++) {
					this.navList.push(tabs[i].name);
				}
				this.$nextTick(() => {
					this.swiper = new Swiper(this.$refs.swiperNav, {})
				})
			})
		}
	}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.header{
	height: 82px;
	.header-container{
		position: fixed;
		top: 0;
		height: 82px;
	}
}
</style>