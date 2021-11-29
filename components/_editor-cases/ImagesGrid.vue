<template>
	<div class="flex-image-ripple">
		<div v-for="(item, index) in list" :key="index" class="item">
			<div
				v-if="item.title"
				class="title"
				:style="{ ...styles.titleColor, ...styles.title }"
				:contenteditable="_isEditorPage"
				@focusout.stop="_emitFieldData($event, 'title', index)"
			>
				{{ item.title }}
			</div>
			<main-button
				v-if="!item.title && _isEditorPage"
				:size="'small'"
				flat
				success
				@click="_emitFieldData($event, 'title', index)"
			>
				Добавить заголовок
			</main-button>

			<UploadImages
				v-if="_isEditorPage"
				class="image"
				:max="1"
				:upload-msg="'Загрузите или перетащите изображения'"
				:img-prop="item.imageUrl ? [item.imageUrl] : []"
				@changed="(image) => _emitSaveImage(image, index)"
			/>
			<img v-else :src="item.imageUrl" class="image" alt="" />

			<main-button
				v-if="_isEditorPage && list.length > 1"
				:size="'small'"
				flat
				@click="_emitDeleteFieldItem(index)"
			>
				Удалить
			</main-button>
		</div>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';
import MainButton from "@/components/admin/editor/ux-components/MainButton";

export default {
	components: { MainButton },

	mixins: [editorMixin],

	props: {
		list: {
			type: Array,
			default: () => [{
				title: 'Заголовок',
				imageUrl: '',
			}]
		}
	}
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.flex-image-ripple {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: end;

	.item {
		max-width: 95%;
		margin-bottom: 20px;

		&:not(:nth-child(3n)) {
			margin-right: 20px;
		}

		.title {
			margin-bottom: 10px;
		}

		.image {
			width: 100%;
			height: auto;
		}
	}
}
</style>
