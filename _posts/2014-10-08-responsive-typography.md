---
layout: post
title:  "Responsive Typography"
date:   2014-10-08 14:03:43
categories: CSS
---

Responsive typography isn't as hard as we make it out to be. After a lot of experimenting and a lot of screwing it up, I found the best way to respond to different screen sizes is to have a straight forward approach.

### Use REMs

REMs are a relative unit of measurement in CSS that's similar to EMs, except instead of being relative to the font size of container, it's relative to the root font size of the root of the document (hence the 'r').

There's an old approach from Jonathan Snook using REMs that's popular but I don't think is a great idea[^1]. Jonathan advocates (I don't know if he still holds this position) that you should set your font-size on your html element to 62.5% so that 1.4rem can equal out to be 14px. I've heard this volleyed again on Twitter not too long ago and I can't say I agree.

1rem equals 1x of the default browser size. So let's say the default browser font size is 16px, 1rem would be 16px, 2rem would be 32px and so on. But the default browser font size could be anything; it's something the user can decide in their browser settings, so it's not a reliable metric to depend on.

If we design with a pixel based mentality, we're working against the browser and the user.

I tend to set the html size to 100% and with media queries set it to 92.5% and let everything I've declared in REMs size accordingly. Much less resistance. For reference, .875rem to 1rem are an ideal body text size. A great headline size is about 2.25rem.

Browser support of REMs is pretty good IE9+, and if you need to support an older browser there are ways you can still use REMs. If you're doing smart things like using a [build step](http://arwhd.co/development/2014/06/25/codekit-vs-grunt-js/) there's Grunt tasks and Gulp plugins to set a pixel fall back.

### As Few Font Families as Possible

This is more of a performance note versus being strictly related to responsive design. But you never know the bandwidth on your user's end so it's still relevant when designing for multiple devices.

You should declare as a few different font families as possible. Let's say you're using a sans-serif like Freight Sans on all your headlines and everywhere else on the site, but on your paragraphs using Freight Text. Declare Freight Sans on the html element and use a reset to let forms inherit the font-family, and only on the paragraphs declare Freight Text.

Example:

<pre class="language-css"><code>html {
	font: 400 100%/1.5 "Freight Sans Pro", Helvetica, sans-serif;
}

p {
	font-family: "Freight Text";
	font-size: 1rem;
}

.sidebar h3 {
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2px;
}
</code></pre>

By comparison, declare font-weight and font-size as often as you want, provided it's trusting the cascading parts of CSS. I know it might be a weird thing to harp on but I've been in the mindset of using as few font-family declarations a possible. I also wish I had actual numbers behind this, but I've seen my sites load faster on mobile devices since implementing this mindset.

From a logical standpoint, by declaring fewer font families, you're writing less declarations and less CSS (and smarter CSS) and which means less for the browser to render, letting it use the cascade it the way it was meant to.

This is my speculation, not gospel. I would, however, love to see real performance stats on this.

### Icon Fonts

Just don't.

If you're thinking about using an icon font, I have a bunch of [free SVG icons](http://charlespeters.net/justafewicons/) you can use for free. They're seriously free and better for the internet. Not every device supports `@font-face`, and depending on a font for your icons can't provide you any real fallback. STOP USING ICON FONTS.[^2]

### More CSS to Consider

Go for unitless line-height.

> Unitless line heights are recommended due to the fact that child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding. [^3]

You can set a max-width on paragraphs to close to 33rem to 38rem to maintain a readable amount of characters on a line (45-75 characters). You also might want to consider setting `word-wrap: break-word` for long links. There's nothing worse than reading a blog post on your phone and having a long horizontal scroll because there's a link in a comment.

---

Those are my approaches and best practices to responsive typography; there's lot to consider and it's constantly evolving. But I think this is the path of least resistance. I also have a [repo up on Github](https://github.com/charlespeters/type-findings) that's just a list of articles and resources about typography for you guys to check out.



[^1]: [_Font Sizing With REM_](http://snook.ca/archives/html_and_css/font-size-with-rem)
[^2]: ["Leaving Pixels Behind: A Vector Workflow for designers" by Todd Parker](https://docs.google.com/presentation/d/1CNQLbqC0krocy_fZrM5fZ-YmQ2JgEADRh3qR6RbOOGk/edit#slide=id.p)
[^3]: [_Line-height_](http://css-tricks.com/almanac/properties/l/line-height/)
