import UploadImages from '@/components/admin/editor/ux-components/ImageUploader';

export default {
	components: { UploadImages },
	props: {
		styles: {
			type: Object,
			default: () => {},
		}
	},

	data() {
		return {
			listItemValue: '',
		};
	},

	computed: {
		_isEditorPage() {
			return this.$route.name === 'admin-cases-editor-id';
		},
	},

	methods: {
		// все методы ниже - эмиты в LogicWrapper для сохранения изменений
		//
		// эмит значения едитбл поля
		_emitFieldData({ target } = '', prop, indx) {
			if (indx !== 'undefined' && prop) {
				this.$emit('save-field', {
					value: typeof target === 'undefined' ? 'Текст' : target.innerHTML,
					prop,
					indx
				});
			} else if (indx !== 'undefined') {
				this.$emit('save-field', {
					value: typeof target === 'undefined' ? 'Текст' : target.innerHTML,
					indx
				});
			}	else {
				this.$emit('save-field', {
					value: typeof target === 'undefined' ? 'Текст' : target.innerHTML,
					prop
				});
			}
		},
		// эмит загруженного изображения
		_emitSaveImage(image, i) {
			if (typeof i !== 'undefined') {
				this.$emit('save-image', { image, index: i });
			} else {
				this.$emit('save-image', image);
			}
		},
		// эмит удаления поля в спископодобных компонентах(при необходимости расширить для других компонентов)
		_emitDeleteFieldItem(index, propName) {
			this.$emit('delete-field', { index });
		}
	}
};
