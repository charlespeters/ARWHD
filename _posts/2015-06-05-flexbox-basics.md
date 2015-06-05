---

layout: post
title:  "Flexbox Basics"
date: 2015-06-05 14:03:43
categories: CSS

---

I've been trying to write this post for almost a year. Flexbox is a really [well-supported](http://caniuse.com/#feat=flexbox) feature by now. I've been using it on almost every site I've worked on since December 2013. By far the best way to understand how to use flexbox is to experiment with your layout, your UI components, your own needs.

This is more or less a reference for me personally versus a longer reason of why you should use flexbox. It's features far outweigh any concern you might have about it.

---

Flexbox is one of those things you either hate and dismiss or want to embrace and use on every project. Flexbox is a layout module for CSS. It's a way to layout elements on a line based on unknown dimensions and have the inner boxes become flexible to it's outer container.

It's absolutely wonderful. Here's the rundown:
- You don't have to clear a row of columns.
- Columns can be reordered.
- Everything can be relative.
- Centering, aligning and spacing has never been easier.

### Flex Container
This is what I think of when I refer to what I'm calling a "flex container"

<pre><code class="language-css">
.flex__container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
}</code></pre>

First things first, we need to start by declaring `display: flex`, that will make the immediate children in that container element a "flex child". Now we have a flexbox layout to work with and all our immediate children are flexible within that layout, by default they take up one equal part of the available space.

`flex-wrap` breaks the children onto a new line if the combined children's `flex-basis` exceed the width of the viewport (we'll get to `flex-basis` in a second, for now, just think `max-width`).

`flex-direction` is defaulted to `row` (it's there as an example). You can also set it to `column` to stack your flex children vertically instead of horizontally.

`justify-content` sets how the content is aligned across it's entire flex container. It defaults to `flex-start` which is the furthest top left corner of your flex container. Other values are: `flex-end | center | space-between | space-around`. This the property you can use to vertically and horizontally center your content inside your flex container.

`align-items` sets how the flex children are aligned in relation to each other on their current line. The default is `flex-start`, which aligns each of the flex children to the top of the flex container. These are the other accepted values: `flex-end | center | baseline | stretch`.


### Flex Children
Now a flex child needs a few attributes. A flex child can have up to three values assigned to it:

<pre><code class="language-css">flex: flex-grow flex-shrink flex-basis;</code></pre>

`flex-grow` defines a flex child's ability to grow. If you set it to be a number it will become that proportion of the flex container. For example if we set a flex child to be `flex: 3` and another to be `flex: 2` they'd take up 3 equal parts of the whole flex container and

<pre><code class="language-css">flex-grow: 3;</code></pre>

<p data-height="268" data-theme-id="4981" data-slug-hash="ZGKQpr" data-default-tab="result" data-user="charlespeters" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/ZGKQpr/'>Flex Grow Example</a> by Charles Peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

`flex-shrink` this is how much the child will shrink in relationship to the other flex children inside their flex container when the available space changes. Honestly this property confuses me more than the other two.

<pre><code class="language-css">flex-shrink: 3;</code></pre>

<p data-height="285" data-theme-id="4981" data-slug-hash="MwmKJQ" data-default-tab="result" data-user="charlespeters" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/MwmKJQ/'>Flex Shrink Example</a> by Charles Peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

(The only values acceptable for `flex-grow` & `flex-shrink` are a unitless number.)

`flex-basis` sets how big the flex child should be regardless of the viewport.

<p data-height="268" data-theme-id="4981" data-slug-hash="aOWvMG" data-default-tab="result" data-user="charlespeters" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/aOWvMG/'>Flex Child Example</a> by Charles Peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Synopsis
Most of the time if I'm using flexbox for page layout I typically use a flex container with `flex-wrap: wrap` and most of my "column" elements look like this:
<pre><code class="language-css">.flex__child-3 { flex: 3 0 15rem; }</code></pre>

Again, you need to apply this to your context. But this is a lot easier to work with than floats in my opinion.

---

### Reordering
One really cool feature of flexbox that can be very powerful in responsive design, is the ability to visually reorder elements (as if they're source order was different) within the flex-container.

By adding `order: 9` you'll arrange it almost last visually in your container. I've found problems with using `order` on some elements in a flex container that don't have `order` declared on them.

<p data-height="268" data-theme-id="4981" data-slug-hash="zGZXOj" data-default-tab="result" data-user="charlespeters" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/zGZXOj/'>Flexbox Order Example</a> by Charles Peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Nesting Flexbox
Just a side note here, because there are still things on the planet, you can nest flexbox inside of flexbox.

<p data-height="268" data-theme-id="4981" data-slug-hash="eNWJyj" data-default-tab="result" data-user="charlespeters" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/eNWJyj/'>Flexbox Nesting</a> by Charles Peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Easy Vertical Centering

#### Centering Content Inside
This is a quick way to use flexbox to center content vertically inside any element.

<pre><code class="language-css">.center--v {
  display: flex;
  flex-direction: column;
  justify-content: center;
}</code></pre>

#### On a Line
Adding this to your flex container well center the items vertically with each other.

<pre><code class="language-css">.center--items { align-items: center; }</code></pre>

### Browser Support
Like I said, really good browser support, IE10+, Android 4+ and all other modern browsers. Some of those versions require prefixes and the other syntaxes for flexbox, all of which are covered with [Autoprefixer](https://github.com/postcss/autoprefixer), which I would highly recommend working into your build process.

### A Few Getting Started Links
- [_A Complete Guide to Flexbox_](http://css-tricks.com/snippets/css/a-guide-to-flexbox/) by Chris Coyier
- [_Flexbox in 5 Minutes_](http://devbryce.com/site/flexbox/) by Bryce Johnson
- [_Flexbox Cheatsheet Cheatsheet_](http://jonibologna.com/flexbox-cheatsheet/) by Joni Trythall
- [_Solved by Flexbox_](http://philipwalton.github.io/solved-by-flexbox/) by Philip Walton
- [_Using CSS flexible boxes_](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) by MDN

### CSS-Tricks & MDN Links
These links have more detailed information about flexbox:

- [Justify Content - CSS-Tricks](https://css-tricks.com/almanac/properties/j/justify-content/)
- [Align Items - CSS-Tricks](https://css-tricks.com/almanac/properties/a/align-items/)
- [Flex - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [Flex - CSS-Tricks](https://css-tricks.com/almanac/properties/f/flex/)
