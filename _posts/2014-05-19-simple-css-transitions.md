---
title: Simple Transitions
date: 2014-05-19 13:03:43 Z
categories:
- CSS
layout: post
---

I've used CSS transitions sparingly. But a few recent posts got me really interested it going to town. During 2013's 24 Ways there was a post about the hover paradigm[^1] and it got me thinking about CSS transitions. Then this post on the Cognition Blog[^2] and that rekindled the thought that CSS transitions are a significant part of a website's design.

These articles suggest going applying transitions to the `:focus` states too because fewer and fewer touch devices support hover.

What I didn't realize is that CSS transitions were easier to use than I thought, especially when you apply them to the `:hover` state.

<pre><code class="language-css">
transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay]
</code></pre>

So this would end up being something like:

<pre><code class="language-scss">div {
  height: 3rem;
  transition: height 1s ease;
  &:hover {
    height: 5rem;
  }
}</code></pre>

So if we're using the transition on the `:hover` state we'd want set the transition on the element's normal state and on the `:hover` & `:focus` states we'd want to set our result. Here's an example to add a transition on `:hover`.

<p data-height="268" data-theme-id="4981" data-slug-hash="oDqAh" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/charlespeters/pen/oDqAh/'>CSS Transitions on Border</a> by charles peters (<a href='http://codepen.io/charlespeters'>@charlespeters</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Few caveats to remember, the property you're transitioning needs to exist on element in it's normal state. When I was working the pen above, I found that out. I wanted the transition to create a border around the images. So I had to set the `.circle` to have a border of `0 solid white` for it to transition properly.

The other big thing is to remember: don't interrupt your user's experience. In Dan Cederholm's book _CSS3 for Web Designers_ he talks about this a little bit (remember this book came out at the end of 2010):

> But the truth is everyone can begin using CSS3 right now. And fortunately you don’t have to think differently or make drastic changes to the way you craft websites in order to do so. How can anyone use CSS3 on any project? Because we’re going to carefully choose the situations where we apply CSS3, focusing squarely on the experience layer.

The idea is simple: go slow with transitions they can be awesome or they can like your undergrad projects done in Flash.

[^1]: [The Responsive Hover Paradigm](http://24ways.org/2013/the-responsive-hover-paradigm/)
[^2]: [Hover-crafting](http://cognition.happycog.com/article/hover-crafting)
