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
	font-family: $OpenSans;
	padding-left: 135px !important;
	background-image: url("data:image/svg+xml,%3Csvg width='75' height='46' viewBox='0 0 75 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.700001 43.65L0.232782 43.4719L0.200001 43.5579V43.65H0.700001ZM0.700001 45.15H0.200001V45.65H0.700001V45.15ZM25.75 45.15V45.65H26.1328L26.2327 45.2805L25.75 45.15ZM37.75 0.749998L38.2327 0.880452L38.4031 0.249998H37.75V0.749998ZM17.05 0.749998V0.249998H16.7055L16.5828 0.571932L17.05 0.749998ZM36.7 43.65L36.2328 43.4719L36.2 43.5579V43.65H36.7ZM36.7 45.15H36.2V45.65H36.7V45.15ZM61.75 45.15V45.65H62.1328L62.2327 45.2805L61.75 45.15ZM73.75 0.749998L74.2327 0.880452L74.4031 0.249998H73.75V0.749998ZM53.05 0.749998V0.249998H52.7055L52.5828 0.571932L53.05 0.749998ZM0.200001 43.65V45.15H1.2V43.65H0.200001ZM0.700001 45.65H25.75V44.65H0.700001V45.65ZM26.2327 45.2805L38.2327 0.880452L37.2673 0.619543L25.2673 45.0195L26.2327 45.2805ZM37.75 0.249998H17.05V1.25H37.75V0.249998ZM16.5828 0.571932L0.232782 43.4719L1.16722 43.8281L17.5172 0.928063L16.5828 0.571932ZM36.2 43.65V45.15H37.2V43.65H36.2ZM36.7 45.65H61.75V44.65H36.7V45.65ZM62.2327 45.2805L74.2327 0.880452L73.2673 0.619543L61.2673 45.0195L62.2327 45.2805ZM73.75 0.249998H53.05V1.25H73.75V0.249998ZM52.5828 0.571932L36.2328 43.4719L37.1672 43.8281L53.5172 0.928063L52.5828 0.571932Z' fill='%238395AD'/%3E%3C/svg%3E%0A");
	background-repeat: no-repeat;
	background-position: left 40px;
	p {
		padding: 0 0 10px 0;
	}
	&__name {
		font-size: 13px;
		line-height: 34px;
		color: $gray-5;
	}

	&__post {
		font-weight: bold;
		font-size: 13px;
		line-height: 34px;
		color: $primary-3;
	}
}

@media screen and (max-width: $desktop-break) {
	.reviewBlock {
		padding: 0 60px 60px 135px;
	}
}
@media screen and (max-width: $tablet-break) {
	.reviewBlock {
		padding: 100px 0px 60px 0px;
		background-position: left 30px;
	}
}
</style>
