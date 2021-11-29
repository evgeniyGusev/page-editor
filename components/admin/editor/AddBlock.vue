<template>
	<div class="wrapper">
		<vs-tooltip right>
			<vs-button class="add-block" primary @click="openModal">
				+
			</vs-button>
			<template #tooltip>
				Добавить новый блок
			</template>
		</vs-tooltip>
		<vs-dialog v-model="isModalShown" scroll overflow-hidden full-screen blur>
			<template #header>
				<h3>
					Выберите блок
				</h3>
			</template>
			<vs-card v-for="(card, i) in previews" :key="i" type="1" @click="addBlock(card)">
				<template #img>
					<img :src="card.preview" alt="card.title" />
				</template>
				<template #text>
					<h3>{{ card.title }}</h3>
				</template>
			</vs-card>
		</vs-dialog>
	</div>
</template>

<script>
import { cloneDeep } from 'lodash';
import BLOCK_PREVIEWS from '~/mock/editor/block_previews';

export default {
	name: 'AddBlock',

	computed: {
		isModalShown: {
			get() {
				return this.$store.state.editor.addBlockModalStatus;
			},
			set() {
				this.$store.commit('editor/SET_ADD_BLOCK_MODAL_STATUS', !this.isModalShown);
			}
		},

		previews() {
			return BLOCK_PREVIEWS;
		}
	},

	methods: {
		openModal() {
			this.$store.commit('editor/SET_ADD_BLOCK_MODAL_STATUS', !this.isModalShown);
		},

		addBlock(data) {
			const clonedData = cloneDeep(data);

			this.$store.dispatch('editor/setPageComponents', clonedData);
			this.$store.commit('editor/SET_ADD_BLOCK_MODAL_STATUS', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.wrapper {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	min-height: 500px;
	margin: 50px 0;

	.add-block {
		width: 100px;
		height: 50px;
		font-size: 24px;
	}
}

::v-deep {
	.vs-dialog {
		&__header {
			border-bottom: 1px solid #e6e6e6;
			h3 {
				margin: 10px 0;
			}
		}

		&__content {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			max-height: 100%;
			background: #f6f6f6;

			&::-webkit-scrollbar {
				width: 6px;
				padding: 0 4px;
			}

			&::-webkit-scrollbar-thumb {
				box-sizing: content-box;
				width: 4px;
				padding: 0 2px;
				background: #e6e6e6;
				border-radius: 6px;
			}

			.vs-card {
				width: 350px;
				height: 200px;
				margin-bottom: 30px;

				&__text {
					border-top: 1px dashed #999;
				}

				&__img {
					height: 150px;
					width: 100%;

					img {
						width: 100%;
						height: 100%;
						object-fit: contain;
					}
				}
			}
		}
	}
}
</style>
