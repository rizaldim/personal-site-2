const {dest, src} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sassProcessor = require('gulp-sass');

// We want to be using canonical Sass, rather than node-sass
sassProcessor.compiler = require('sass');

const sass = () => {
	return src('./src/scss/*.scss')
		.pipe(sassProcessor().on('error', sassProcessor.logError))
		.pipe( cleanCSS( { level: 2 } ) )
		.pipe(
			dest(
				'./src/_includes/css',
				{ sourceMaps: true }
			)
		);
};

module.exports = sass;
