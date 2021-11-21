const { src, dest, watch, parallel } = require('gulp');

const scss  = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;

function browsersync() {
  browserSync.init({
    server : {
      baseDir: 'museum/'
    }
  });
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'museum/js/main.min.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('museum/js'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('museum/scss/**/*.scss')
  .pipe(scss({outputStyle: 'expanded'}))
  .pipe(concat('style.min.css'))
  .pipe(dest('museum/css'))
  .pipe(browserSync.stream())
}

function watching() {
  watch(['museum/scss/**/*.scss'], styles);
  watch(['museum/js/main.js'], scripts);
  watch(['museum/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;

exports.default = parallel( browsersync, watching);