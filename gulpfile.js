var gulp = require('gulp'),
  connect = require('gulp-connect'),
  minifyHTML = require('gulp-minify-html'),
  rename = require("gulp-rename");

gulp.task('serve', function() {
  connect.server({
    root: './'
  });
});

gulp.task('html', function() {
    var opts = {comments:false,spare:true};

  gulp.src('indexDev.html')
    .pipe(minifyHTML(opts))
    .pipe(rename("index.html"))
    .pipe(gulp.dest('./'));
});
