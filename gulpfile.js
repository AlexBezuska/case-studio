var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');

var sourcePath = 'src/less';
var targetPath = 'dest/css';

gulp.task('less', function () {
  return gulp.src([sourcePath + '/main.less'])
    .pipe(less({compress: true}).on('error', gutil.log))
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(gulp.dest(targetPath));
});

gulp.task( 'default', [ 'less' ] )
