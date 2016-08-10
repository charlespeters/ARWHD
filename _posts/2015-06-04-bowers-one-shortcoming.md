---
title: Bower's One Shortcoming
date: 2015-06-04 00:00:00 Z
layout: post
---

I'll keep this brief, there's a lot of mindless dog-piling on Bower and package managers in general. I get it, it's an easy target but that doesn't solve the problem (neither does building another package manager).

[Bower](http://bower.io/) is a front-end package manager in the vein of NPM (but you can definitely put your front-end assets on NPM) or Ruby's gem system. Setup is simple, registering packages, installing them is easy.

But it has one major shortcoming. If you have a front-end package with *both* CSS and Javascript it's harder to work with the contents of the package in your build process.

If you're using Gulp, you might want to have a pre or post processor compile your CSS and minify all your partials into a single CSS file. So that's one task to work with most of your stylesheets. But the CSS from your Bower package needs to be concatenated in there somehow and not break your cascade.

Let me give you an example. [Switchery](http://abpetkov.github.io/switchery/) is a nice plugin that gives you iOS style checkboxes. It needs both Javascript and CSS to execute this style of checkboxes and unsurprisingly they're both in the Bower package. So there's now a Javascript module to work with and CSS that needs concatenated.

Fortunately this package use the CommonJS syntax so I can `require('')` the Javascript module in my main Javascript file and have it bundled with something like Browserify or Webpack.

But then I have the CSS to worry about.

- I could copy and paste it into it's own partial (for Sass or whatever you're using to work with CSS).
- I could find a way to resolve the path of an `@import` statement (Node Sass has a really good way of handling it).
- I could have a concatenate step in my build process.
- I could just link to it in the `<head>` of my document.

The first solution is weird because, if the package updates it's CSS the project might break. The second one is probably the best bet, but it would vary from what type of preprocessor or post-processor I was using. Concatenating is an okay option, but not all the CSS in a Bower package is minified (but there's ways around it). Linking it in my `<head>` tag is problematic because then I'd have to include the `bower_components/` directory in my project and usually you ignore your dependencies; plus I would add another HTTP request.

Can you start to see where this is breaking down?

There's no clear `dist/` directory for every package or clear way to work with the contents easily. A little consistency or predefined best practices would go a long way here. Bower is really good at getting me files quickly from the command line but you can't really move contents of the package around expect to update those dependencies. I'm just hoping the community figures out how to overcome this shortcoming, because front-end REALLY needs it's own package manager.
