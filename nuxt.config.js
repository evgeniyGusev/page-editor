export default {
	mode: 'static',
	server: {
		port: 3000
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Admin',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#000' },
	/*
	 ** Global CSS
	 */
	css: [],
	styleResources: {
		scss: []
	},
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '@/plugins/vueSax.js', ssr: false },
		{ src: '@/plugins/importEditorComponents.js', },
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// '@nuxtjs/eslint-module'
		'@nuxtjs/style-resources'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
	],
	/*
	 ** Build configuration
	 */
	build: {
		transpile: ['dom7'],
		/*
		 ** You can extend webpack config here
		 */
		postcss: {
			plugins: {
				autoprefixer: {}
				// 'postcss-100vh-fix': {},
			}
		},
		extend(config, ctx) {}
	}
};
