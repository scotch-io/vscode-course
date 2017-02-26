const gulp = require('gulp');

// css
gulp.task('styles', () => {
  return gulp.src('./css/*.css')
    .pipe(gulp.dest('./build/css'));
});

// js
gulp.task('scripts', () => {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('./build/js'));
});

// default task
gulp.task('default', ['styles', 'scripts']);