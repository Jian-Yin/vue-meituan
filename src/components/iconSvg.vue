<template>
	<i class="icon-svg" :class="iconName">
		<svg class="svg-icon" aria-hidden="true">
			<use :xlink:href="'#' + iconName"></use>
		</svg>		
	</i>
</template>

<script>
	export default {
		props: {
			iconClass: {
				type: String,
				required: true
			}
		},
		computed: {
			iconName() {
			return `icon-${this.iconClass}`
		}
	}
}
</script>
<style lang="scss">
.icon-svg{
	display: inline-block;
	width: 1em;
	height: 1em;
	color: inherit;
}
.svg-icon {
	display: inline-block;
	width: 100%;
	height: 100%;
	fill: currentColor;
	vertical-align: top;
}
</style>