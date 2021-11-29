export default async ({ store, route }) => {
	if (!store.state.editor.cases.length) {
		await store.dispatch('editor/fetchCases');
	}

	if (route.params && route.params.id) {
		const currentCase = store.state.editor.cases.find((el) => el.id === route.params.id);

		await store.commit('editor/SET_CURRENT_CASE', currentCase);
	}
}
