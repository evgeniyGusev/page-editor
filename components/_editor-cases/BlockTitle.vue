<template>
	<div>
		<h4
			class="caseTitle"
			:contenteditable="_isEditorPage"
			:style="{ ...styles.title, ...styles.align, ...styles.color }"
			@focusout.stop="_emitFieldData($event, 'title')"
			v-html="title"
		/>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	mixins: [editorMixin],

	props: {
		title: {
			type: String,
			default: 'заголовок блока'
		}
	}
};
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}
.caseTitle {
	font-weight: bold;
	font-size: 40px;
	line-height: 56px;
	letter-spacing: 0.01em;
}

@media screen and (max-width: $tablet-break) {
	.caseTitle {
		font-size: 18px;
		line-height: 32px;
		margin-bottom: 40px;
	}
}

.dark {
	color: $gray-9;
}

.light {
	color: $gray-1;
}
</style>
