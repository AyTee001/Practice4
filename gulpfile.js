const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const scssFiles = './scss/*.scss';
const outputCSS = './css/';

function compileSCSS() {
  return gulp
    .src(scssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(outputCSS));
}

function watchSCSS() {
  gulp.watch(scssFiles, compileSCSS);
}

exports.default = gulp.series(compileSCSS, watchSCSS);
