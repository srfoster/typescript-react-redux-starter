var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  ts = require('gulp-typescript');

gulp.task('typescript', function() {
  console.log('Compiling typescript');

  var tsProject = ts.createProject('tsconfig.json');

  return gulp.src(['server/**/*.ts'])
         .pipe(ts(tsProject)).js
         .pipe(gulp.dest('./deploy/server'))
});

gulp.task('watch', function() {
  gulp.watch('./server/**/*.ts', ['typescript']);
});

gulp.task('serve', ['typescript'], function () {
//  livereload.listen();
  nodemon({
    script: 'deploy/server/node-server.js',
    ext: 'js',
  }).on('restart', function () {
    setTimeout(function () {
//      livereload.changed();
    }, 500);
  });
});

