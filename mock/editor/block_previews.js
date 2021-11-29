const data = [
	{
		name: "MainHeader",
		title: "Блок с шапкой",
		preview: "/img/editor/block_previews/MainHeader.png",
		editorData: {
			title: "Заголовок",
			text: "Текст",
			imageUrl: ""
		},
		rules: [
			{
				title: "Заголовок",
				description: "Размер шрифта заголовка",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "title",
				value: 40
			},
			{
				title: "Текст",
				description: "Размер шрифта текста под заголовком",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text",
				value: 24
			},
		],
		styles: {
			title: {
				fontSize: "40px"
			},
			text: {
				fontSize: "24px"
			}
		}
	},
	{
		name: "ScoresBlock",
		title: "Блок с результатами",
		preview: "/img/editor/block_previews/ScoresBlock.png",
		editorData: {
			list: [
				{
					pretext: "на",
					uppercase: "2,7%",
					lowercase: "в год",
					"text" : "снизилась инфляция"
				}
			]
		},
		rules: [
			{
				addButton: true,
				description: 'Добавить поле'
			},
			{
				title: "Префикс",
				description: "Размер шрифта",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "pretext"
			},
			{
				title: "Цвет Префикса",
				description: "Цвет Префикса",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "prefixColor"
			},
			{
				title: "Осн. текст",
				description: "Размер шрифта",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "uppercase"
			},
			{
				title: "Цвет Осн.",
				description: "Цвет основного текста",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "mainColor"
			},
			{
				title: "Постфикс",
				description: "Размер шрифта",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "lowercase"
			},
			{
				title: "Цвет пост.",
				description: "Цвет текста постфикса",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "postfixColor"
			},
			{
				title: "Описание",
				description: "Размер шрифта",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text"
			},
			{
				title: "Цвет описания",
				description: "Цвет текста описания",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "descriptionColor"
			},
		],
		styles: {
			pretext: {
				fontSize: "18px"
			},
			uppercase: {
				fontSize: "48px"
			},
			lowercase: {
				fontSize: "18px"
			},
			text: {
				fontSize: "16px"
			},
			prefixColor: {
				color: "#000000"
			},
			mainColor: {
				color: "#000000"
			},
			postfixColor: {
				color: "#000000"
			},
			descriptionColor: {
				color: "#000000"
			},
		}
	},
	{
		name: "TextAlign",
		title: "Текст",
		preview: "/img/editor/block_previews/TextAlignLeft.png",
		editorData: {
			text: "Текст"
		},
		rules: [
			{
				title: "Текст",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text"
			},
			{
				title: "Цвет",
				description: "Цвет текста",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "color"
			},
			{
				title: "Выравнивание",
				description: "Выравнивание",
				value: "left",
				property: "textAlign",
				type: "select",
				postfix: "",
				prop: "align",
				options: [
					{
						value: "left",
						name: "Слева",
					},
					{
						value: "center",
						name: "По центру",
					},
					{
						value: "right",
						name: "Справа",
					}]
			}
		],
		styles: {
			text: {
				fontSize: "16px"
			},
			align: {
				textAlign: "left"
			},
			color: {
				color: "#000000"
			},
		}
	},
	{
		name: "BlockTitle",
		title: "Заголовок",
		preview: "/img/editor/block_previews/BlockTitle.png",
		editorData: {
			title: "Заголовок"
		},
		rules: [
			{
				title: "Заголовок",
				description: "Размер шрифта",
				value: "40",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "title"
			},
			{
				title: "Цвет",
				description: "Цвет заголовка",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "color"
			},
			{
				title: "Выравнивание",
				description: "Выравнивание",
				value: "left",
				property: "textAlign",
				type: "select",
				postfix: "",
				prop: "align",
				options: [
					{
						value: "left",
						name: "Слева",
					},
					{
						value: "center",
						name: "По центру",
					},
					{
						value: "right",
						name: "Справа",
					}]
			}
		],
		styles: {
			title: {
				fontSize: "40px"
			},
			align: {
				textAlign: "left"
			},
			color: {
				color: "#000000"
			},
		}
	},
	{
		name: "MainImage",
		title: "Картинка",
		preview: "/img/editor/block_previews/ImageFullWidth.png",
		editorData: {
			imageUrl: ""
		},
		rules: [
			{
				title: "Ширина",
				description: "Ограниченная ширина картинки",
				value: "100",
				property: "width",
				type: "number",
				prop: "width",
				postfix: "px"
			},
			{
				title: "Выравнивание",
				description: "Выравнивание",
				value: "flex-start",
				property: "justifyContent",
				type: "select",
				prop: "align",
				options: [
					{
						value: "flex-start",
						name: "Слева",
					},
					{
						value: "center",
						name: "По центру",
					},
					{
						value: "flex-end",
						name: "Справа",
					}
				]
			},
		],
		styles: {
			width: {
				width: "100px"
			},
			align: {
				justifyContent: "flex-start",
			},
		}
	},
	{
		name: "GoalsBlock",
		title: "Картинка с заголовком и списком",
		preview: "/img/editor/block_previews/GoalsBlock.png",
		editorData: {
			title: "Заголовок",
			list: ["Пункт списка"],
			imageUrl: ""
		},
		rules: [
			{
				addButton: true,
				description: 'Добавить поле'
			},
			{
				title: "Заголовок",
				description: "Размер шрифта",
				value: "24",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "title"
			},
			{
				title: "Цвет заголовка",
				description: "Цвет заголовка",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "titleColor"
			},
			{
				title: "Список",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "itemSize"
			},
			{
				title: "Цвет списка",
				description: "Цвет элемента списка",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "itemColor"
			},
		],
		styles: {
			title: {
				fontSize: "24px"
			},
			titleColor: {
				color: '#000000',
			},
			itemSize: {
				fontSize: '16px',
			},
			itemColor: {
				color: '#000000',
			}
		}
	},
	{
		name: "UnnumberedList",
		title: "Список",
		preview: "/img/editor/block_previews/UnnumberedList.png",
		editorData: {
			list: ["Пункт списка"]
		},
		rules: [
			{
				addButton: true,
				description: 'Добавить поле'
			},
			{
				title: "Текст",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text"
			},
			{
				title: "Цвет",
				description: "Цвет текста",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "color"
			},
		],
		styles: {
			text: {
				fontSize: "16px"
			},
			color: {
				color: "#000000"
			},
		}
	},
	{
		name: "NumberedList",
		title: "Нумерованный Список",
		preview: "/img/editor/block_previews/NumberedList.png",
		editorData: {
			list: ["Пункт списка"]
		},
		rules: [
			{
				addButton: true,
				description: 'Добавить поле'
			},
			{
				title: "Текст",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text"
			},
			{
				title: "Цвет",
				description: "Цвет текста",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "color"
			},
		],
		styles: {
			text: {
				fontSize: "16px"
			},
			color: {
				color: "#000000"
			},
		}
	},
	{
		name: "BulletedList",
		title: "Список c точками",
		preview: "/img/editor/block_previews/BulletedList.png",
		editorData: {
			list: ["Пункт списка"]
		},
		rules: [
			{
				addButton: true,
				description: 'Добавить поле'
			},
			{
				title: "Текст",
				description: "Размер шрифта",
				value: "18",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text"
			},
			{
				title: "Цвет",
				description: "Цвет текста",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "color"
			},
		],
		styles: {
			text: {
				fontSize: "18px"
			},
			color: {
				color: "#000000"
			},
		}
	},
	{
		name: "TeamBlock",
		title: "Команда проекта",
		preview: "/img/editor/block_previews/ProjectTeam.png",
		editorData: {
			list: [
				{
					name: 'Имя',
					position: 'Должность',
					imageUrl: ''
				},
			],
			title: 'Команда проекта'
		},
		rules: [
			{
				addButton: true,
				description: 'Добавить поле'
			},
			{
				title: "Заголовок",
				description: "Размер шрифта",
				value: "40",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "title"
			},
			{
				title: "Заголовок",
				description: "Цвет заголовка",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "titleColor"
			},
			{
				title: "Имя",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "name"
			},
			{
				title: "Имя",
				description: "Цвет имени",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "nameColor"
			},
			{
				title: "Должность",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "position"
			},
			{
				title: "Должность",
				description: "Цвет должности",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "positionColor"
			},
		],
		styles: {
			title: {
				fontSize: "40px"
			},
			name: {
				fontSize: "16px"
			},
			position: {
				fontSize: "16px"
			},
			titleColor: {
				color: "#000000"
			},
			nameColor: {
				color: "#000000"
			},
			positionColor: {
				color: "#000000"
			}
		}
	},
	{
		name: "ImagesGrid",
		title: "Сетка изображений (от 1 до бесконечности)",
		preview: "/img/editor/block_previews/FlexImageTripple.png",
		editorData: {
			title: "Заголовок",
			list: [{
				title: 'Заголовок',
				imageUrl: '',
			}]
		},
		rules: [
			{
				addButton: true,
				description: 'Добавить поле'
			},
			{
				title: "Заголовок",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "title"
			},
			{
				title: "Заголовок",
				description: "Цвет заголовка",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "titleColor"
			},
		],
		styles: {
			title: {
				fontSize: "16px"
			},
			titleColor: {
				color: "#000000"
			},
		}
	},
	{
		name: "ReviewBlock",
		title: "Цитата",
		preview: "/img/editor/block_previews/ReviewBlock.png",
		editorData: {
			text: 'Текст',
			name: 'Имя',
			position: 'Должность'
		},
		rules: [
			{
				title: "Текст",
				description: "Размер шрифта",
				value: "22",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text"
			},
			{
				title: "Текст",
				description: "Цвет текста",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "textColor"
			},
			{
				title: "Имя",
				description: "Размер шрифта",
				value: "13",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "name"
			},
			{
				title: "Имя",
				description: "Цвет имени",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "nameColor"
			},
			{
				title: "Должность",
				description: "Размер шрифта",
				value: "13",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "position"
			},
			{
				title: "Должность",
				description: "Цвет должности",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "positionColor"
			},
		],
		styles: {
			text: {
				fontSize: "22px"
			},
			name: {
				fontSize: "13px"
			},
			position: {
				fontSize: "13px"
			},
			textColor: {
				color: "#000000"
			},
			nameColor: {
				color: "#000000"
			},
			positionColor: {
				color: "#000000"
			},
		}
	},
	{
		name: "ImageWithText",
		title: "Картинка с текстом",
		preview: "/img/editor/block_previews/ImageWithText.png",
		editorData: {
			imageUrl: "",
			text: "Текст",
		},
		rules: [
			{
				title: "Порядок",
				description: "Порядок элементов",
				value: "row",
				property: "flexDirection",
				type: "select",
				prop: "direction",
				options: [
					{
						value: "row",
						name: "Картинка-Текст",
					},
					{
						value: "row-reverse",
						name: "Текст-картинка",
					},
				]
			},
			{
				title: "Текст",
				description: "Размер шрифта",
				value: "16",
				property: "fontSize",
				type: "number",
				postfix: "px",
				prop: "text"
			},
			{
				title: "Текст",
				description: "Цвет текста",
				value: "#000000",
				property: "color",
				type: "color",
				prop: "textColor"
			},
		],
		styles: {
			direction: {
				flexDirection: "row"
			},
			text: {
				fontSize: "16px"
			},
			textColor: {
				color: "#000000"
			},
		}
	},
]

const defaults = {
	rules: [
		{
			title: "Отступ сверху",
			description: "Отступы от блока сверху",
			property: "paddingTop",
			type: "number",
			postfix: "px",
			prop: "paddingTop",
			value: 0
		},
		{
			title: "Отступ снизу",
			description: "Отступы от блока снизу",
			property: "paddingBottom",
			type: "number",
			postfix: "px",
			prop: "paddingBottom",
			value: 0
		},
		{
			title: "Фон",
			description: "Фон блока",
			property: "background",
			type: "color",
			prop: "background",
			value: "#ffffff"
		}
	],
	styles: {
		paddingTop: {
			paddingTop: 0
		},
		paddingBottom: {
			paddingBottom: 0
		},
		background: {
			background: '#ffffff',
		}
	}
}

const actual = data.map(el => {
	defaults.rules.forEach(rule => el.rules.push(rule));

	Object.entries(defaults.styles).forEach(ent => {
		el.styles[ent[0]] = ent[1];
	});

	return el;
})

export default actual;
