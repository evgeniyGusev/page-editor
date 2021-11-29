<template>
	<vs-sidebar
		v-model="active"
		open
	>
		<template #logo>
			Админка
		</template>

		<vs-sidebar-item
			v-for="(item, i) in getSidebarItems"
			:id="item.id"
			:key="i"
			:to="item.to"
		>
			{{ item.text }}
		</vs-sidebar-item>
	</vs-sidebar>
</template>

<script>
export default {
	name: 'AdminAside',

	data() {
		return {
			active: null
		}
	},

	computed: {
		getSidebarItems() {
			return [
				{
					id: 'index',
					text: 'Главная',
					to: {
						path: '/'
					}
				},
				{
					id: 'admin-cases',
					text: 'Кейсы',
					to: {
						path: '/admin/cases'
					}
				}
			]
		}
	},

	watch: {
		'$route.name'(val) {
			this.active = val;
		}
	},

	beforeMount() {
		this.active = this.$route.name;
	}
};
</script>

<style lang="scss" scoped>
.vs-sidebar-content {
	position: relative;
	width: 100%;
}
</style>
