const dayjs = require('dayjs');

module.exports = config => {
	// Set directories to pass through to the dist folder
	config.addPassthroughCopy('./src/images/');

	config.addCollection('posts', collection => {
		return collection
			.getFilteredByGlob('./src/posts/*.md');
	});

	config.addNunjucksFilter('formatDate', (value, formatString) => {
		return dayjs(value).format(formatString);
	});

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist'
		}
	};
};

