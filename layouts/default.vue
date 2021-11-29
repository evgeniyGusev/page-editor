<template>
	<div class="ooc">
		<header class='header'>
			Header
		</header>

		<nuxt class="ooc__main" />

		<footer class='footer'>
			Footer
		</footer>
	</div>
</template>
<script>
import HeaderMenu from '~/components/_common/HeaderMenu.vue';
import HeaderBurger from '~/components/_common/HeaderBurger.vue';
import FooterItem from '~/components/_common/FooterItem.vue';
import BaseIconClips from '~/components/_base/BaseIconClips.vue';
export default {
	components: {
		HeaderBurger,
		HeaderMenu,
		FooterItem,
		BaseIconClips
	}
};
</script>
<style lang="scss">
.header,
.footer {
	padding: 40px;
	text-align: center;
	background-color: #2d3748;
	color: #fff;
}
</style>
