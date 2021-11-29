<template>
	<div class="app">
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
export default {
	name: 'DefaultLayout',
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
