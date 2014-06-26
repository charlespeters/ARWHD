---
layout: post
title: "Codekit vs. Grunt.js"
date: 2014-06-25
comments: true
tags:
- Tools
- Build Steps
- Grunt
categories:
- Development
---

As a front-end developer that's lots of little things you need to do as a part of your workflow, like compiling your SASS files, running [Autoprefixer](https://github.com/ai/autoprefixer), minifying your SVG files, optimizing your images, linting your Javascript files, firing up a server.

Naturally a tool would come along to simplify and automate some of those that processes. There's a few major tools on the market, namely Codekit, Grunt & Gulp, that I want to break down a little bit.

### Codekit
Codekit is a OS X app for compiling languages like SASS, HAML, Coffeescript and most other front-end tasks like minifying your Javascript and stylesheets. The first Codekit is how I got interested in using SASS on my projects and made me an instant convert but very hard to customize and share your preferences with other collaborators. As far as features go, there's style injection, live reloading, Bower components and it now even ports a local server from MAMP that's accessible on all devices.

The second offering of Codekit is even more amazing than the first. There's a vast overhall done to it and is a lot more customizable, like it will let execute bash scripts on successfully compiling your code. It has a very interesting feature that lets you use includes in HTML through the Kit language that AJ Troxell [explains very well](http://ajtroxell.com/codekits-the-kit-language-how-to-use-it/) how to use. Plus that server thing is [pretty sweet](http://youtu.be/YUgH0jlYur0), sometimes I use Codekit just for that feature.

The thing that grabs me most about Codekit is that it's easy to get up & running with very little effort and you can only really tell it's there when you've hit an error in your code. It just works. It fits in a workflow intuitively and sits very comfortably in the background.

As far as downsides, it costs money (but $36 isn't a terrible price to pay for software you use all day). I've run into errors using Bourbon and Bourbon Neat because the Codekit versions of these libraries are still running on older versions of SASS. The only other thing is that if you're using Grunt previously, it will try and automatically minify your Gruntfile and freak out.

### Grunt.js
Speaking of your Gruntfile, Grunt.js is a little more involved with the project your working on. It requires a good bit of configuration and setup but you get a lot more control and options. I like Grunt because you need to use the command line to get it going and it only runs tasks when you want it to whereas with Codekit you have to tell it not too compile, concatenate, refresh, etc.

Grunt's most appealing feature by far is the number of tasks you can configure and run. For instance there is a task that let's you set a [pixel fallback to every rem declaration](https://github.com/thomasdobber/grunt-remfallback/) and another I love is a [notifier](https://github.com/dylang/grunt-notify) that sends OS X notifications when your hit an error. There's tons of grunt tasks for a nice SVG workflow, like minifying those files and taking out all of the stuff Adobe Illustrate exports with it.

There isn't really anything you can't do with Grunt that you can only do with Codekit. It just requires more configuration. You can spin up a static server with Grunt too and you can choose the ports and every other detail. You can even use Grunt to compile Codekit's [Kit files](https://github.com/fatso83/grunt-codekit).

I think my real allegiance to Grunt is that it got me to use the command line more and think about other tools like Yeoman and Bower. And it took me a while to get the hang off. No matter how many posts Chris Coyier wrote about it. It got me to think about my workflow and scrutinize and make me consider where I really needed to improve things.


### Gulp.js
Then there's Gulp.js, it's by far new and shinier than the other two build tools. I'm not really into Gulp yet. Based on this [talk from Mark Dalgleish](http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/), I should and will love it but it needs to mature more. It is definitely on my radar though. I've watched a few videos on it and it feels like if there's setup and it's easier to customize and get going with your project. I will be spending more time with it soon and will definitely share the results.

---

My basic thought on these build wars is simple: Codekit is for when you wanna get started, Grunt when you to really need to get into things indepth. The point of a good build tool is one you don't have to think about and it fades into the background and lets you work.
