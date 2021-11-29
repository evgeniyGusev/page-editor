<template>
		<p
			class="txt"
			:style="{ ...styles.text, ...styles.align, ...styles.color }"
			:contenteditable="_isEditorPage"
			@focusout.stop="_emitFieldData($event, 'text')"
			v-html="text"
		/>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	name: 'TextAlign',
	layout: 'default',
	mixins: [editorMixin],
	props: {
		text: {
			type: String,
			default: 'Текст'
		}
	}
};
</script>

<style lang="scss" scoped>
.txt {
	width: 100%;
	margin: 0 0 10px 0;
	font-weight: normal;
	font-size: 16px;
	line-height: 1.3;
	color: black;
}

@media screen and (max-width: $desktop-width) {
	.txt {
		max-width: unset;
	}
}
</style>
