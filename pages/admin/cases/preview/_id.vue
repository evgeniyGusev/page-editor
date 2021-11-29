<template>
	<div class="wrapper">
		<vs-button
			class="back-button"
			warn
			size="large"
			@click="goBack"
		>
			Назад
		</vs-button>

		<template v-for="(component, i) in currentCase.content">
			<div
				:key="i"
				class="component-wrapper"
				:style="getWrapperStyles(component.name, component.styles)"
			>
				<component
					:is="component.name"
					data-class-component
					v-bind="component.editorData"
					:styles="component.styles"
				/>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: "Preview",

	middleware: 'admin/cases',

	computed: {
		currentCase() {
			return this.$store.state.editor.cases.find(el => el.id === this.$route.params.id);
		}
	},

	methods: {
		getWrapperStyles(name, styles) {
			if (name !== 'MainHeader') {
				return {
					...styles.paddingTop,
					...styles.paddingBottom,
					...styles.background
				}
			}

			return {
				...styles.paddingTop,
				...styles.paddingBottom,
			}
		},
		goBack() {
			this.$router.go(-1);
		}
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	padding-top: 114px;

	.back-button {
		z-index: 999;
		position: fixed;
		top: 120px;
		left: -20px;
		padding: 10px 0 10px 10px;
	}
}
</style>
