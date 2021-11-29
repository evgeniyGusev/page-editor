<template>
	<div class="cases-table">
		<div class="header-controls">
			<vs-input
				v-if="casesToShow.length"
				state="primary"
				type="search"
				v-model="caseNameSearch"
				label="Поиск по названию"
			/>
			<vs-button @click="createNewCase">
				Создать новый кейс
			</vs-button>
		</div>

		<vs-table v-if="casesToShow.length" striped>
			<template #thead>
				<vs-tr>
						<vs-th
							v-for="(item, i) in tHeaders"
							:key="i"
							sort
							@click="sortTable(item.param, $event)"
						>
							{{ item.text }}
					</vs-th>
				</vs-tr>
			</template>

			<template #tbody>
				<vs-tr
					v-for="(item, i) in $vs.getSearch(casesToShow, caseNameSearch)"
					:key="i"
				>
					<vs-td>
						{{ item.title }}
					</vs-td>
					<vs-td>
						{{ item.author }}
					</vs-td>
					<vs-td>
						{{ item.timeCreated }}
					</vs-td>
					<vs-td>
						{{ item.timeUpdated }}
					</vs-td>
					<vs-td :style="{ color: item.published ? 'green' : 'red' }">
						{{ item.published ? 'Опубликован' : 'Не опубликован' }}
					</vs-td>

					<template #expand>
						<div class="con-content">
							<div class="case-brief">
								<vs-avatar>
									<img :src=item.logo alt="logo">
								</vs-avatar>
							</div>
							<div class="case-controls">
								<vs-button flat @click="previewCase(item.id)">
									Предпросмотр
								</vs-button>
								<vs-button flat @click="openPublishStatusConfirm(item.id)">
									Опубликовать/снять с публикации
								</vs-button>
								<vs-button flat @click="editCase(item.id)">
									Редактировать
								</vs-button>
								<vs-button danger @click="openDeleteConfirm(item.id)">
									Удалить
								</vs-button>
							</div>
						</div>
					</template>
				</vs-tr>
			</template>

			<template #notFound>
				Не найдено ни одного кейса
			</template>
		</vs-table>

		<div v-else>
			Пока нет ни одного кейса...
		</div>

		<AdminConfirm
			v-show="isPublishConfirmShown"
			:is-shown="isPublishConfirmShown"
			:text="publishConfirmText"
			@positive="changePublishStatus(currentCaseId)"
			@negative="closeConfirm"
		/>
		<AdminConfirm
			v-show="isDeleteConfirmShown"
			:is-shown="isDeleteConfirmShown"
			:text="deleteConfirmText"
			@positive="deleteCase(currentCaseId)"
			@negative="closeConfirm"
		/>
	</div>
</template>


<script>
import { nanoid } from "nanoid";
import AdminConfirm from "~/components/admin/general/AdminConfirm";

export default {
	name: "CasesPage",
	components: {AdminConfirm},
	layout: 'adminLayout',

	middleware: 'admin/cases',

	data() {
		return {
			caseNameSearch: '',
			publishConfirmText: '',
			isPublishConfirmShown: false,
			deleteConfirmText: '',
			isDeleteConfirmShown: false,
			currentCaseId: '',
			tHeaders: [
				{
					param: 'title',
					text: 'Название',
				},
				{
					param: 'author',
					text: 'Автор',
				},
				{
					param: 'timeCreated',
					text: 'Дата создания',
				},
				{
					param: 'timeUpdated',
					text: 'Дата изменения',
				},
				{
					param: 'published',
					text: 'Статус',
				},
			]
		}
	},

	computed: {
		casesToShow: {
			get() {
				return this.$store.state.editor.cases;
			},
			set(newVal) {
				this.$store.commit('editor/SET_CASES', newVal);
			}
		},
		user() {
			return 'Маша Распутина';
		},
	},

	methods:{
		sortTable(param, event) {
			this.casesToShow = this.$vs.sortData(event ,this.casesToShow, param)
		},
		createNewCase() {
			const date = new Date();
			const newCase = {
				id: nanoid(),
				title: "Название",
				slug: "Слаг",
				subtitle: "",
				sta: "",
				background_color: null,
				logo: "data:image/png;base64,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",
				preview: "",
				author: this.user,
				timeCreated: date.toLocaleDateString(),
				timeUpdated: date.toLocaleDateString(),
				published: false,
				background_image: "",
				content: [],
			}
			this.$store.commit('editor/ADD_NEW_CASE', newCase)
			this.$router.push({
				name: 'admin-cases-editor-id',
				params: {
					id: newCase.id
				}
			});
		},
		previewCase(id) {
			this.$router.push({
				name: 'admin-cases-preview-id',
				params: {
					id
				}
			});
		},
		editCase(id) {
			this.$router.push({
				name: 'admin-cases-editor-id',
				params: {
					id
				}
			});
		},
		openPublishStatusConfirm(id) {
			const current = this.casesToShow.find(el => el.id === id);

			this.currentCaseId = id;
			this.publishConfirmText = current.published
				? `снять кейс '${current.title}' с публикации?`
				: `опубликовать кейс '${current.title}' ?`;
			this.isPublishConfirmShown = true;
		},
		changePublishStatus(id) {
			const current = this.casesToShow.find(el => el.id === id);
			const index = this.casesToShow.indexOf(current);
			const newArray = [ ...this.casesToShow ];

			current.published = !current.published;
			newArray[index] = current;

			this.isPublishConfirmShown = false;
			this.currentCaseId = '';
			this.$store.commit('editor/SET_CASES', newArray);
		},
		openDeleteConfirm(id) {
			const current = this.casesToShow.find(el => el.id === id);

			this.currentCaseId = id;
			this.deleteConfirmText = `удалить кейс '${current.title}'?`;
			this.isDeleteConfirmShown = true;
		},
		async deleteCase(id) {
			const newArray = this.casesToShow.filter(el => el.id !== id);
			await this.$store.commit('editor/SET_CASES', newArray);
			this.isDeleteConfirmShown = false;
			this.deleteConfirmText = '';
		},
		closeConfirm() {
			this.currentCaseId = '';
			this.isPublishConfirmShown = false;
			this.isDeleteConfirmShown = false;
			this.deleteConfirmText = '';
			this.publishConfirmText = '';
		}
	}
}
</script>

<style lang="scss" scoped>
.cases-table {
	::v-deep {
		.header-controls {
			height: 100px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.con-content {
			display: flex;
			justify-content: space-between;
				.case-controls {
				a {
					text-decoration: none;
				}
				display: flex;
				align-items: center;
			}
		}
	}
}

</style>
