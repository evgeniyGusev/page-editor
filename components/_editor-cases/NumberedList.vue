<template>
	<ol>
		<li v-for="(li, i) in list" :key="i">
			<span
				:contenteditable="_isEditorPage"
				:style="{ ...styles.text, ...styles.color }"
				@focusout.stop="_emitFieldData($event, null, i)"
				v-html="li"
			/>
			<main-button
				v-if="_isEditorPage && list.length > 1"
				:size="'small'"
				@click="_emitDeleteFieldItem(i)"
			>
				Удалить поле
			</main-button>
		</li>
	</ol>
</template>

<script>
import editorMixin from '@/mixins/editor';
import MainButton from "~/components/admin/editor/ux-components/MainButton";

export default {
	components: {MainButton},
	layout: 'default',
	mixins: [editorMixin],
	props: {
		list: {
			type: Array,
			default: () => [],
		}
	}
};
</script>

<style lang="scss" scoped>
ul,
ol {
	list-style-type: none;
}
ol {
	counter-reset: my-counter;
	margin: 0 0 30px 0;
	li {
		max-width: 900px;
		position: relative;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		padding: 0 0 0 50px;
		margin: 0 0 8px 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	li::before {
		position: absolute;
		left: 24px;
		font-weight: 800;
		color: dodgerblue;
		content: counter(my-counter);
		counter-increment: my-counter;
	}
}
</style>
