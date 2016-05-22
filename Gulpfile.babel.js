import gulp from 'gulp';
import del from 'del';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import atImport from 'postcss-import';
import papply from 'postcss-apply';
import reporter from 'postcss-reporter';
import nano from 'cssnano';
import stylelint from 'stylelint';
import eslint from 'gulp-eslint';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserSync from 'browser-sync';
import paths from './paths';

const cp = require('child_process');
const bs = browserSync.create();

// Asset Building


// Styles
/////////////////////////

const styles = () => {
  const processors = [
    atImport,
    cssnext({
      warnForDuplicates: false,
      browsers: ['last 2 version'],
      features: {
        colorFunction: true,
        customSelectors: true,
        rem: false
      },
    }),
    papply,
    nano({ mergeRules: false })
  ];

  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(size({
      showFiles: true,
      gzip: true,
    }))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(gulp.dest('./_site/assets/dist/styles/'))
    .pipe(gulp.dest('./_includes/'))
    .pipe(bs.stream());
};

// Scripts
/////////////////////////

const bundler = watchify(browserify(paths.js.src, watchify.args));

function bundle() {
  return bundler
    .transform(babelify)
    .bundle()
    .pipe(source('./bundle.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(size({
        showFiles: true,
        gzip: true,
      }))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(gulp.dest('./_site/assets/dist/scripts/'))
    .pipe(bs.stream());
}

bundler.on('update', bundle);

const scripts = bundle;

// Image Processing
/////////////////////////

const images = () => {
  return gulp.src(paths.img.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
    }))
    .pipe(size({
      showFiles: true,
      gzip: true,
    }))
    .pipe(gulp.dest(paths.img.dest));
};

// Icons as SVG Sprite
/////////////////////////

const icons = () => {
  return gulp.src(paths.icons.src)
    .pipe(svgmin())
    .pipe(svgstore({
      fileName: 'icons.svg',
      inlineSvg: true
    }))
    .pipe(cheerio({
      run: ($, file) => {
        $('svg').addClass('u-none');
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true },
    }))
    .pipe(gulp.dest(paths.icons.dest))
    .pipe(bs.stream());
};

// Jekyll
/////////////////////////

const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
};

const jekyll = (done) => {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build', '--drafts'], { stdio: 'inherit' }).on('close', done);
};

const rejekyll = gulp.series(jekyll, () => {
  return bs.stream();
});

// Clean Build Directory
/////////////////////////

const clean = () => del(paths.build);

// Server
/////////////////////////

const connect = () => bs.init({
  server: {
    baseDir: paths.build,
  },
});

// Watch
/////////////////////////

const watch = () => {
  gulp.watch(paths.css.all, gulp.series(styles, rejekyll));
  gulp.watch(paths.js.all, gulp.series(scripts, rejekyll));
  gulp.watch(paths.markup, rejekyll);
  gulp.watch(paths.icons.src, gulp.series(icons, rejekyll));
  gulp.watch(paths.img.src, gulp.series(images, rejekyll));
};

// Exports Functions as Proper Tasks

export { clean, styles, scripts, icons, images, watch, connect, jekyll, rejekyll };

// Default Tasks
/////////////////////////

const build = gulp.series(clean, gulp.parallel(styles, scripts, rejekyll, images));
const all = gulp.series(build, gulp.parallel(connect, watch));

export default all;
