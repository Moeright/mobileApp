// 项目的配置文件  记录的是项目的命令
/*
  var 模块名 = require('');
*/
var gulp = require('gulp');
gulp.task('copyhtml',function () {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('copyjs',function () {
  gulp.src('src/js/**/*').pipe(gulp.dest('dist/js'));
});

gulp.task('copyPng',function () {
  gulp.src('src/imgs/*.{jpg,png,gif}').pipe(gulp.dest('dist/imgs'));
});

gulp.task('copyData',function () {
  gulp.src(['src/json/**/*'])
  .pipe(gulp.dest('dist/data'));
});

gulp.task('copyIcon',function () {
  gulp.src(['src/icon/*'])
  .pipe(gulp.dest('dist/icon'));
});

var imgMin = require('gulp-imagemin');
gulp.task('imgMin',function () {
  gulp.src('src/imgs/*')
  .pipe(imgMin())
  .pipe(gulp.dest('dist/imgs'));
});

var jsMin = require('gulp-uglify');
  gulp.task('jsMin',function () {
    gulp.src('src/js/js/*.js')
    .pipe(jsMin())
    .pipe(gulp.dest('dist/js/js'));
  });


var css = require('gulp-sass-china'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
gulp.task('cssMin',function(){
	gulp.src('src/scss/*.{scss,sass}')
  .pipe(plumber({
    errorHandler:notify.onError('Error: <%= error.message %>')
  }))
	.pipe(css({
		outputStyle:'expanded'
	}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('scss',function () {
  gulp.watch('src/scss/*.{scss,sass}',['cssMin']);
});

var connect = require('gulp-connect');
 gulp.task('server',function () {
   connect.server({
      root:'src',
      livereload:true
   });
 });

 gulp.task('watch',function () {
   gulp.watch(['src/*.html','dist/css/*.css','src/js/*'],function () {
   gulp.src('src/*.html').pipe(connect.reload());
   });
 });

 gulp.task('server-watch',['server','watch','scss']);

 gulp.task("default",["imgMin","copyData","copyhtml","copyPng","copyjs","jsMin","scss","watch","copyIcon",
 "cssMin"]);
