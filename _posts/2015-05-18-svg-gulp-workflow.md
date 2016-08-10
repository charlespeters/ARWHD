---
title: SVG Icon Systems with Gulp
date: 2015-05-18 00:00:00 Z
layout: post
---

I like SVG and I like [Gulp.js](http://gulpjs.com/) and I don't think that working with either should be a pain in any way. I'm going to walk through my way of building an icon system with Gulp. This may not be _best_ way to work with SVG, but this is my current workflow for building icon systems.

Couple things to remember, SVG support is [great](http://caniuse.com/#feat=svg) so I'm not really going to cover fallbacks other than a few resources. The other thing is that this is for icons not for really intricate graphics; there are other better ways to work with graphics like that in SVG.

Let's get started. I'm going to make a few assumptions:

1. that you have both a gulpfile.js and a package.json (and have run `npm init`, oh and have a copy of node installed and gulp installed globally).
2. that you're using [BrowserSync](http://www.browsersync.io/docs/gulp/), if you're not it's not hard to get started with it. BrowserSync is a great way to setup a static server that has great browser refreshing and syncing between different devices on your network (of my highest recommendation).

First run this command in the root of your project (or wherever your package.json lives):

```
npm i --save-dev gulp-svgmin gulp-svgstore gulp-cheerio gulp-file-include
```

This installs the gulp plugins we need for our task.

### Project Structure
In most projects I work on there's a source directory and a build directory. In a typical source directory, all the HTML gets cut up into partials and templates, the Sass partials for my CSS and the Javascript needing to be bundled and transpiled, all exist in here. It's all in small manageable pieces for you to work with and for Gulp to build into build directory into a website or web app.

This is a pretty common structure for my projects.

<pre><code>
build/
  |  index.html
  |  assets/
  |  |  stylesheets/
  |  |  |  style.css
  |  |  javascript/
  |  |  |  vendor/
  |  |  |  |  jquery.min.js
  |  |  |  bundle.js
source/
  |  index.html
  |  inc/
  |  |  sidebar.html
  |  |  head.html
  |  |  header.html
  |  |  footer.html
  |  assets/
  |  |  icons/
  |  |  |  star.svg
  |  |  |  check.svg
  |  |  |  twitter.svg
  |  |  js/
  |  |  |  global.js
  |  |  |  player.js
  |  |  |  modal.js
  |  |  scss/
  |  |  |  styles.scss
  |  |  |  grid.scss
gulpfile.js
package.json
</code></pre>

In my Gulpfile there's a `paths` variable to define all my paths for files in one place. (I first saw this in Thoughtbot's [Proteus project](https://github.com/thoughtbot/proteus-gulp), it's super cool).

<pre><code class="language-javascript">
var paths = {
  sass: './src/assets/scss/**/*.scss',
  js: './src/assets/js/*.js',
  vendor: './vendor/',
  img: './src/assets/images/**',
  files: './src/files/**',
  templates: ['src/**/*.html', '!src/inc/**/*.html'],
  icons: './src/assets/icons/*',
  build: './build/'
};
</code></pre>

In our project structure there needs to be some directory full of only SVG files to become your icon system. Illustrator & Sketch both let you export a series of artboards into multiple SVG files (assuming you have an artboard for each icon). If you don't want to draw your own and work with some I design, check these [icons](http://charlespeters.net/justafewicons/) out.

### Working with SVG

When working with SVG for your icons you're going to use the [`<symbol>` method](https://css-tricks.com/svg-symbol-good-choice-icons/). To summarize we're going to have a block of predefined objects at the top of document in a giant `<svg>` container hidden off the page that we'll reference later with this syntax:

```markup
<svg>
  <use xlink:href="#icon_gear" />
</svg>
```

### Icons Task + Watch

This is our `icons` task for Gulp to run on our directory full of SVG files. Now [`svgmin`](https://github.com/ben-eb/gulp-svgmin) minifies our SVG files and strips out unnecessary code that you might inherit from your graphics editor. [`svgstore`](https://github.com/w0rm/gulp-svgstore) binds them together in one giant SVG container called `icons.svg`. Then [`cheerio`](https://github.com/KenPowers/gulp-cheerio) gives us the ability to interact with the DOM components in this file in a jQuery-like way. `cheerio` in this case is removing any fill attributes from the SVG elements (you'll want to use CSS to manipulate them) and adds a class of `.hide` to our parent SVG. It gets deposited into our `inc` directory with the rest of the HTML partials.

<pre><code class="language-javascript">
var gulp        = require('gulp');
var svgmin      = require('gulp-svgmin');
var svgstore    = require('gulp-svgstore');
var cheerio     = require('gulp-cheerio');

gulp.task('icons', function () {
  return gulp.src(paths.icons)
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true}))
    .pipe(cheerio({
      run: function ($, file) {
          $('svg').addClass('hide');
          $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest('./src/inc/'))
    .pipe(reload({stream:true}));
});
</code></pre>

We can add a `watch` task to watch our icons directory for changes and run our new `icons` task when it detects a change.

<pre><code class="language-javascript">
gulp.task('watch', function() {
  gulp.watch(paths.icons, ['icons']);
});
</code></pre>

### Building Into Your HTML Document

This is mostly bonus points but it's pretty well incorporated into my SVG workflow.

In our `icons` task for Gulp we had it deposited our SVG container in our directory for our HTML includes. We're going to add another task to take all of our partials and build them into a document.

This uses [gulp-file-include](https://github.com/coderhaoxin/gulp-file-include) to stitch all the HTML partials together (including our `icon.svg`).

<pre><code class="language-javascript">
var includes    = require('gulp-file-include');

gulp.task('html', function() {
  return gulp.src(paths.templates)
    .pipe(includes({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.build))
    .pipe(reload({stream:true}));
});
</code></pre>

This becomes our `index.html` file. This lets us work in small modular bits of code we can reuse for each template we're building.

<pre><code class="language-markup">
@@include('inc/head.html')
@@include('inc/icons.svg')
@@include('inc/header.html')

Put your Content Here

@@include('inc/footer.html')
</code></pre>

And we should update our `watch` task. Now every time we add a new icon, our icons task is run and then our document is rebuilt without any extra effort on our part.

<pre><code class="language-javascript">
gulp.task('watch', function() {
  gulp.watch(['src/**/*.html'], ['html']);
  gulp.watch(paths.icons, ['icons', 'html']);
});
</code></pre>

---

This is how I work with SVG in terms of building an icon system. It's pretty straight forward and I'm always looking to improve it.
