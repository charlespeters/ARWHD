---
layout: post
title: "A Guide to Web Typography"
status: publish
type: post
---

The internet is a sea of type. You can drown in content. Good typography can hold your audiences attention, create a strong information hierarchy and build visual identity &amp; recognition with your audience.

Bad typography is everywhere. But you don’t need be an amazing designer to have strong typographic skills. In fact learning strong typographic principles can vastly improve your designs and you as a designer.

So what I listed here are some real basics for improving your typography (mostly as it applies to the web). I want to say directly, these are broad strokes, general guidelines and baby steps. They aren’t the gospel truth, objective standards or necessities. They’re just some ideas to get you going.

### Choosing the right typeface

There’s two really distinct fundamental functions for typography on the web: body type and headlines. They have different roles and create a barebones hierarchy for your design. I wanna talk about leveraging the most use and best practice out of each of them.

Generally speaking, It’s easier to read geometric and humanist sans serif typefaces on the web. With the way pixels get rendered on different machines (particulary the difference between Windows &amp; Mac) and the type of resolution that are associated with those screens can be a really wild gambit. Your best move is to use a typeface that has nice round features like Preston, Freight Sans, Museo, Proxima Nova (which I personally love a lot) or Soleil. They can really attract a lot of visual interest because they’re well designed faces that are highly legible and scale really well into small and large sizes.

Serif fonts can be great but I haven’t come across a great number of them that I’ve felt really bring out a lot leverage in a design, but that’s mostly a personal preference. There are some really interesting serif typefaces for the web namely: Tisa, Skolar, Athelas &amp; Chaparral. Even really notable oldstyle serifs like Garamond, look amazing on the web, despite the fact the designer likely never imagined that his typeface would ever not be printed on a page.

Great type for text generally has low contrast and a high x-height in a regular/book weight, while headline type does better with fonts that are bold with higher contrast. And despite what you might think, Helvetica is really terrible for this; it has a really poor spacing and exceptionally low amounts of contrast in the strokes, plus the counters are really tight; all of that makes it really hard to distinguish in small sizes.

Also it’s worth noting that you shouldn’t ignore Georgia, Verdana or Lucida Grande because they’re defaults. They were designed by really amazing type designers specifically for the screen. Georgia looks amazing on any screen and Verdana has a lot good distinction between characters makes it really ideal in running type.

