<template>
	<header class="header-page">
		<div class="header-page-container">
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
					new Swiper(this.$refs.swiperNav, {
						slidesPerView: 'auto',
						normalizeSlideIndex: false,
						slideToClickedSlide: true,
					})
				})
			})
		}
	}
</script>
<style lang="scss">
@import '../../../css/variables.scss';
.header-page{
	height: 82px;
	.header-page-container{
		position: fixed;
		top: 0;
		width: 100%;
		height: 82px;
		color: $color-666666;
		background: $color-f2f2f2;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
		.header-search{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			.header-left,.header-right{
				a{
					display: block;
					padding: 5px 10px;
					width: 50px;
					text-align: center;
					.icon-logo{
						width: 25px;
						height: 25px;
						color: $color-ff6700;
					}
					.icon-user{
						width: 20px;
						height: 20px;
					}
				}
			}
			.header-middle{
				flex: 1 1 auto;
				border: 1px solid $color-e2e2e2;
				border-radius: 2px;
				background: $color-ffffff;
				.search-box{
					display: flex;
					align-items: center;
					font-size: 14px;
					.icon-svg{
						margin: 4px;
						width: 24px;
						height: 24px;
					}
				}
			}
		}
		.header-nav{
			.swiper-wrapper{
				.swiper-slide{
					padding: 0 12px;
					width: auto;
					font-size: 13px;
					span{
						display: block;
						line-height: 32px;
						border-bottom: 2px solid transparent;
					}
					&.swiper-slide-active{
						color: $color-ff6700;
						span{
							border-color: $color-ff6700;
						}
					}
				}
			}
		}
	}
}
</style>