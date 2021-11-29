<template>
	<ul class="list">
		<li
			v-for="(link, i) in getLinks"
			:key="i"
			class="item"
		>
			<nuxt-link :to="link.to" class="link">
				<img :src="link.icon" alt="" class="icon">

				<div>{{ link.text }}</div>
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "AdminPage",

	layout: 'adminLayout',

	computed: {
		getLinks() {
			return [
				{
					to: {
						path: '/admin/cases'
					},
					icon: '/ico/cases.svg',
					text: 'Кейсы'
				}
			]
		},
	},
}
</script>

<style lang="scss" scoped>
.list {
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	grid-gap: 20px 20px;
	list-style-type: none;

	.item {
		max-width: 100%;
		max-height: 245px;
		padding: 5px;
		border-radius: 10px;
		box-shadow: 0 0 10px #444;

		.link {
			text-decoration: none;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.icon {
			width: 100%;
			margin-bottom: 20px;
			text-align: center;
		}
	}
}
</style>
