var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSeq = require('run-sequence');



//  dev
gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass(''))
		.pipe(gulp.dest('app/css'));
});



// watchers
gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
});



// optimization & dist
gulp.task('useref', function(){
	return gulp.src('app/**/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
});



//clean
gulp.task('clean:dist', function(){
	return del.sync('dist');
});



// build
gulp.task('default', function(callback){

});

gulp.task('build',function(callback){

});