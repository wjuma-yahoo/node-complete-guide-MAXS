const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {
	
	src('./build/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(dest('./public/css'));
	done();
}

function dev( done ) {

	watch('./build/sass/**/*.scss', css);
	done();
}

exports.dev = dev;

