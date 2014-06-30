var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', function () {
    gulp.src('spec/test.js')
        .pipe(jasmine());
});