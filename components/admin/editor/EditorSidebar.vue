<template>
	<vs-sidebar
		fixed
		:open="isActive"
	>
		<template #header>
			<vs-button
				flat
				size="small"
				class="close-button"
				@click="$emit('close')"
			>
				закрыть
			</vs-button>
			Настройки кейса
		</template>

		<vs-input
			v-for="(el, i) in inputs"
			:key="`input${i}`"
			v-model="form[el.model]"
			state="dark"
			:label="el.label"
			:placeholder="el.holder"
		>
			<template v-if="el.description" #message-warn>
				{{ el.description }}
			</template>
		</vs-input>

		<vs-select
			v-model="form.background"
			label="Цвет фона"
			state="dark"
		>
			<template #message-warn>
				Цвет фона для карточки кейса
			</template>
			<vs-option
				v-for="(color, ci) in colors"
				:key="`color${ci}`"
				:label="color.text"
				:value="color.value"
			>
				<div class="name">
					{{ color.text }}
				</div>
				<div class="color-present" :style="{ background: color.bgc }" />
			</vs-option>
		</vs-select>

		<label v-for="(file, index) in fileInputs" :key="`file${index}`" class="file-label">
			<span class="file-text">
				{{ file.label }}
			</span>

			<img
				v-if="form[file.field]"
				:src="form[file.field]"
				alt=""
				class="file-img"
			>
			<span v-else class="not-img">
				Изображение отсутствует
			</span>
			<vs-button
				v-if="form[file.field]"
				danger
				size="small"
				class="remove-img"
				@click="removeImg(file.field)"
			>
				Удалить
			</vs-button>

			<input
				type="file"
				class="file-input"
				@change="setImg($event, file.field)"
			>
		</label>

		<template #footer>
			<vs-button color="success" @click="saveData">
				Сохранить
			</vs-button>
			<vs-button color="warn">
				Опубликовать
			</vs-button>
			<vs-button @click="getPreview">
				Предпросмотр
			</vs-button>
		</template>
	</vs-sidebar>
</template>

<script>
import { getTranscript } from '@/helpers/admin/getTranscript'

export default {
	name: 'EditorSidebar',

	props: {
		isActive: {
			type: Boolean,
			default: false,
		},
		fields: {
			type: Object,
			default: () => ({
				title: '',
				slug: '',
				subtitle: '',
				sta: '',
				background: '',
				logo: '',
				preview: '',
			}),
		}
	},

	data() {
		return {
			form: {
				title: this.fields.title,
				slug: this.fields.slug,
				subtitle: this.fields.subtitle,
				sta: this.fields.sta,
				background: this.fields.background || '',
				logo: this.fields.logo,
				preview: this.fields.preview,
			},
			colors: [
				{
					text: 'Голубой',
					value: '1',
					bgc: '#0064a6'
				},
				{
					text: 'Красный',
					value: '2',
					bgc: 'red'
				},
				{
					text: 'Оранжевый',
					value: '3',
					bgc: 'orange'
				},
				{
					text: 'Желтый',
					value: '4',
					bgc: 'yellow'
				}
			],
			inputs: [
				{
					model: 'title',
					label: 'Название кейса',
					holder: 'Название',
				},
				{
					model: 'slug',
					label: 'SLUG',
					holder: 'nazvanie',
				},
				{
					model: 'subtitle',
					label: 'Подзаголовок',
					holder: 'Подзаголовок',
					description: 'Подзаголовок для карточки кейса'
				},
				{
					model: 'sta',
					label: 'СТА',
					holder: 'текст',
					description: 'СТА для карточки кейса'
				},
			],
			fileInputs: [
				{
					label: 'Логотип компании',
					field: 'logo',
				},
				{
					label: 'Превью для карточки кейса',
					field: 'preview',
				},
			]
		}
	},

	watch: {
		'form.title'(val) {
			this.form.slug = this.getTranscript(val);
		},
	},

	methods: {
		getTranscript,
		setImg({ target }, field) {
			const file = target.files[0];
			const fr = new FileReader();
			let result;

			if (file) {
				fr.readAsDataURL(file);
				fr.addEventListener('load', () => {
					result = fr.result;

					this.form[field] = result;
				});
			}
		},
		removeImg(field) {
			this.form[field] = '';
		},
		getPreview() {
			this.$router.push({
				name: 'admin-cases-preview-id',
				params: {
					id: this.$store.state.editor.currentCase.id,
				}
			});
		},
		async saveData() {
			const { currentCase, cases } = this.$store.state.editor;
			const currentIndex = cases.indexOf(currentCase);
			const date = new Date();
			const {
				title,
				slug,
				subtitle,
				sta,
				background,
				logo,
				preview,
			} = this.form;

			const newData = {
				title,
				slug,
				subtitle,
				sta,
				background_color: background,
				logo,
				preview,
				timeUpdated: date.toLocaleDateString(),
			}

			const changedCase = {
				...currentCase,
				...newData
			}

			const changedCases = [...cases];
			changedCases[currentIndex] = changedCase;

			localStorage.setItem('localCase', JSON.stringify(changedCase));

			await this.$store.commit('editor/SET_CURRENT_CASE', changedCase);
			await this.$store.commit('editor/SET_CASES', changedCases);

			this.$vs.notification({
				color: 'success',
				position: 'top-center',
				title: 'Изменения сохранены',
			})
		},
	}
};
</script>

<style lang="scss" scoped>
.vs-sidebar-content {
	box-shadow: 0 0 10px #000;
	padding: 0 10px;

	.file-label {
		position: relative;
		max-width: 224px;
		margin-bottom: 15px;
		padding-left: 5px;
		font-size: 12px;
		color: rgb(30, 30, 30);

		&.first {
			margin-top: 10px;
		}

		.file-img {
			width: 100%;
			height: auto;
			object-fit: contain;
		}

		.not-img {
			display: block;
			margin: 5px 0;
			padding: 5px 0;
			border-top: 1px solid orange;
			border-bottom: 1px solid orange;
		}

		.remove-img {
			position: absolute;
			top: 15px;
			right: 0;
		}

		.file-text {
			display: block;
			padding-left: 5px;
		}

		.file-input {
			max-width: 100%;
			margin-top: 5px;
			padding: 7px 5px;
			border-radius: 10px;
			background: #E8E8E8;
		}
	}

	::v-deep {
		.vs-sidebar {
			padding-top: 30px;

			.vs-input-parent {
				width: 100%;
				margin-bottom: 35px;

				.vs-input-content {
					width: 100%;

					input {
						width: 100%;
					}
				}
			}
		}

		.vs-sidebar__header {
			justify-content: flex-start;
			padding: 10px 0;
			border-bottom: 1px solid #444;
		}

		.vs-sidebar__footer {
			display: flex;
			flex-direction: column;
			width: calc(100% + 20px);
			height: 178px;
			transform: translateX(-10px);
			padding: 5px 10px;
			box-shadow: 0 -3px 4px #444;

			.vs-button {
				width: 100%;

			}
		}
	}
}

.vs-select-content {
	width: 100%;
}

.vs-select__option {
	display: flex;
	justify-content: space-between;

	.color-present {
		width: 20px;
		height: 20px;
		align-items: center;
	}
}
</style>
