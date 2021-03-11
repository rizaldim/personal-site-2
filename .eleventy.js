const dayjs = require('dayjs');

module.exports = config => {
	config.addPassthroughCopy('./src/images/');
	config.addPassthroughCopy('./src/style/');

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

