---
title: The Other Parts of Sass
date: 2014-09-22 00:00:00 Z
layout: post
---

If you write Sass there's a chance you're only seeing the tip of the iceberg. Most times when I write Sass everyday, I use [imports](http://sass-lang.com/guide#topic-5), [nesting](http://sass-lang.com/guide#topic-3) and [variables](http://sass-lang.com/guide#topic-2) then less often mixins and extends. All makes authoring stylesheets incredibly easier, but that's not all of what Sass can do, hell that's not even close.

### Basic Operators

You can make your Sass files do some basic math for you.

<pre><code class="language-scss">$baseFontSize: 100%;
.main--content {
    width: 100% * .75;
}
.sidebar {
    width: 100% * .25;
    h3 {
        font-size: $baseFontSize - .25;
    }
}</code></pre>

That will totally compile into that for you:

<pre><code class="language-css">.main--content {
  width: 75%;
}

.sidebar {
  width: 25%;
}
.sidebar h3 {
  font-size: 88.88889%;
}</code></pre>

That's pretty useful. But there's still way more.

Let's look at this example from [CSS-Tricks](http://css-tricks.com/video-screencasts/132-quick-useful-case-sass-math-mixins/). Chris created a mixin to a flexible row of elements, in this case a group of staff bios. He's using pretty basic operators to make this happen. The mixin calculates the width for an element and it's margin, based on the context of elements per row.

<pre><code class="language-scss">@mixin rowMachine($numPerRow, $margin) {
  width: ((100% - (($numPerRow - 1) * $margin)) / $numPerRow);
  &:nth-child(n) {
    margin-bottom: $margin;
    margin-right: $margin;
  }
  &:nth-child(#{$numPerRow}n) {
    margin-right: 0;
    margin-bottom: 0;
  }
}
.item {
  @include rowMachine(4, $margin)
}</code></pre>

Compiles to:

<pre><code class="language-css">.item {
  width: 23.5%;
}
.item:nth-child(n) {
  margin-bottom: 2%;
  margin-right: 2%;
}
.item:nth-child(4n) {
  margin-right: 0;
  margin-bottom: 0;
}</code></pre>

Doing this by hand would be really tedious and would be pretty hard to modularize so you can use it in different places. But the basic operators in Sass make this a lot easier to work with and use over again.

### Content Directive

One of the other lesser used parts of Sass is the `@content` directive from Sass 3.2. The Content directive allows to pass in content into a mixin. This is really becomes useful when you need to nest media queries or setup a keyframe animation.

For keyframe animations this example from [Eric Suzanne](https://gist.github.com/ericam/1607696) shows how we can setup a mixin to prefix animations.

<pre><code class="language-scss">@mixin keyframes($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }
  @-moz-keyframes #{$name} {
    @content;
  }
  @-ms-keyframes #{$name} {
    @content;
  }
  @keyframes #{$name} {
    @content;
  }
}

@include keyframes(bgcolor) {
  0% {
    background-color: #ffccf2;
  }
  50% {
    background-color: #ccffcc;
  }
  100% {
    background-color: #ccffff;
  }
}</code></pre>

Compiles to:

<pre><code class="language-css">@-webkit-keyframes bgcolor {
  0% {
    background-color: #ffccf2;
  }
  50% {
    background-color: #ccffcc;
  }
  100% {
    background-color: #ccffff;
  }
}
@-moz-keyframes bgcolor {
  0% {
    background-color: #ffccf2;
  }
  50% {
    background-color: #ccffcc;
  }
  100% {
    background-color: #ccffff;
  }
}
@-ms-keyframes bgcolor {
  0% {
    background-color: #ffccf2;
  }
  50% {
    background-color: #ccffcc;
  }
  100% {
    background-color: #ccffff;
  }
}
@keyframes bgcolor {
  0% {
    background-color: #ffccf2;
  }
  50% {
    background-color: #ccffcc;
  }
  100% {
    background-color: #ccffff;
  }
}</code></pre>

You can also use the Content directive to inline [media queries](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32) to setup and manage breakpoints better. Let's say we setup all our breakpoints as variables.

<pre><code class="language-scss">$breakpoint--small: 31.25rem; // 500px/16px
$breakpoint--medium: 48rem; // 768px/16px
$breakpoint--large: 63rem; // 1024px/16px</code></pre>

This is little smarter because we're using variables, less room for error and more consistency. Then we can use that in mixin.

<pre><code class="language-scss">@mixin respond-to($media) {
    @if $media == handhelds {
        @media only screen and (max-width: $breakpoint--small) { @content; }
    }
    @else if $media == mediumscreens {
        @media only screen and (min-width: $breakpoint--small + 1) and (max-width: $breakpoint--large - 1) { @content; }
    }
    @else if $media == widescreens {
        @media only screen and (min-width: $breakpoint--large) { @content; }
    }
}</code></pre>

In this mixin we're setting up media queries we can nest like this:

<pre><code class="language-scss">.item {
  width: 49%;
  margin-right: 2%;
  &:last-of-type {
    margin-right: 0;
  }
  @include respond-to(handhelds) {
    width: 100%;
    margin: 0;
  }
}</code></pre>

Compiles to:

<pre><code class="language-css">.item {
  width: 49%;
  margin-right: 2%;
}
.item:last-of-type {
  margin-right: 0;
}
@media only screen and (max-width: 31.25rem) {
  .item {
    width: 100%;
    margin: 0;
  }
}</code></pre>

There a ton of other use cases for the Content directive like getting styles for [for IE only](http://jakearchibald.github.io/sass-ie/) and lot brilliant ones from [Thoughtbot](http://robots.thoughtbot.com/sasss-content-directive) that are worth spending some time checking out.

### Interpolation

The last lesser known part of Sass that I think is awesome is interpolation. Interpolation (in this context, interpolation isn't unique to Sass) is using the value of a variable in a string or different context. There is a way better explanation of that over [here](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375).

Here we're going to create a simple 4 column grid. We're going to use a `@for` loop to count from 1 to 4. This loop will create a class for each count it makes and we'll use interpolation to name these classes so we can use them later.

<pre><code class="language-scss">$end: 4;
$gutterSize: 2%;
@for $i from 1 through $end {
    $single--column: (100 - (($end - 1)* $gutterSize ))/$end;
    .col-#{$i}-#{$end} {
        float: left;
        width: ($i * $single--column) + (($i - 1) * $gutterSize);
        @if $i == $end {} @else {
          margin-right: $gutterSize;
          &:last-child { margin-right: 0; }
        }
    }
}</code></pre>

Will return values we can use in our project naming the classes according to these values.

<pre><code class="language-css">.col-1-4 {
  float: left;
  width: 23.5%;
  margin-right: 2%;
}
.col-1-4:last-child {
  margin-right: 0;
}

.col-2-4 {
  float: left;
  width: 49%;
  margin-right: 2%;
}
.col-2-4:last-child {
  margin-right: 0;
}

.col-3-4 {
  float: left;
  width: 74.5%;
  margin-right: 2%;
}
.col-3-4:last-child {
  margin-right: 0;
}

.col-4-4 {
  float: left;
  width: 100%;
}</code></pre>

---

This is just the surface of Sass. There's so many things that don't get as much air play as imports, mixins, nesting and variables that are just as useful as those things. Leave me a comment and let me know how you're using other parts of Sass and some cool use cases, I would love hear more about how you folks use Sass.
