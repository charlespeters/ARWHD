var gulp        = require('gulp');
var gutil       = require('gulp-util');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload      = browserSync.reload();
var postcss     = require('gulp-postcss');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var cheerio     = require('gulp-cheerio');
var svgmin      = require('gulp-svgmin');
var nano        = require('gulp-cssnano');
var uncss       = require('gulp-uncss');
var svgstore    = require('gulp-svgstore');
var size        = require('gulp-size');
var concat      = require('gulp-concat');
var cp          = require('child_process');
var paths       = require('./paths');
var name        = 'arwhd';

const cssnext    = require('postcss-cssnext');
const atImport   = require('postcss-import');

const processors = [
  atImport,
  cssnext({
    browsers: ['last 2 version'],
    features: {
      colorFunction: true,
      customSelectors: true,
      rem: false,
    },
  }),
];

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
};

// Jekyll Building

gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

// Asset Building

gulp.task('styles', function () {
  return gulp.src(paths.cssI)
  .pipe(postcss(processors))
  .pipe(uncss({
    html: ['./_site/**/*.html'],
  }))
  .pipe(nano({ mergeRules: false }))
  .pipe(size({
    showFiles: true,
    gzip: true,
  }))
  .pipe(gulp.dest('_site/' + paths.dist + 'css/'))
  .pipe(browserSync.reload({ stream: true }))
  .pipe(gulp.dest(paths.dist + 'styles/'))
  .pipe(gulp.dest('_includes/'));
});

gulp.task('scripts', function () {
  return gulp.src('./assets/src/js/**/*')
  .pipe(size())
  .pipe(plumber())
  .pipe(concat(name + '.js'))
  .pipe(uglify())
  .pipe(gulp.dest('_site/' + paths.dist + 'js/'))
  .pipe(browserSync.reload({ stream: true }))
  .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('images', function () {
  return gulp.src(paths.img)
  .pipe(size())
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
  }))
  .pipe(gulp.dest('_site/' + paths.dist + 'img/'))
  .pipe(gulp.dest(paths.dist + 'img/'));
});

gulp.task('icons', function () {
  return gulp.src(paths.icons)
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true }))
    .pipe(cheerio({
      run: function ($, file) {
        $('svg').addClass('u-d-none');
        $('[fill]').removeAttr('fill');
      },

      parserOptions: { xmlMode: true },
    }))
    .pipe(gulp.dest('./_includes/'));
});

// Connect & Deploy
gulp.task('connect', ['styles', 'jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site',
    },
  });
});

gulp.task('watch', function () {
  gulp.watch([paths.cssI, paths.cssDir], ['styles', 'jekyll-rebuild']);
  gulp.watch(paths.js, ['scripts', 'jekyll-rebuild']);
  gulp.watch(paths.icons, ['icons', 'jekyll-rebuild']);
  gulp.watch(paths.img, ['images', 'jekyll-rebuild']);
  gulp.watch(paths.markup, ['jekyll-rebuild']);
});

// Task Registry
gulp.task('build', ['styles', 'scripts', 'images', 'jekyll-rebuild']);
gulp.task('default', ['build', 'connect', 'watch']);
