module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:nuxt/recommended'],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'max-len': 0,
		'no-console': 'warn',
		'vue/no-v-html': 0,
		// "unicorn/number-literal-case": 0,
		'no-unused-vars': 'warn'
	}
};
