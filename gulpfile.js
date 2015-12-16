var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  browserify = require('gulp-browserify'),
  rename = require('gulp-rename'),
  eslint = require('gulp-eslint'),
  replace = require('gulp-replace'),
  notify = require('gulp-notify'),
  beep = require('beepbeep'),
  colors = require('colors'),
  plumber = require('gulp-plumber'),
  path = require('path');

// error handling convenience wrapper
gulp.plumbedSrc = function() {
  return gulp.src.apply(gulp, arguments)
    .pipe(plumber({
      errorHandler: function(err) {
        beep();
        console.log('[ERROR:]'.bold.red);
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }));
};

gulp.task('sass', function () {
  return gulp.plumbedSrc('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'))
    .pipe(notify({ message: 'CSS complete' }));
});

// ESLint
gulp.task('lint', function () {
  return gulp.plumbedSrc(['./js/*.js', './views/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('scripts', function() {
  gulp.plumbedSrc('./js/project.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('./public/js/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(replace('./build/js/*.min.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(notify({ message: 'JS files complete' }));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['lint', 'scripts']);
  gulp.watch('views/**/*.html', ['html']);
});

gulp.task('test', ['lint']);
gulp.task('default', ['watch']);
