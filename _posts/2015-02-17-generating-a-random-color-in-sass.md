---
layout: post
title: Generating a Random Background Color in Sass
date: 2015-02-17
---

I'm exploring a lot more of how to use the lesser known parts of Sass. One of the nicer things that Sass offers is lists and I'm going to cover how to leverage some of their benefits.

Here are some random colors:

<pre><code class="language-scss">
$blue: #3ea5ce;
$green: #99c712;
$yellow: lighten(#ffba00, 5%);
$red: #E53B3A;
</code></pre>

Just so we're clear you can perform a function on a variable (took me forever to get that). Now let's make a list of these color variables.

<pre><code class="language-scss">
$colors: $blue, $green, $yellow, $red;
</code></pre>

This might seem really redundant. But it's important.

Here's the key part our `$key` variable is performing a function to get the length of items in our list. This will output a number and that then number becomes the range for the `random()` function to find a random whole number out of. Now since it's the length of the number of list items we have, when we call the `nth()` function on our list it can only return a number that will map to an item on our list.

Let's assign the $nth value to a new variable called `$main-color` for semantics. I used the `!default` flag on the `$main-color` so that we can reassign it later if we want.

<pre><code class="language-scss">
$key: random( length($colors) );
$nth: nth( $colors, $key );

$main-color: $nth !default;
</code></pre>

Okay now we can randomly out put a hex color value. Just for kicks let's right a mixin to take a color value and make it darken every time that element is used. There's a lot going on this mixin. It takes two parameters `$c` a color & `$y` a number. It when we call it on our `.row` selector. What this will do is set a background of our color and than using that `@for` loop and little bit of math to count out an `&:nth-child($i)` until it hits our `$y` value for our parent selector and progressive darken the color for each row with the `darken()` function.

<pre><code class="language-scss">
@mixin backgrounds($c, $y) {
  background: $c;
  @for $i from 1 through $y {
    $k: 3%;
    $j: $i - 1;

    @if $i == 1 {
      &:nth-child(#{$i}) { background: $c; }
    }
    @else {
      &:nth-child(#{$i}) { background: darken($c, ($k * $j)); }
    }
  }
}

.row { @include backgrounds($main-color, 10); }
</code></pre>

Here's an example where I'm using it on a form. 

<p data-height="268" data-theme-id="4981" data-slug-hash="QwQPEK" data-default-tab="result" data-user="charlespeters" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/QwQPEK/'>Form Row Pattern</a> by Charles Peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Here's an example without the random and using the `lighten()` function.

<p data-height="268" data-theme-id="4981" data-slug-hash="MYrQJd" data-default-tab="result" data-user="charlespeters" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/MYrQJd/'>Exploring Flexbox and Various Sass Functions</a> by Charles Peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

--- 

My big point is variables are dynamic and it's awesome. Take advantage of that and really apply logic to your stylesheets. Now go forth and stare at a glowing screen for disproportionate amount of time and worthy your loved ones!