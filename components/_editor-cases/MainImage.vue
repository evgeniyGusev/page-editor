<template>
	<div class="main-image-wrapper" :style="styles.align">
		<UploadImages
			v-if="_isEditorPage"
			:style="styles.width"
			:src="imageUrl"
			:max="1"
			:upload-msg="'Загрузите или перетащите изображение'"
			:img-prop="imageUrl ? [imageUrl] : []"
			@changed="_emitSaveImage"
		/>
		<img
			v-else
			class="img"
			:style="styles.width" :src="imageUrl"
		/>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	mixins: [editorMixin],

	props: {
		imageUrl: {
			type: String,
			default: ''
		},
	}
};
</script>

<style lang="scss" scoped>
.main-image-wrapper {
	display: flex;
	width: 100%;
}
.img {
	width: 100%;
	height: auto;
}
</style>
