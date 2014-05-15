---
layout: post
title: "Performance"
categories:
- Web Development
---
Designers need to care about performance. It’s a huge contributing factor to user experience and a main cause of higher bounce rates. [80% of page load time](http://www.speedawarenessmonth.com/when-8020-becomes-2080/) is due to the front-end: images, web fonts, scripts, stylesheets.

Without a clear way to detect bandwidth on a device, there’s no real way to tell which users have adequate bandwidth to receive every byte of richness we’d like to share with them. And having to [focus](http://www.charlespeters.net/focusing/) with smaller screens makes us consider performance as a design element versus a development concern.

Bottom line: Performance matters.

There are 4 generally agreed upon methods of boosting a website’s performance. I won’t go into specific best practices for these methods since that’s done by smarter people than me, but all the information below should give you a good idea to know where to go.

### Gzip Your Assets

When you’re requesting a website’s files from a server you can batch them all at once with Gzipping. It creates something like a zip file to send back to the browser to uncompress. By doing this, the file being requested is smaller saving bandwidth and download time.

Full instructions [here](http://css-tricks.com/snippets/htaccess/active-gzip-compression/).

### Concatenate and Minify Your Stylesheets &amp; Scripts

Minifying is really straight forward. CSS and JavaScript are both indifferent to whitespace that isn’t in a string. So each time you add tabs or spaces in your document, you’re making it larger. That’s not bad in development, but on your production site it’s best to minify those files and make them smaller.

When I think of concatenating files, I think of stitching a patchwork quilt of all your different script &amp; stylesheet files. It’s easy enough to do in Codekit or Grunt.js, that way you’re serving a single global Javascript file and a single stylesheet. If you’re preprocessing your CSS you can just import all your files into a single file.

### Choose a Responsive Images Solution

You likely aren’t going to want send a 1000px wide file to a mobile device. You probably aren’t going to want to send a lo-resolution to a 27 inch display.
