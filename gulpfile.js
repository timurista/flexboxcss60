var postcss = require('gulp-postcss');
var uglifycss = require('gulp-uglifycss');
var gulp = require('gulp');

gulp.task('css', function () {
    return gulp
        .src('./src/*.css')
        .pipe(postcss())
        .pipe(uglifycss({'maxLineLen': 80, 'uglyComments': true}))
        .pipe(gulp.dest('./dist'))
});