There a lot resources to get free web fonts to put on your site. You will get what you pay for, there’s a lot of trash, a lot really inappropriate typefaces for the web and really sloppy student work. There are few treasures, a few free typefaces that come to mind that are actually great for the web: [Open Sans](http://opensans.com/), [Source Sans](http://store1.adobe.com/cfusion/store/html/index.cfm?event=displayFontPackage&amp;amp;code=1959), [Charter](http://practicaltypography.com/charter.html), [Fira Sans](http://www.mozilla.org/en-US/styleguide/products/firefox-os/typeface/), [Merriweather](http://sorkintype.com/fonts.html), [Lato](http://www.latofonts.com/) &amp; [Aleo](https://www.behance.net/gallery/ALEO-Free-Font-Family/8018673).

### Hierarchy and Superfamilies

A type family is a complete collection of typefaces. It’s the various collections of variations, weights and nuances a typeface would have to form a cohesive unit. So, that might be the Light, Light Italic, Regular, Italic, Bold, Bold Italics, Condensed/Extended versions of that typeface, Small Cap variations and any other easter egg, awesome thing a type designer may choose to add into a family.

There are such things as [superfamilies](http://typecast.com/blog/type-on-screen-superhero-superfamilies). It’s a type family that escaped Krypton just in time and landed on earth to save it from Brainiac. They’re amazing. The best example of a super I can find is Freight Pro. Freight Pro has a set of san serifs version (which is beautiful) that has 12 styles, a transitional serif version for body text with 12 styles, a display serif version (for headlines) in another 12 styles, a micro version that’s like a rough/hand drawn slab serif in 12 styles, a big version that’s an old style serif version in 12 styles, a neo version that’s a humanist sans-serif version in 12 styles. On top of that most of these versions has a condensed and small caps variations.

That’s a lot. The Legion of Doom should prepare itself for that type family. It’s Freight Pro by the way and probably faster than a speeding bullet.

These superfamilies are really workhorses, rig the feed bag and watch them go all day. meaning they can achieve really strong hierarchy within that single family.

But let’s define a hierarchy first, we can call a visual hierarchy a system that allows a reader to obtain the most important information first and information of descending order in sequence. So, think about a typical article online, it might be something like: the name of the site, navigation, the headline of an article, the article’s publication date &amp; author, a teaser, the article itself, relevant links, related articles, copyright information and an RSS link. From top to bottom the information most important to the reader is organized in a top-to-bottom fashion.

If you use a workhorse you can leverage a strong and cohesive hierarchy with a single family. Imagine the possibilities of this with Calluna and Calluna Sans.

![Calluna &amp;amp; Calluna Sans](http://d.pr/i/fsIa+) And with Adelle &amp; Adelle Sans ![Adelle &amp;amp; Adelle Sans](http://d.pr/i/AeUd+) When you choose good typefaces and good workhorses, the part of creating a good hierarchy becomes a lot less onerous. It provides you with a set of limitations and a sense of structure that guides your thinking.

### Readability vs. Legibility

Legibility is a question that asks, “can I read it?” Readability asks, “do I _want to_ read it?”

There are so many factors that impact these facets of typography, all of which are highly subjective. Really wide spaces between paragraphs of text in an article can be really distracting, so can absolutely tight spaces between paragraphs. Line-height (or leading or the space between lines of text in a paragraph) can play a huge role.

In broad strokes, in body text, if your line lengths are long, you’ll want more line height. Shorter lines of text should have less line height.

The default black and white (or any default colors really) too strict of a contrast for the eye to read for very long. It’s too dramatic of a shift. If you want dark text against a light background, soft grey colors work very well, I shoot for #484848 or #333333. Light backgrounds that need a feel of white, I go with #f6f6f6 or #f3f3f3. Any further and we’ll be diving into color theory and a different set of migraines; we wouldn’t want that now, would we? The point here being defaults are terrible and bad for your eyes.

That should be enough to get you thinking about readability and legibility, we covered with type choices and hierarchy. The name of the game here is balance, consistency and contrast.

### Line Length

The eye naturally reads from left to right in a Z-shaped pattern. It will zig-zag back and forth between lines of text. The further it has to travel across that line the less likely it will want to drop down back to the next line. If you’re line-lengths are particularly long you can exhaust the eye in the process.

Generally what’s accepted is 45-75 characters max per line. That ends up being around 33ems (~528px) and no more than 40ems (~640px). One technique I like using is setting a `max-width` on `&amp;lt;p&amp;gt;` elements to 40ems. Here’s a handy little [bookmarklet](http://css-tricks.com/bookmarklet-colorize-text-45-75-characters-line-length-testing/) to help you test that by counting the number of characters per-line and showing you your target range.

[FitText.js](http://fittextjs.com/) from Paravel, is a jQuery plugin that works great for headlines that let’s you set the width of them to match the containing element, it does not work well for body text.

### Anti-Aliasing

Anti-aliasing &amp; font-smoothing is a pretty much [up for debate](http://www.usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/) topic. For sake of brevity (and there are smarter people than me who can articulate these things better) without font-smoothing, your fonts render jaggedly. Font smoothing, smooths out the visual appearance by altering the way those pixels will be rendered. By default, that’s a sub-pixel rendering it uses the color entities of a pixel. Anti-aliasing the type uses the whole pixel. What this does is smooths the way the font is rendered in different fashions based on the pixels.

Sub-pixel rendering works with a web font is designed and hinted. Anti-aliasing does not. Again, this is an up for debate topic and there are [smarter people than me](http://www.usabilitypost.com/2010/08/26/font-smoothing/), who very fortunately have [thought these things through](http://maxvoltar.com/archive/-webkit-font-smoothing/) and they have [great techniques](http://css-tricks.com/beefing-up-dull-text-in-webkit/) for each of them.

The reason this is important is because it effects the ways fonts visually render and effect their legibility. Typically, I find that most times I load fonts from a service like Adobe’s Typekit, I need to use anti-alias the type. It’s worth exploring.

### Resources

* [Typekit Lists](https://typekit.com/lists)
* [A Pocket Guide to Master Every Day’s Typographic Adventures](http://www.typogui.de/)
* [Jason Santa Maria’s Build Conference Talk](http://vimeo.com/34178417)
* [Typography In Ten Minutes](http://practicaltypography.com/typography-in-ten-minutes.html)
* [Elements of Typographic Style (as Applied to the Web)](http://www.webtypography.net/)
* [Typewolf — Typographic Inspiration for the Modern Web](http://www.typewolf.com/)
* [Upping Your Type Game — Jessica Hische](http://jessicahische.is/thinkingthoughts)
* [Just My Type — A Collection of Font Pairings from Daniel Eden](http://justmytype.co/)
* [Cure for the Common Web Font](http://typographica.org/on-typography/intro-to-typeface-selection/)

* * *

Typography isn’t an exact science, it’s a highly subject gamble with no hard and fast rules. As we traverse our way through building websites and making design choices, type needs to be considered and held in strict reverence. As long as your readers have eyes and read your content, no matter where they go get, we need regard how they will read and interact with it.
