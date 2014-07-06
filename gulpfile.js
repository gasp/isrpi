var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', ['lint', 'test']);

gulp.task('test', function () {
    gulp.src('spec/test.js')
        .pipe(jasmine());
});

gulp.task('lint', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});