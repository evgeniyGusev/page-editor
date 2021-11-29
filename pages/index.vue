<template>
	<main class="main">
		<nuxt-link to='/admin' class='link'>
			Go to the Admin Panel
		</nuxt-link>
	</main>
</template>

<script>
export default {
	layout: 'default',
};
</script>

<style lang="scss" scoped>
.main {
	position: relative;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	background-color: #000;

	.link {
		text-decoration: none;
		font-size: 50px;
		font-weight: 700;
		color: #fff;
		text-shadow: 3px 3px 0 0 #444;
	}
}
</style>
