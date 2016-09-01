var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSeq = require('run-sequence');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var glob = require('glob');
var embedTemplates = require('gulp-angular-embed-templates');
var browserSync = require('browser-sync').create();



// dev

// server
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
		port: 8081
	});
});



// optimization & dist

gulp.task('html', function(){
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
      		stream: true
    	}));
});



gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(sass())
			.pipe(concat('styles.css'))
			.pipe(cssnano())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
      		stream: true
    	}));
});



gulp.task('javascript', function () {
	var entries = glob.sync('app/**/*.js');

	var bundler = browserify({
		entries: entries,
		extensions: ['.js']
	});
	bundler.transform(babelify, {
		presets: ['es2015'],
		plugins: ["transform-object-rest-spread"],
		ignore: "bower_components"
	});

	bundler.bundle()
		.pipe(source('scripts.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
      		stream: true
    	}));
});



// watchers
gulp.task('watch', ['browserSync'], function(){
	gulp.watch('app/scss/**/*.scss' , ['sass']);
	gulp.watch('app/**/*.html', ['html']);
	gulp.watch('app/**/*.js', ['javascript']);
});



//clean
gulp.task('clean:dist', function(){
	return del.sync('dist');
});

gulp.task('clean:www', function(){
	return del.sync('cordova-app/www');
});



// build
gulp.task('default', function(){
	runSeq('clean:dist', ['html', 'sass', 'javascript', 'browserSync', 'watch']);
});



// cordova
gulp.task('clone', function(){
	return gulp.src('dist/**/*')
		.pipe(gulp.dest('cordova-app/www'));
});

gulp.task('cordova', function(){
	runSeq('clean:www', ['html', 'sass', 'javascript'], 'clone');
});