<template>
	<div class="padding">
		<div class="main-gray">
			<div class="wrapper">
				<div class="flex-wrapper">
					<div class="image-block">
						<UploadImages
							v-if="_isEditorPage"
							:max="1"
							:upload-msg="'Загрузите или перетащите изображение'"
							:img-prop="imageUrl ? [imageUrl] : []"
							@changed="_emitSaveImage"
						/>
						<img v-else class="image-phone" :src="imageUrl" />
					</div>

					<div class="reach-goal">
						<h2
							:contenteditable="_isEditorPage"
							:style="{ ...styles.title, ...styles.titleColor }"
							@focusout.stop="_emitFieldData($event, 'title')"
							v-html="title"
						/>
						<ul>
							<li v-for="(li, i) in list" :key="i">
								<span
									:contenteditable="_isEditorPage"
									:style="{ ...styles.itemSize, ...styles.itemColor }"
									@focusout.stop="_emitFieldData($event, null, i)"
									v-html="li"
								/>
								<main-button
									v-if="_isEditorPage && list.length > 1"
									:size="'small'"
									@click="_emitDeleteFieldItem(i)"
								>
									Удалить поле
								</main-button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import editorMixin from '@/mixins/editor';
import MainButton from '@/components/admin/editor/ux-components/MainButton';

export default {
	components: { MainButton },
	layout: 'default',

	mixins: [editorMixin],
	props: {
		title: {
			type: String,
			default: ''
		},
		list: {
			type: Array,
			default: () => []
		},
		imageUrl: {
			type: String,
			default: ''
		},
	}
};
</script>

<style lang="scss" scoped>
.padding {
	padding: 100px 0;
}
.main-gray {
	* {
		padding: 0;
		margin: 0;
	}
	position: relative;
	width: 100%;
	z-index: 3;

	.wrapper {
		margin: 0 auto;
		max-width: 1150px;

		.flex-wrapper {
			position: relative;
			display: flex;
			flex-direction: row;

			.image-block {
				width: 50%;
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				.image-phone {
					filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.2));
					display: block;
					width: 355px;
					position: absolute;
					top: -80px;
				}
			}

			.reach-goal {
				width: 50%;
				padding: 40px 0;
				h2 {
					font-weight: bold;
					font-size: 40px;
					line-height: 46px;
					margin: 0 0 50px 0;
				}
				ul {
					list-style: none;
					padding: 0 0 0 20px;
					li {
						position: relative;
						font-weight: normal;
						font-size: 16px;
						line-height: 30px;
						padding: 0 30px 0 24px;
						margin: 0 0 30px 0;
					}

					li::before {
						position: absolute;
						content: '';
						display: block;
						width: 20px;
						height: 20px;
						left: -20px;
						top: 5px;
						background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0C4.4 0 0 4.4 0 10C0 15.6 4.4 20 10 20C15.6 20 20 15.6 20 10C20 4.4 15.6 0 10 0ZM15.4 8.4L9.4 14.4C9 14.8 8.6 15 8 15C7.4 15 7 14.8 6.6 14.4L4.6 12.4C3.8 11.6 3.8 10.4 4.6 9.6C5.4 8.8 6.6 8.8 7.4 9.6L8 10.2L12.6 5.6C13.4 4.8 14.6 4.8 15.4 5.6C16.2 6.4 16.2 7.8 15.4 8.4Z' fill='%232AF2FF'/%3E%3C/svg%3E%0A");
					}
				}

				.h4 {
					padding: 0;
					margin: 0 0 27px 0;
					font-size: 16px;
					line-height: 30px;
					letter-spacing: 0.01em;
					font-weight: normal;
				}
			}
		}
	}
}

.quote {
	display: block;
	padding: 40px 50px;
	font-weight: normal;
	font-size: 18px;
	line-height: 32px;
	width: 80%;
}
.center {
	text-align: center;
}
@media screen and (max-width: $desktop-width) {
	.padding {
		padding: 0;
		background-color: white;
	}
	.main-gray {
		position: relative;
		width: 100%;
		background-color: slategray;
		height: unset;

		.wrapper {
			margin: 0 auto;
			max-width: 1042px;

			.flex-wrapper {
				position: relative;
				display: flex;
				flex-direction: column;

				.image-block {
					position: relative;

					width: 100%;
					height: 550px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 0 0 60px 0;
					.image-phone {
						display: block;
						width: 60%;
						max-width: 400px;
						transform: rotateY(0deg) translate(-50%, 0%);
						transition: 1s;
						position: absolute;
						top: -40px;
						left: 50%;
					}
				}

				.reach-goal {
					width: 80%;
					padding: 0 0 90px 0;
					margin: 0 auto;

					ul {
						list-style: none;
						padding: 0;
						li {
							position: relative;
							font-weight: normal;
							font-size: 16px;
							line-height: 30px;
							padding: 0 0px 0 24px;
							margin: 0 0 21px 0;
						}

						li::before {
							position: absolute;
							content: '';
							display: block;
							width: 20px;
							height: 20px;
							left: -20px;
							top: 5px;
							background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0C4.4 0 0 4.4 0 10C0 15.6 4.4 20 10 20C15.6 20 20 15.6 20 10C20 4.4 15.6 0 10 0ZM15.4 8.4L9.4 14.4C9 14.8 8.6 15 8 15C7.4 15 7 14.8 6.6 14.4L4.6 12.4C3.8 11.6 3.8 10.4 4.6 9.6C5.4 8.8 6.6 8.8 7.4 9.6L8 10.2L12.6 5.6C13.4 4.8 14.6 4.8 15.4 5.6C16.2 6.4 16.2 7.8 15.4 8.4Z' fill='%232AF2FF'/%3E%3C/svg%3E%0A");
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: $tablet-break) {
	.main-gray {
		position: relative;
		width: 100%;
		background-color: gray;
		height: unset;

		.wrapper {
			margin: 0 auto;
			max-width: 1042px;

			.flex-wrapper {
				position: relative;
				display: flex;
				flex-direction: column;

				.image-block {
					width: 100%;
					height: unset;
					display: block;
					align-items: flex-start;

					.image-phone {
						position: unset;
						display: block;
						width: 80%;
						transition: 1s;
						margin: -100px 0 0 30px;
						left: unset;
						transform: none;
					}
				}

				.reach-goal {
					box-sizing: border-box;
					width: 100%;
					padding: 0 20px 90px;
					margin: 0 auto;
					h2 {
						margin: 0 0 50px 0;
					}
					ul {
						list-style: none;
						li {
							position: relative;
							font-weight: normal;
							font-size: 16px;
							line-height: 30px;
							padding: 0 0px 0 30px;
						}

						li::before {
							position: absolute;
							content: '';
							display: block;
							width: 20px;
							height: 20px;
							left: 0px;
							top: 5px;
							background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0C4.4 0 0 4.4 0 10C0 15.6 4.4 20 10 20C15.6 20 20 15.6 20 10C20 4.4 15.6 0 10 0ZM15.4 8.4L9.4 14.4C9 14.8 8.6 15 8 15C7.4 15 7 14.8 6.6 14.4L4.6 12.4C3.8 11.6 3.8 10.4 4.6 9.6C5.4 8.8 6.6 8.8 7.4 9.6L8 10.2L12.6 5.6C13.4 4.8 14.6 4.8 15.4 5.6C16.2 6.4 16.2 7.8 15.4 8.4Z' fill='%232AF2FF'/%3E%3C/svg%3E%0A");
						}
					}
				}
			}
		}
	}
}
</style>
