---
title: Sass File Architecture
date: 2014-07-01 00:00:00 Z
categories:
- Development
tags:
- Tools
- Build Steps
- Grunt
layout: post
comments: true
---

I officially use Sass on every single project I do. No matter what.

The more time I spend using Sass the more I need to organize the way I structure those files. Hugo Giraudel has a [post](http://www.sitepoint.com/architecture-sass-project/) about this and I one take this just a few steps further (or at least talk about how I do things). I have a `scss/` folder that has five or six folders inside of it. That makes my `main.scss` looks something like this:

<pre><code class="language-scss">@import "bourbon/bourbon";
@import "neat/neat";

// base
@import "base/variables";
@import "base/partials";
@import "base/normalize";
@import "base/typography";
@import "base/animations";
@import "base/inputs_buttons";
@import "base/global";

// grid
@import "grid/grid";
@import "grid/layout";

// components
@import "components/header";
@import "components/navigation";
@import "components/footer";
@import "components/sidebar";
@import "components/article";

// modules
@import "modules/hero";
@import "modules/carousel";
@import "modules/audioplayer";
@import "modules/sharing";

// pages
@import "pages/home";
@import "pages/about";
@import "pages/contact";
</code></pre>

If you take away anything from this it's that all your Sass files don't have to be in the same folder. If you can break up your Sass files and enable sourcemaps you can really target where your design is breaking and which file and line.

### Vendors &amp; Base
Vendors are super simple, if you need to import [Compass](http://compass-style.org/) or [Bourbon](http://bourbon.io/) & [Neat](http://neat.bourbon.io/) to help (cause their awesome), I typically start with those.

Base is a different animal. My variables is a catch all for all the colors, font declarations, media queries, any declaration I find myself writing a lot. Partials, anything that gets `@extend`ed. [Normalize](https://github.com/kristerkari/normalize.scss/) is reset formatted for sass from Nicolas Gallagher's normalize.css reset. Typography is the global typography declarations I have in a project, everything from sizing to color to style and an adaptation from this project of mine, [Resetatron](https://github.com/charlespeters/Resetatron). Animations get all the keyframe animations. Next comes inputs and buttons and other form elements. Last is the global file where I have random styles like `.clearfix`, `.hidden`, `.circle` that I use sporadically.

The whole point of this folder is the stuff I will use over and over again.

### Grid
I have been having a LOAD of fun with this folder lately. The first file, I usually have a `@for` loop to create grid partials or classes and the second one to dicate which parts of the layout get these classes or extensions. Flexbox makes it way better though. I plan on writing more about making Sass based grids, so stay tuned.

### Components
All the repeatable layout elements on a page. Pretty straight forward stuff.

### Modules
I don't know why I called this modules and the other folder components. Anything that's a standalone module (usually something powered by jQuery) that needs styling, it goes in here.

These are different from the stuff in the `components/` folder in that they're not as repeatable like a carousel or an accordion or even a modal dialog box.

### Pages
Last these are just page specific things that didn't get caught in the previous files. Not necessarily a [shame.css](http://csswizardry.com/2013/04/shame-css/) situation more of just targeting things more specifically.

---

One of the best parts about Sass is organizing your stylesheets and your ability to break them apart. I used to have maybe 20 files in the same `scss/` directory and it was a pain to maintain over time. Breaking things up into folders is so much smarter. You could also have a file in each folder that imports all the files like in that folder and then in your `main.scss` pull only the those files that import other things if you wanted to maintain your `main.scss` a little smarter but this way is working out rather well for me.
