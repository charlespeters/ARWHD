---
layout: post
title: The Other Parts of SASS
date: 2014-09-22
---

If you write SASS there's a chance you're only seeing the tip of the iceberg. Most times when I write SASS everyday, I use [imports](http://sass-lang.com/guide#topic-5), [nesting](http://sass-lang.com/guide#topic-3) and [variables](http://sass-lang.com/guide#topic-2) then less often mixins and extends. All makes authoring stylesheets incredibly easier, but that's not all of what SASS can do, hell that's not even close.

### Basic Operators

You can make your SASS files do some basic math for you.

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

Doing this by hand would be really tedious and would be pretty hard to modularize so you can use it in different places. But the basic operators in SASS make this a lot easier to work with and use over again.

### Content Directive

One of the other lesser used parts of SASS is the `@content` directive from SASS 3.2. The Content directive allows to pass in content into a mixin. This is really becomes useful when you need to nest media queries or setup a keyframe animation.

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

You can also use the Content directive to inline [media queries](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32) to setup and manage breakpoints better:


[For IE only](http://jakearchibald.github.io/sass-ie/)

[More Use Cases](http://robots.thoughtbot.com/sasss-content-directive)

### Interpolation
