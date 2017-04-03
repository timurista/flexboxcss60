var postcss = require('gulp-postcss');
// var uglifycss = require('gulp-uglifycss');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var gulp = require('gulp');

gulp.task('css', function () {
    return gulp
        .src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('flexboxgrid60.min.css'))
        .pipe(gulp.dest('./dist'));
});
