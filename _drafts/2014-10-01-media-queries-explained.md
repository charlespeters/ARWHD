---
layout: post
title:  "Media Queries Explained"
date:   2014-10-01 14:03:43
categories: CSS
---

It dawned on my I don't really understand media queries all that well. I see people post on Twitter a few times recently the statement, "the absence of a media query is the first media query." Then my brain tried to analyse it and make sense of it.

In the past, I've relied on really great frameworks (Bootstrap, Foundation, Neat) to handle the responsive grid part of web design which is where you'd leverage media queries the most and Bourbon Neat (an add on to the Sass Framework Bourbon) in particular has it's own mixins for handling media queries that abstracted media queries a little further.

### Declaring a Media Query

<pre><code class="language-css">@media screen and (min-width: 48rem) {
	/* Stuff you want to query to this media */
}</code></pre>

### Min-Width

At least as big as _X_

### Max-Width

No bigger than _X_

### Ranges
