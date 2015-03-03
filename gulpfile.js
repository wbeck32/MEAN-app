var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
	gulp.src('ng/**/*.js')
	.pipe(concat('app.js'))
	.pipe(gulp.dest('assets'))
})


// gulp.task('welcome', function () { 
// 	console.log('welcome to my world');
// })

// gulp.task('hello', ['welcome'], function (){
// 	console.log('hello world');
// })

