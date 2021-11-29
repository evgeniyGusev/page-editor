<template>
	<div class="reviewBlock">
		<p
			class="reviewBlock__txt"
			:contenteditable="_isEditorPage"
			:style="{ ...styles.text, ...styles.textColor }"
			@focusout.stop="_emitFieldData($event, 'text')"
			v-html="text"
		>
		<div class="reviewBlock__sign">
			<span
				class="reviewBlock__name"
				:contenteditable="_isEditorPage"
				:style="{ ...styles.name, ...styles.nameColor }"
				@focusout.stop="_emitFieldData($event, 'name')"
				v-html="name"
			/>
			<span
				class="reviewBlock__post"
				:contenteditable="_isEditorPage"
				:style="{ ...styles.position, ...styles.positionColor }"
				@focusout.stop="_emitFieldData($event, 'position')"
				v-html="position"
			/>
		</div>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	props: {
		text: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		position: {
			type: String,
			default: '',
		},
	},

	mixins: [editorMixin],
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.reviewBlock {
	font-weight: normal;
	font-size: 22px;
	line-height: 42px;
	padding-left: 135px !important;
	p {
		padding: 0 0 10px 0;
	}
	&__name {
		font-size: 13px;
		line-height: 34px;
		color: grey;
	}

	&__post {
		font-weight: bold;
		font-size: 13px;
		line-height: 34px;
		color: dodgerblue;
	}
}
</style>
