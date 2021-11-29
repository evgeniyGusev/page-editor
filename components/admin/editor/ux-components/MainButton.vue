<template>
	<vs-button
		:danger="danger && !success"
		:success="success"
		:size="size"
		:flat="flat"
		@click="$emit('click')"
	>
		<slot />
	</vs-button>
</template>

<script>
export default {
	name: 'MainButton',

	props: {
		size: {
			type: String,
			default: ''
		},
		flat: {
			type: Boolean,
			default: false,
		},
		danger: {
			type: Boolean,
			default: true,
		},
		success: {
			type: Boolean,
			default: false,
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
