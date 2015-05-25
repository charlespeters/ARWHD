var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload(),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    imagemin    = require('gulp-imagemin'),
    autoprefix  = require('gulp-autoprefixer'),
    cheerio     = require('gulp-cheerio'),
    svgmin      = require('gulp-svgmin'),
    svgstore    = require('gulp-svgstore'),
    size        = require('gulp-size'),
    concat      = require('gulp-concat'),
    cp          = require('child_process'),
    name        = 'arwhd';

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var paths = {
  scss: 'assets/src/scss/**/*.scss',
  js: 'assets/src/js/*.js',
  icons: 'assets/src/icons/*.svg',
  img: 'assets/src/img/*',
  markup: ['./*.html', './*.md', '_includes/*.html', '_layouts/*.html', '_posts/*'],
  dist: 'assets/dist/'
};

// Jekyll Building

gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

// Asset Building

gulp.task('styles', function() {
  return gulp.src(paths.scss)
  .pipe(size())
  .pipe(sass({
    outputStyle: 'compressed',
    onError: browserSync.notify
  }))
  .pipe(autoprefix(['last 2 version']))
  .pipe(gulp.dest('_site/' + paths.dist + 'css/'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(paths.dist + 'css/'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
  .pipe(plumber())
  .pipe(concat(name+'.js'))
  .pipe(uglify())
  .pipe(gulp.dest('_site/' + paths.dist + 'js/'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('images', function() {
  return gulp.src(paths.img)
  .pipe(size())
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}]
  }))
  .pipe(gulp.dest('_site/' + paths.dist + 'img/'))
  .pipe(gulp.dest(paths.dist + 'img/'));
});

gulp.task('icons', function () {
  return gulp.src(paths.icons)
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true}))
    .pipe(cheerio({
      run: function ($, file) {
          $('svg').addClass('hidden');
          $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest('./_includes/'));
});


// Connect & Deploy
gulp.task('connect', ['styles', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


gulp.task('watch', function() {
  gulp.watch(paths.scss, ['styles', 'jekyll-rebuild']);
  gulp.watch(paths.js, ['scripts', 'jekyll-rebuild']);
  gulp.watch(paths.icons, ['icons', 'jekyll-rebuild']);
  gulp.watch(paths.img, ['images', 'jekyll-rebuild']);
  gulp.watch(paths.markup, ['jekyll-rebuild']);
});

// Task Registry

gulp.task('build', ['styles', 'scripts', 'images', 'jekyll-rebuild']);
gulp.task('default', ['build', 'connect', 'watch']);
