<template>
	<div class="results">
		<div v-for="(score, i) in list" :key="i" class="results__item">
			<div class="results__item--accent">
				<div class="pred-number">
					<span
						class="pred"
						:contenteditable="_isEditorPage"
						:style="{ ...styles.pretext, ...styles.prefixColor }"
						@focusout.stop="_emitFieldData($event, 'pretext', i)"
						v-html="score.pretext"
					/>
					<span
						class="number"
						:contenteditable="_isEditorPage"
						:style="{ ...styles.uppercase, ...styles.mainColor }"
						@focusout.stop="_emitFieldData($event, 'uppercase', i)"
						v-html="score.uppercase"
					/>
				</div>
				<span
					class="times"
					:contenteditable="_isEditorPage"
					:style="{ ...styles.lowercase, ...styles.postfixColor }"
					@focusout.stop="_emitFieldData($event, 'lowercase', i)"
					v-html="score.lowercase"
				/>
			</div>
			<div
				class="results__text"
				:contenteditable="_isEditorPage"
				:style="{ ...styles.text, ...styles.descriptionColor }"
				@focusout.stop="_emitFieldData($event, 'text', i)"
				v-html="score.text"
			/>
			<vs-button
				v-if="_isEditorPage && list.length > 1"
				danger
				class="deleteScore"
				@click="_emitDeleteFieldItem(i)"
			>
				Удалить поле
			</vs-button>
		</div>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	layout: 'default',
	mixins: [editorMixin],
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>

.results {
	width: 100%;
	margin: 30px 0 0 0;
	display: flex;
	justify-content: space-between;
	color: #ffffff;
	flex-direction: row;
	flex-wrap: wrap;
	&__item {
		width: 33%;
		display: flex;
		margin: 0 0 30px 0;
		color: #8395ad;
		position: relative;

		&--accent {
			width: 28%;
			min-height: 80px;
			color: #2af2ff;
			font-weight: bold;
			border-right: 2px solid rgba(131, 149, 173, 0.16);
			text-align: right;
			padding: 0 13px 0 0;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.pred-number {
				display: flex;
				align-items: center;
			}

			.pred {
				display: inline-block;
				font-size: 16px;
				line-height: 15px;
			}

			.number {
				display: inline-block;
				font-size: 48px;
				line-height: 15px;
			}
			.times {
				display: block;
				text-align: left;
				margin: 0 0 0 5px;
				font-size: 16px;
				line-height: 25px;
			}
		}

		.deleteScore {
			position: absolute;
			top: -30px;
			left: -30px;
		}
	}
	&__text {
		width: 60%;
		max-width: 108px;
		padding: 0 0 0 21px;
		display: flex;
		align-items: center;
		font-size: 16px;
		line-height: 24px;
		color: #8395ad;
	}
}
</style>
