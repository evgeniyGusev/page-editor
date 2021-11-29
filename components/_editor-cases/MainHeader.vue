<template>
	<div class="main">
		<div class="main__Light">
			<div class="main__row">
				<div class="main__social">
					иконки
				</div>
				<div class="main__info">
					<div class="crumb">
						<ol>
							<li v-for="linkItem in breadcrumbles" :key="linkItem.id">
								<a v-if="linkItem.link" class="crumb-link" :href="linkItem.link" v-html="linkItem.text"/>
								<span v-else class="crumb-link" v-html="linkItem.text"/>
							</li>
						</ol>
					</div>
					<h1
						class="main__title"
						:contenteditable="_isEditorPage"
						:style="styles.title"
						@focusout.stop="_emitFieldData($event, 'title')"
						v-html="title"
					/>
					<p
						class="main__text"
						:contenteditable="_isEditorPage"
						:style="styles.text"
						@focusout.stop="_emitFieldData($event, 'text')"
						v-html="text"
					/>
				</div>
			</div>
		</div>
		<div :class="['main__dark', { _flex: _isEditorPage }]" :style="styles.background">
			<UploadImages
				v-if="_isEditorPage"
				:max="1"
				:upload-msg="'Загрузите или перетащите изображение'"
				:img-prop="imageUrl ? [imageUrl] : []"
				@changed="_emitSaveImage"
			/>
			<img v-else :src="imageUrl" class="main__image" />
		</div>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';

export default {
	name: 'MainHeader',

	mixins: [editorMixin],

	props: {
		title: {
			type: String,
			default: 'Заголовок'
		},
		text: {
			type: String,
			default: 'Текст'
		},
		imageUrl: {
			type: String,
			default: '/img/vprok2020/mainbanner.png'
		},
	},

	computed: {
		breadcrumbles() {
			return [
				{ link: '#', text: 'Главная' },
				{ link: '#', text: 'Страницы' },
				{
					text: this.title
				}
			]
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	padding: 0;
	margin: 0;
}

.main {
	display: flex;
	&__Light {
		width: 50%;
		display: flex;
		justify-content: flex-end;
		background: grey;
	}
	&__row {
		width: 720px;
		height: 100%;
		display: flex;
		justify-content: flex-end;
	}
	&__social {
		width: 144px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__info {
		width: 574px;
		display: flex;
		flex-direction: column;
		padding: 157px 0 0 0;

		.crumb {
			ol {
				list-style-type: none;
				width: 420px;

				li:not(:last-child) {
					padding-right: 30px;
				}

				li {
					display: inline;
					position: relative;

					&:not(:last-child):after {
						content: '';
						top: 8px;
						right: 10px;
						display: block;
						width: 10px;
						height: 7px;
						position: absolute;
						background-repeat: no-repeat;
						background-image: url("data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.56914 0L8 3.42856L4.57028 6.85713L4.16628 6.45428L6.90629 3.71427H0V3.14286H6.90629L4.16514 0.401709L4.56914 0Z' fill='%232AF2FF'/%3E%3C/svg%3E%0A");
					}

					.crumb-link {
						cursor: pointer;
						font-size: 14px;
						line-height: 22px;
						color: grey;
						text-decoration: none;
						:hover {
							transition: all .2s;
							color: grey;
						}
					}
				}
			}
		}
	}
	&__title {
		max-width: 450px;
		margin: 70px 0 0 0;
		font-weight: bold;
		font-size: 40px;
		line-height: 56px;
	}
	&__text {
		max-width: 470px;
		margin: 25px 0 0 0;
		font-size: 24px;
		line-height: 36px;
	}
	&__dark {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 760px;
	}
	&__image {
		max-width: 70%;
		max-height: 100%;
		height: auto;
	}

	._flex {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@media screen and (max-width: 1282px) {
	.main {
		flex-direction: column;
		&__Light {
			width: 100%;
			display: flex;
			justify-content: center;
		}
		&__row {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
		}
		&__social {
			display: none;
		}
		&__info {
			width: 630px;
			display: flex;
			flex-direction: column;
			padding: 142px 0 0 0;

			.crumb {
				ol {
					width: 100%;
				}
			}
		}
		&__title {
			margin: 57px 0 0 0;
			font-size: 32px;
			line-height: 42px;
		}
		&__text {
			max-width: 470px;
			margin: 20px 0 80px 0;
			line-height: 32px;
		}
		&__dark {
			width: 100%;
			height: 670px;
			text-align: center;
		}
		&__image {
			width: auto;
			height: 670px;
		}
	}
}

@media screen and (max-width: 760px) {
	.main {
		&__info {
			width: 100%;
			padding: 132px 20px 0 20px;
		}
		&__dark {
			height: 326px;
		}
		&__image {
			height: 326px;
		}
	}
}

@media screen and (max-width: 500px) {
	.main {
		&__info {.crumb {
			top: -100px;

			ol {
				list-style-type: none;
				width: 100%;

				li:not(:last-child) {
					padding-right: 30px;
				}

				li {
					display: inline-block;
					position: relative;

					&:not(:last-child):after {
						content: '';
						top: 8px;
						right: 10px;
						display: block;
						width: 10px;
						height: 7px;
						position: absolute;
						background-repeat: no-repeat;
						background-image: url("data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.56914 0L8 3.42856L4.57028 6.85713L4.16628 6.45428L6.90629 3.71427H0V3.14286H6.90629L4.16514 0.401709L4.56914 0Z' fill='%232AF2FF'/%3E%3C/svg%3E%0A");
					}

					.crumb-link {
						cursor: pointer;
						font-size: 14px;
						line-height: 22px;
						color: grey;
						text-decoration: none;
						:hover {
							transition: all .2s;
							color: grey;
						}
					}
				}
			}
		}
		}
	}
}
</style>
