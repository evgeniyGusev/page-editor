<template>
	<client-only>
		<div class="admin-layout">
			<admin-aside />
			<nuxt class="content" />
		</div>
	</client-only>
</template>

<script>
import AdminAside from "@/components/admin/general/AdminAside";

export default {
	name: 'AdminLayout',

	components: { AdminAside },
};
</script>

<style lang="scss" scoped>
.admin-layout {
	display: grid;
	grid-template-columns: 2fr 10fr;
	min-height: 100vh;
	background-color: #f6f6f6;
	font-family: $OpenSans;

	.content {
		padding: 20px;
	}
}
</style>
