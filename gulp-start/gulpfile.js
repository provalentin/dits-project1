const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');


gulp.task('style', function () {
    gulp.src('src/scss/**/*.scss').
    pipe(sass()).
    pipe(gulp.dest('build/css'))
});

gulp.task('start', function() {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    })
});