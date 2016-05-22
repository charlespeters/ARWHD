var paths = {
  cssI: 'assets/src/styles/arwhd.css',
  cssDir: 'assets/src/styles/**/*.css',
  css: {
    src: './assets/src/styles/arwhd.css',
    all: './assets/src/styles/**/*.css',
    dest: './assets/dist/styles/'
  },
  js: {
    src: './assets/src/scripts/global.js',
    all: './assets/src/scripts/**/*.js',
    dest: './assets/dist/scripts/',
  },
  icons: {
    src: './assets/src/icons/*.svg',
    dest: './_includes/'
  },
  img: {
    src: './assets/src/img/*',
    dest: './assets/dist/img/'
  },
  markup: ['./*.html', './*.md', '_includes/*.html', '_layouts/*.html', '_posts/*', '_drafts/*'],
  dist: './assets/dist/',
  build: './_site/'
};

module.exports = paths;
