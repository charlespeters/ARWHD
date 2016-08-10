---
title: Using Number Functions in Sass
date: 2015-03-01 00:00:00 Z
layout: post
---

One of the amazing things about Sass is that you can apply math to your stylesheets. Today I was working on a project with pixel based values and I wanted to use some math. 

I wanted the padding of an element to be half of whatever I set my `font-size` to. Here's a good example: 

<pre><code class="language-scss">
$s: 17px !default; // That's what my project dictated it.

.warning {
  font-size: $s;
  padding: $s/2;
}
</code></pre>

But wait, when we divide our `$s` variable in half we get a float and not a whole number (8.5px). Can't really tell how browsers respond to parts of a pixel so we'd really really want a whole number here. Now Sass makes that easy, it has three functions built in `ceil()`, `floor()` and `round()` that will come in really handy. `floor()` will round our number down to the previous whole number and `ceil()` will round it up to the next whole number. If we used `round()` it would round the nearest whole number.


<pre><code class="language-scss">
$s: 17px !default; // That's what my project dictated it.
$t: floor($s / 2);
.warning {
  font-size: $s;
  padding: $t;
}
</code></pre>

The other number function I've found comes in handy is `percentage()`. Let's look at a grid example:


<pre><code class="language-scss">
@for $i from 1 through 12 {
  .col-#{$i}-12 {
    width: percentage($i/12);
  }
}
</code></pre>

This `@for` directive neatly divides the columns for us so we don't have to do a lot of math ourselves each time we need a column.