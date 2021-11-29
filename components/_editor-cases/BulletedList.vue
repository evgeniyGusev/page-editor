<template>
	<div :style="{ ...styles.background, ...styles.padding }">
		<ul>
			<li
				v-for="(item, i) in list"
				:key="i"
				:contenteditable="_isEditorPage"
				:style="{ ...styles.text, ...styles.color }"
				@focusout.stop="_emitFieldData($event, null, i)"
				v-html="item"
			/>
		</ul>
	</div>
</template>

<script>
import editorMixin from "~/mixins/editor";

export default {
	layout: 'default',
	mixins: [editorMixin],
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
};
</script>

<style lang="scss" scoped>
.darkBg {
	color: grey;
}

.lightBg {
	color: grey;
}
* {
	box-sizing: border-box;
}
ul {
	padding: 0 0 0 30px;
	list-style: none;
	width: 70%;

	li {
		font-size: 18px;
		line-height: 1.1;
		font-weight: normal;
		position: relative;
		margin: 0 0 30px 0;
		&::before {
			content: '';
			position: absolute;
			display: block;
			width: 8px;
			height: 8px;
			background-color: dodgerblue;
			left: -30px;
			top: 50%;
			transform: translateY(-50%);
			border-radius: 50%;
		}
	}
}
</style>
