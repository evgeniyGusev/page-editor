<template>
	<div class="team">
		<div
			class="title"
			:style="{ ...styles.title, ...styles.titleColor }"
			:contenteditable="_isEditorPage"
			@focusout.stop="_emitFieldData($event, 'title')"
		>
			{{ title }}
		</div>

		<div class="teamBlock">
			<div v-for="(member, index) in list" :key="index" class="teamBlock__item">
				<UploadImages
					v-if="_isEditorPage"
					:max="1"
					:upload-msg="'Загрузите или перетащите изображение'"
					:img-prop="member.imageUrl ? [member.imageUrl] : []"
					@changed="(image) => _emitSaveImage(image, index)"
				/>
				<img v-else-if="member.imageUrl && !_isEditorPage" class="teamBlock__image" :alt="member.name" :src="member.imageUrl" />
				<div class="teamBlock__txt-flex">
					<p
						class="teamBlock__name"
						:style="{ ...styles.name, ...styles.nameColor }"
						:contenteditable="_isEditorPage"
						@focusout.stop="_emitFieldData($event, 'name', index)"
						v-html="member.name"
					/>
					<p
						class="teamBlock__post"
						:style="{ ...styles.position, ...styles.positionColor }"
						:contenteditable="_isEditorPage"
						@focusout.stop="_emitFieldData($event, 'position', index)"
						v-html="member.position"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	mixins: [editorMixin],
	props: {
		list: {
			type: Array,
			default: () => [
				{
					name: 'Имя',
					position: 'Должность',
					imageUrl: ''
				}
			]
		},
		title: {
			type: String,
			default: 'Команда проекта'
		}
	},
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.team {
	.title {
		max-width: 860px;
		font-weight: 700;
		font-size: 40px;
		line-height: 56px;
		margin-bottom: 50px;
		letter-spacing: .01em;
		padding: 50px 0 0;
	}

	.setup-control {
		display: flex;
	}

	.input-wrapper {
		max-width: 300px;
		padding-left: 50px;
		padding-top: 20px;

		.member-input {
			margin-bottom: 20px;
		}
	}

	.teamBlock {
		font-weight: normal;
		font-size: 12px;
		line-height: 24px;
		font-family: $OpenSans;
		display: flex;
		flex-wrap: wrap;

		&__txt-flex {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&__item {
			width: 50%;
			// border: 1px solid blue;
			display: flex;
			flex-direction: row;

			&:nth-child(odd) {
				padding: 30px 0 30px 138px;
			}

			&:nth-child(even) {
				padding: 30px 0 30px 78px;
			}
		}

		&__image {
			width: 140px;
			height: 140px;
			margin-right: 40px;
			border-radius: 50%;
		}

		&__name {
			font-weight: bold;
			font-size: 16px;
			line-height: 16px;
			margin-bottom: 10px;
		}

		&__post {
			font-weight: normal;
			font-size: 16px;
			line-height: 30px;
		}
	}
}

@media screen and (max-width: $desktop-break) {
	.teamBlock {
		font-weight: normal;
		font-size: 12px;
		line-height: 24px;
		font-family: $OpenSans;
		display: flex;
		flex-wrap: wrap;

		&__txt-flex {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		&__item {
			width: 100%;
			// border: 1px solid blue;
			display: flex;
			flex-direction: row;
			&:nth-child(odd) {
				padding: 30px 0;
			}
			&:nth-child(even) {
				padding: 30px 0;
			}
		}
	}
}
@media screen and (max-width: $tablet-break) {
	.teamBlock {
		font-weight: normal;
		font-size: 12px;
		line-height: 24px;
		font-family: $OpenSans;
		display: flex;
		flex-wrap: wrap;

		&__image {
			width: 70px;
			height: 70px;
			margin-right: 30px;
		}
	}
}
</style>
