<template>
	<div class="image-with-text" :style="styles.direction">
		<div class="image-container">
			<UploadImages
				v-if="_isEditorPage"
				class="image"
				:style="styles.align"
				:max="1"
				:upload-msg="'Загрузите или перетащите изображения'"
				:img-prop="imageUrl ? [imageUrl] : []"
				@changed="_emitSaveImage"
			/>
			<img
				v-else
				:src="imageUrl"
				class="image"
				:style="styles.align"
				alt=""
			/>
		</div>

		<div
			class="text"
			:style="{ ...styles.textColor, ...styles.text }"
			:contenteditable="_isEditorPage"
			@focusout.stop="_emitFieldData($event, 'text')"
		>
			{{ text }}
		</div>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	name: 'ImageWithText',

	mixins: [editorMixin],

	props: {
		imageUrl: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: 'Текст'
		}
	},
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
}

.image-with-text {
	display: flex;
	justify-content: space-between;

	div {
		flex-basis: 49%;
	}

	.image-container {
		.image {
			width: 100%;
			height: auto;
		}
	}
}
</style>
