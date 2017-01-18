// Node looks into the node_modlue directory,
// grabs the gulp package, and assign the content to
// the variable gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create()

// Example task - try typing gulp hello and see what happens
// gulp.task('hello', function() {
//   console.log('Hello World');
// });

// Example 2
// gulp.task('task-name', function() {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin())          // Send it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination
// })

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);

});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', '[sass]');
})
