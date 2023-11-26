module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,js,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};