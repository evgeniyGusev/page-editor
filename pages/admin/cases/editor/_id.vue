<template>
	<div class="editor">
		<client-only>
			<main-button
				success
				size="large"
				@click="sidebarStatusHandler"
			>
				Меню
			</main-button>
			<vs-button
				class="back-button"
				warn
				size="large"
				@click="goBack"
			>
				Назад
			</vs-button>

			<keep-alive>
				<editor-sidebar
					:is-active="sidebarStatus"
					:fields="getCurrentCaseFields"
					@close="sidebarStatusHandler"
				/>
			</keep-alive>

			<template v-for="(component, i) in pageComponents">
				<logic-wrapper
					:key="i"
					:component="component"
				/>
			</template>

			<add-block />

			<admin-confirm
				:is-shown="isGoBackConfirmShow"
				:text="getGoBackConfirmText"
				@positive="goBackHandler"
				@negative="closeConfirm"
			/>
		</client-only>
	</div>
</template>

<script>
import AddBlock from '~/components/admin/editor/AddBlock';
import LogicWrapper from "~/components/admin/editor/LogicWrapper";
import MainButton from "~/components/admin/editor/ux-components/MainButton";
import EditorSidebar from "~/components/admin/editor/EditorSidebar";
import AdminConfirm from "~/components/admin/general/AdminConfirm";

export default {
	name: "EditCase",

	components: {
		AdminConfirm,
		EditorSidebar,
		LogicWrapper,
		AddBlock,
		MainButton
	},

	layout: 'editorLayout',

	middleware: 'admin/cases',

	data() {
		return {
			sidebarStatus: false,
			isGoBackConfirmShow: false,
		}
	},

	computed: {
		getCurrentCase() {
			return this.$store.state.editor.currentCase;
		},
		pageComponents() {
			return this.getCurrentCase.content || [];
		},
		getCurrentCaseFields() {
			return {
				title: this.getCurrentCase.title,
				slug: this.getCurrentCase.slug,
				subtitle: this.getCurrentCase.subtitle,
				sta: this.getCurrentCase.sta,
				background: this.getCurrentCase.background_color,
				logo: this.getCurrentCase.logo,
				preview: this.getCurrentCase.preview,
			}
		},
		getGoBackConfirmText() {
			return `выйти из редактора? Все несохраненные данные будут потеряны!`
		}
	},

	async beforeMount() {
		const localCase = await JSON.parse(localStorage.getItem('localCase'));

		if (localCase && localCase.id === this.getCurrentCase.id) {
			this.$store.commit('editor/SET_CURRENT_CASE', localCase);
		}
	},

	methods: {
		sidebarStatusHandler() {
			this.sidebarStatus = !this.sidebarStatus;
		},
		goBack() {
			if (localStorage.getItem('notShowEditorConfirm')) {
				this.goBackHandler();
			} else {
				this.isGoBackConfirmShow = !this.isGoBackConfirmShow;
			}
		},
		goBackHandler() {
			localStorage.removeItem('localCase');
			this.$router.push('/admin/cases');
		},
		closeConfirm() {
			this.isGoBackConfirmShow = !this.isGoBackConfirmShow;
		}
	}
}
</script>

<style lang="scss" scoped>
.component {
	margin-bottom: 20px;
}

.vs-button {
	z-index: 999;
	position: fixed;
	top: 10px;
	left: -18px;
	padding: 10px 0 10px 10px;
}

.back-button {
	z-index: 999;
	position: fixed;
	top: 82px;
	left: -20px;
	padding: 10px 0 10px 10px;
}

.buttons-wrapper {
	position: fixed;
	bottom: 20px;
	left: 20px;
	background: #fff;

	.save-button {
		padding: 5px 15px;
		background: #2187fc;
		border: 1px solid #444;
		border-radius: 6px;
		color: #fff;
		cursor: pointer;
		box-shadow: 0 0 4px 0 #000;
		transition: all 0.2s;

		&:hover {
			background: #02bffa;
		}
	}

	.present-link {
		margin-left: 20px;
	}
}
</style>
