<template>
	<div class="block-preview" @click="addBlock">
		<div class="title">
			{{ data.title }}
		</div>
		<div class="preview">
			<img :src="data.preview" :alt="data.name" class="image" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'BlockPreview',
	props: {
		data: {
			type: Object,
			default: () => {}
		}
	},

	methods: {
		addBlock() {
			this.$store.dispatch('editor/setPageComponents', this.data);
			this.$store.commit('editor/SET_ADD_BLOCK_MODAL_STATUS', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.block-preview {
	flex-basis: 23%;
	margin: 0 5px 15px;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.25s;

	&:hover {
		box-shadow: 0 0 5px 0 #444;
	}

	.title {
		margin-bottom: 15px;
		text-align: center;
	}

	.preview {
		max-width: 100%;
		border: 1px solid gold;
		border-radius: 6px;

		.image {
			width: 100%;
			height: 100%;
			border-radius: 6px;
			object-fit: cover;
		}
	}
}
</style>
