---
layout: post
title:  "Making Atom Home"
date:   2014-10-01 14:03:43
categories: Wordpress
---

### Favorite Packages
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


### Replacement Icon

![](/img/atom-icon.png)

I don't really like the icon Atom comes with, but I love this one Daniel Eden put on [Dribbble](http://drbl.in/kncC), modified slightly.

### APM Stars

Install

`apm stars --install`

### Alfred Workflow

I really like use Alfred (with the PowerPack). You can hit `⌘ + space` and run bash commands, there's a lot of great workflows for everything you'd ever want to do (control Rdio, search Github, run Vagrant, search package managers and [so many](https://github.com/franzheidl/alfred-workflows) [other things](https://github.com/zenorocha/alfred-workflows)).



Typically, I like using Alfred to run an alias command.

Example:
`arwhd`

```
alias arwhd='cd ~/Git/arwhd-jekyll/ && git pull && atom'
```

I setup a bash alias (it's the same process for Oh My Zsh) in my `~/.bash_profile` file for all my most worked on projects. The alias is just an easy to remember name, it opens my Terminal, changes to the project directory, git pulls and opens the project in Atom.


### That One Random Thing

If the console in the dev tools in Atom flips out, you should open it from the command line. Everything I've read on Github issues, Stack Overflow and blogs is that when that happens, it has something to do with the React Editor. Safest bet, open Atom from the command line.
