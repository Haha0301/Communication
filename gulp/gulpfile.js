'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var Themes = require('gulp-sass-themes');
 
// gulp.task('styles', () => gulp.src('./styles/**/*.scss')
//   .pipe(sassThemes('./styles/themes/_*.scss'))
//   .pipe(sass()).on('error', sass.logError)
//   .pipe(gulp.dest('./dist/styles'))
// );

gulp.task('sass',function () {
	gulp.src('scss/*.scss')
	.pipe(Themes('scss/*.scss'))
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('build/css'));
});

gulp.task('default',['Themes','sass']);