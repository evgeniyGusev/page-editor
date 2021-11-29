<template>
	<div class="logic-wrapper">
		<div
			class="component-wrapper"
			:style="wrapperStyles"
		>
			<component
				:is="component.name"
				data-class-component
				:styles="component.styles"
				v-bind="component.editorData"
				@save-field="$saveData"
				@save-image="(data) => $saveImage(data)"
				@delete-field="$deleteField"
			/>
		</div>

		<div class="controller">
			<div class="control">
				<vs-button border danger size="small" @click="deleteBlock">
					Удалить
				</vs-button>
				<vs-button success @click="$saveData(null)">
					Сохранить
				</vs-button>
			</div>

			<div v-if="component.rules && component.rules.length" class="rules-wrapper">
				<div v-for="(rule, i) in component.rules" :key="i" class="rules-item">
					<vs-tooltip>
						<template #tooltip>
							{{ rule.description }}
						</template>

						<label class="rule-title">
							<span>{{ rule.title || '' }}</span>

							<vs-button v-if="rule.addButton" size="small" @click="addField">
								Добавить поле
							</vs-button>

							<select v-else-if="rule.type === 'select'" v-model="rulesData[rule.prop]">
								<option v-for="(op, indx) in rule.options" :key="indx" :value="op.value">
									{{ op.name }}
								</option>
							</select>

							<input
								v-else-if="rule.type === 'number' || rule.type === 'text'"
								v-model="rulesData[rule.prop]"
								:type="rule.type"
								:value="rule.value"
							/>

							<input
								v-else-if="rule.type === 'color'"
								v-model="rulesData[rule.prop]"
								:type="rule.type"
								:value="rule.value"
								list="presets"
							/>
							<datalist id="presets">
								<option value="#000000">Черный</option>
								<option value="#ffffff">Белый</option>
								<option value="#2AF2FF">Голубой</option>
								<option value="#0C1125">Синий(фон)</option>
							</datalist>
						</label>
					</vs-tooltip>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import { cloneDeep } from 'lodash';

export default {
	name: 'LogicWrapper',

	props: {
		component: {
			type: Object,
			default: () => {},
		}
	},

	data() {
		return {
			rulesData: this.getDataRules()
		};
	},

	computed: {
		getStylesForSave() {
			const object = {};

			Object.keys(this.component.styles)
				.forEach((key) => {
					console.log(this.component.rules)
					const element = this.component.rules.find((el) => el.prop === key);
					const postfix = element && element.postfix ? element.postfix : '';

					object[key] = {
						[Object.keys(this.component.styles[key])[0]]: this.rulesData[key] + postfix,
					}
				});

			if (object.padding) {
				object.padding.padding = `${object.padding.padding} 0`;
			}

			return object;
		},
		wrapperStyles() {
			if (this.component.name !== 'MainHeader') {
				return {
					...this.component.styles.paddingTop,
					...this.component.styles.paddingBottom,
					...this.component.styles.background
				}
			}

			return {
				...this.component.styles.paddingTop,
				...this.component.styles.paddingBottom,
			}
		}
	},

	watch: {
		rulesData: {
			deep: true,
			handler(val) {
				this.$emit('rules-change', val);
			}
		}
	},

	methods: {
		//
		// Методы с "$" работают так же с событиями компонентов
		//
		$saveData(data) {
			const { editorData } = this.component;

			if (data) {
				const { value, prop, indx } = data;

				// в editorData любое свойство, связанное с хранением списка(блок команды, блок результатов, список)
				// это массив с названием list.
				if (indx > -1  && prop) {
					editorData.list[indx][prop] = value;
				} else if (indx >= 0) {
					editorData.list[indx] = value;
				}else {
					editorData[prop] = value;
				}
			}

			this.$store.dispatch('editor/setPageComponents', {
				editorData,
				styles: this.getStylesForSave
			});
		},
		$deleteField(data) {
			const { editorData } = this.component;
			const { index } = data;

			if (editorData.list.length > 1) {
				editorData.list.splice(index, 1);
			}

			this.$saveData();
		},
		$saveImage(data) {
			if (data.index > -1) {
				if (data.image[0]) {
					const file = data.image[0];
					const fr = new FileReader();
					let result;

					fr.readAsDataURL(file);
					fr.addEventListener('load', () => {
						result = fr.result;

						this.$saveData({
							prop: 'imageUrl',
							value: result,
							indx: data.index
						});
					});
				} else {
					this.$saveData({
						prop: 'imageUrl',
						value: '',
						indx: data.index,
					});
				}

			} else if (data[0]) {
				const file = data[0];
				const fr = new FileReader();
				let result;

				fr.readAsDataURL(file);
				fr.addEventListener('load', () => {
					result = fr.result;

					this.$saveData({
						prop: 'imageUrl',
						value: result,
					});
				});
			} else {
				console.log('мы тут');
				this.$saveData({
					prop: this.component.editorData.imageUrl ? 'imageUrl' : 'images',
					value: this.component.editorData.imageUrl ? '' : [],
				});
			}
		},

		//
		// Методы самого LogicWrapper
		//
		deleteBlock() {
			const { id } = this.component.editorData;

			this.$store.dispatch('editor/deleteBlock', id);
		},
		getDataRules() {
			const object = {};

			Object.keys(this.component.styles)
				.forEach((key) => {
					// берем значения в виде number для инпутов,
					// если это NaN, то берем строку для фона, выравнивания и прочих строковых проперти
					object[key] = isNaN(parseInt(Object.values(this.component.styles[key])[0]))
						? Object.values(this.component.styles[key])[0]
						: parseInt(Object.values(this.component.styles[key])[0]);
				});

			return object;
		},
		addField() {
			const { editorData } = this.component;

			if (typeof editorData.list[0] === 'object') {
				const clonedItem = cloneDeep(editorData.list[0]);
				editorData.list.push(clonedItem);
			} else {
				editorData.list.push(editorData.list[0]);
			}

			this.$store.dispatch('editor/setPageComponents', {
				editorData,
				styles: this.getStylesForSave
			});
		},
	}
};
</script>

<style lang="scss" scoped>
.logic-wrapper {
	position: relative;
	margin-bottom: 20px;
	padding-bottom: 10px;
	box-shadow: 0 3px 3px 0 #777;

	.controller {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
		padding: 10px 10px 0;
		box-shadow: 0 -3px 3px 0 #777;

		.control {
			display: flex;
			align-items: center;
		}

		.rules-wrapper {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			max-width: 75%;
			padding: 10px 10px 0;
			border-radius: 10px;
			border: 1px solid #444;
			box-shadow: 0 2px 8px rgba(33, 64, 89, 0.99);

			.vs-tooltip-content {
				display: flex;
			}

			.rules-item {
				height: 35px;
				display: flex;
				align-items: center;
				font-size: 12px;
				box-shadow: 0 1px 3px #444;
				border-radius: 4px;
				border-left: 0;
				margin-bottom: 10px;
				padding: 0 5px;
				background: #f1f1f1;
				transition: all .25s;

				&:hover {
					box-shadow: 0 0 1px #444;
				}

				&:not(:last-child) {
					margin-right: 10px;
				}

				.rule-title {
					display: flex;
					align-items: center;

					span {
						margin-right: 7px;
					}
				}

				input {
					max-width: 50px;
					cursor: pointer;
				}
			}
		}
	}
}
</style>
