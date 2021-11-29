<template>
	<vs-dialog v-model="active" width="550px" not-center @close="negativeAnswer">
		<div class="con-content">
			<p>
				Вы действительно хотите {{ text }}
			</p>
			<hr>
			<vs-checkbox v-if="$route.name === 'admin-cases-editor-id'" v-model="notShowAgain">
				Больше не показывать
			</vs-checkbox>
		</div>

		<template #footer>
			<div class="con-footer">
				<vs-button danger flat @click="positiveAnswer">
					Да
				</vs-button>
				<vs-button success @click="negativeAnswer">
					Отмена
				</vs-button>
			</div>
		</template>
	</vs-dialog>
</template>

<script>
export default {
	name: 'AdminConfirm',

	props: {
		text: {
			type: String,
			default: 'удалить?'
		},
		isShown: {
			type: Boolean,
			default: false,
		}
	},

	data() {
		return {
			active: null,
			notShowAgain: false,
		}
	},

	watch: {
		isShown: {
			immediate: true,
			handler(val) {
				this.active = val;
			}
		},
	},

	methods: {
		positiveAnswer() {
			if (this.notShowAgain) {
				localStorage.setItem('notShowEditorConfirm', 'true');
			}
			this.$emit('positive');
		},
		negativeAnswer() {
			this.$emit('negative');
		}
	}
};
</script>

<style lang="scss" scoped>
.vs-dialog-content {
	font-size: 18px;

	::v-deep {
		.vs-dialog__footer {

			.con-footer {
				display: flex;
			}
		}
	}
}
</style>
