var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');
var watch = require('gulp-watch');
var watchify = require('watchify');
var plumber = require('gulp-plumber');

var paths = {
  'scss': 'scss/',
  'css': 'css/'
}

gulp.task('scss', function() {
  return gulp.src('scss/style.scss')
        .pipe(plumber())
        .pipe(sass({
          style: 'expanded'
        }))
        .on('error', function(err) {
          console.log(err.message);
        })
        .pipe(cssnext())
        .pipe(gulp.dest(paths.css))
});

gulp.task('watch', ['scss'], function() {
  gulp.watch('scss/style.scss', ['scss']);
});
