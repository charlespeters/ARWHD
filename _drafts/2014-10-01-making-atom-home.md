---
layout: post
title:  "Making Atom Home"
date:   2014-10-01 14:03:43
categories: Wordpress
---
Most of my time is spent using Atom Editor from Github, it's by far my favorite text editor. It's amazingly customizable, flexible and I thought I would share how I've customize and use it on a daily basis.

### Favorite Packages
Here are some of my favorite packages and if you star all your favorites on Atom.io, that'll come in handy later in the post.

- Minimap
- Rdio
- Emmet
- Alignment
- Grunt Runner
- File Icons
- JSHint
- Color Picker

### Syntax & UI

I use [Solarized Dark](http://ethanschoonover.com/solarized) by Ethan Schoonover, everwhere. [Solarized Dark](https://atom.io/themes/solarized-dark-syntax) & [Solarized Dark UI](https://atom.io/themes/solarized-dark-ui). I even have it in my [Terminal](). When I'm feeling adventurous I try a few of [these from Daylee Rees](http://daylerees.github.io/)


### Stylesheet

I prefer [Fira Sans](http://mozilla.github.io/Fira/) for the UI and [Fira Mono](http://mozilla.github.io/Fira/) for the editor, both by the incredible Erik Spiekermann.

Here's my styles.less file:

```
REPLACE THIS



```

You can set the font family and size under preferences.


### Replacement Icon

![](/img/atom-icon.png)

I don't really like the icon Atom comes with, but I love this one Daniel Eden put on [Dribbble](http://drbl.in/kncC), modified slightly.

### APM Stars
Maybe you have two machines you work from and you'd like to keep your editors somewhat in sync with each other. From your account on [Atom.io](https://atom.io/) you can star your favorite packages. Then through Atom's shell commands (`atom` & `apm`) you can install your favorite packages. Maybe it's not the best solution to keeping your machines in sync, but I think it helps.

Run the `apm stars --install` command. It'll prompt you for an API token from your [account](https://atom.io/account) and you paste that back in the command line and it will install all the packages & themes you've starred on Atom.io. If you want a list of all your favorites in the command line `apm starred`.

I just found out about this system and I think it's amazing.

### Alfred Workflow

I really like use Alfred (with the PowerPack). You can hit `⌘ + space` and run bash commands, there's a lot of great workflows for everything you'd ever want to do (control Rdio, search Github, run Vagrant, search package managers and [so many](https://github.com/franzheidl/alfred-workflows) [other things](https://github.com/zenorocha/alfred-workflows)).

Typically, I like using Alfred to run an alias command to get things going.

Example:
`arwhd`

```
alias arwhd='cd ~/Git/arwhd-jekyll/ && git pull && atom'
```

I setup a bash alias (it's the same process for Oh My Zsh) in my `~/.bash_profile` file for all my most worked on projects. The alias is just an easy to remember name, it opens my Terminal, changes to the project directory, git pulls and opens the project in Atom.

For most of my purposes that's a great place to start working.


### That One Random Thing

There is one random thing I've found using Atom (I've been using it since it was in beta). If the console in the dev tools in Atom flips out, you should open the application from the command line. Everything I've read on Github issues, Stack Overflow and blogs is that when that happens, it has something to do with the React Editor. Safest bet, open Atom from the command line. Most things can be corrected that way.


### Config &amp; Init Script &amp; Snippets &amp; Autocomplete

Honestly, I don't know what either the config.cson or init script or how to use snippets work. But I would love to learn more about it, if you know any good blog posts or screencasts about it, leave it in the comments section. I also would love a great Autocomplete feature plugin, if you have a favorite, please share it.
