import { nanoid } from 'nanoid';
import CASES from '@/mock/editor/CASES';

export const state = () => ({
	addBlockModalStatus: false,
	cases: [],
	currentCase: {},
});

export const mutations = {
	SET_ADD_BLOCK_MODAL_STATUS(state, payload) {
		state.addBlockModalStatus = payload;
	},
	SET_PAGE_COMPONENTS(state, payload) {
		state.currentCase.content = payload;
	},
	CHANGE_PAGE_COMPONENTS(state, { index, data, styles }) {
		state.currentCase.content[index].editorData = data;
		state.currentCase.content[index].styles = styles;
	},
	SET_CASES(state, payload) {
		state.cases = payload
	},
	ADD_NEW_CASE(state, payload) {
		state.currentCase = payload;
		state.cases = [
			...state.cases,
			payload
		]
	},
	SET_CURRENT_CASE(state, payload) {
		state.currentCase = payload;
	}
};

export const actions = {
	async setPageComponents({ state, commit }, data) {
		const obj = { ...data };
		const usedElement = state.currentCase.content.find((el) => el.editorData.id === obj.editorData.id);

		if (usedElement && !obj.name) {
			const index = state.currentCase.content.indexOf(usedElement);
			await commit('CHANGE_PAGE_COMPONENTS', {
				index,
				...usedElement,
				data: obj.editorData,
				styles: obj.styles,
			});
		} else {
			const id = nanoid();
			const sortParam =
				new Date()
					.toLocaleDateString()
					.split('.')
					.join('') +
				new Date()
					.toLocaleTimeString()
					.split(':')
					.join('');

			obj.editorData.id = id;
			obj.editorData.createAt = sortParam;
			const newPageComponents = [...state.currentCase.content, obj];

			newPageComponents.sort((a, b) => a.editorData.createAt - b.editorData.createAt);

			await commit('SET_PAGE_COMPONENTS', newPageComponents);
		}

		localStorage.setItem('localCase', JSON.stringify(state.currentCase));
	},

	async deleteBlock({ state, commit }, id) {
		const newPageElements = [...state.currentCase.content];
		const pageElement = newPageElements.indexOf(newPageElements.find((el) => el.editorData.id === id));

		newPageElements.splice(pageElement, 1);
		newPageElements.sort((a, b) => a.id - b.id);

		await commit('SET_PAGE_COMPONENTS', newPageElements);

		localStorage.setItem('pageComponents', JSON.stringify(state.currentCase));
	},

	async fetchCases({ commit }) {
		await commit('SET_CASES', CASES);
	}
};
