module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};