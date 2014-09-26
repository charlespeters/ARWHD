---
layout: post
title:  "Making Atom Home"
date:   2014-09-25 14:03:43
categories: Development
---
Most of the time I spend working on stuff is in Atom Editor from Github, it's by far my favorite text editor. It's amazingly customizable, flexible and I thought I would share how I customize it and use it on a daily basis.

### Why?
Atom is under constant active development; it's free, open source, and all you have to do to get a question answered is file an issue on Github and someone gets back to you really quickly.

It comes with amazing find in project, markdown preview, you can open your project on Github really quickly, see what branch you're on and all the changes you're making.

You can really customize Atom to make it your own. This whole application is based on web technologies so a little bit of LESS and CoffeeScript can make a huge difference.  Plus, if there's a feature missing out of the box, there are so many amazing packages being made for it everyday.

### Favorite Packages

Here are some of my favorite packages and if you star all your favorites on Atom.io, that'll come in handy later in the post.

Mostly I just love having the minimap on the right and having the toolbar tell me what track is playing from Rdio (there's one for iTunes and Spotify too), running grunt tasks and creating gists really quickly. The color picker and the bezier curve editor is really nice to have.

- [Minimap](https://atom.io/packages/minimap)
- [Rdio](https://atom.io/packages/rdio)
- [Emmet](https://atom.io/packages/emmet)
- [Alignment](https://atom.io/packages/)
- [Grunt Runner](https://atom.io/packages/grunt-runner)
- [File Icons](https://atom.io/packages/file-icons)
- [JSHint](https://atom.io/packages/jshint)
- [Color Picker](https://atom.io/packages/color-picker)
- [Autocomplete Plus](https://atom.io/packages/autocomplete-plus)
- [Project Manager](https://atom.io/packages/project-manager)
- [Atom Beautify](https://atom.io/packages/atom-beautify)
- [Editorconfig](https://atom.io/packages/editorconfig)
- [Gist It](https://atom.io/packages/gist-it)
- [Open Last Project](https://atom.io/packages/open-last-project)
- [Bezier Curve Editor](https://atom.io/packages/bezier-curve-editor)
- [File Types](https://atom.io/packages/bezier-curve-editor)
- [Wordcount](https://atom.io/packages/wordcount)
- [Git Tab Status](https://atom.io/packages/git-tab-status)
- [SVG Preview](https://atom.io/packages/svg-preview)
- [Ember-CLI Helper](https://atom.io/packages/ember-cli-helper)
- [Slash Closer](https://atom.io/packages/slash-closer)
- [Ember Snippets](https://atom.io/packages/ember-snippets)
- [Enhanced Package List](https://atom.io/packages/enhanced-package-list)

### Syntax & UI

I use [Solarized Dark](http://ethanschoonover.com/solarized) by Ethan Schoonover, everywhere. [Solarized Dark](https://atom.io/themes/solarized-dark-syntax) & [Solarized Dark UI](https://atom.io/themes/solarized-dark-ui). I even have it in my [Terminal](https://github.com/altercation/solarized/tree/master/iterm2-colors-solarized). When I'm feeling adventurous I try a few of [these from Daylee Rees](http://daylerees.github.io/).

### Stylesheet

I prefer [Fira Sans](http://mozilla.github.io/Fira/) for the UI and [Fira Mono](http://mozilla.github.io/Fira/) for the editor, both by the incredible Erik Spiekermann.

Here's my styles.less file:

<pre><code class="language-css">body, .workspace, .markdown-preview {
		font-family: 'Fira Sans';
		-webkit-font-smoothing: antialiased;
		font-size: 1.25rem;
}
.markdown-preview h1, .markdown-preview h2, .markdown-preview h3, .markdown-preview h4, .markdown-preview h5, .markdown-preview h6 {
		font-family: 'Fira Sans';
		font-weight: 600;
}
.wrap-guide {
		display: none !important;
}
.tooltip-inner {
		padding: .75rem;
		max-width: 100%;
}</code></pre>

You can set the font family and size under preferences.


### Replacement Icon

![](/img/atom.jpg)

I don't really like the icon Atom comes with, but I love this one Daniel Eden put on [Dribbble](http://drbl.in/kncC).

### APM Stars
Maybe you have two machines you work from and you'd like to keep your editors somewhat in sync with each other. From your account on [Atom.io](https://atom.io/) you can star your favorite packages. Then through Atom's shell commands (`atom` & `apm`) you can install your favorite packages. Maybe it's not the best solution to keeping your machines in sync, but I think it helps.

Run the `apm stars --install` command. It'll prompt you for an API token from your [account](https://atom.io/account) and you paste that back in the command line and it will install all the packages & themes you've starred on Atom.io. If you want a list of all your favorites in the command line `apm starred`.

I just found out about this system and I think it's amazing.

### Alfred Workflow

I really like use Alfred (with the PowerPack). You can hit `⌘ + space` and run shell commands, and there's a lot of great workflows for everything you'd ever want to do (control Rdio, search Github, run Vagrant, search package managers and [so many](https://github.com/franzheidl/alfred-workflows) [other things](https://github.com/zenorocha/alfred-workflows)).

Typically, I like using Alfred to run an alias command to get things going.

Example:
`arwhd`

```
alias arwhd='cd ~/Git/arwhd-jekyll/ && git pull && atom'
```

I setup a bash alias (it's the same process for Oh My Zsh) in my `~/.bash_profile` file (`.zshrc` for Oh My Zsh) for all of my most active projects. The alias is just an easy-to-remember name; it opens my Terminal, changes to the project directory, git pulls and opens the project in Atom.

For most of my purposes that's a great place to start working.

### That One Random Thing

There is one random thing I've found using Atom (I've been using it since it was in beta). If the console in the dev tools in Atom flips out, you should open the application from the command line. Everything I've read on Github issues, Stack Overflow and blogs is that when that happens, it has something to do with the React Editor. Safest bet: open Atom from the command line. Most things can be corrected that way.

### Config &amp; Init Script &amp; Snippets &amp; Autocomplete

Honestly, I don't know what either the config.cson or init script are or how to use snippets work. But I would love to learn more about it. If you know any good blog posts or screencasts about it, leave it in the comments section. I also would love a great Autocomplete feature plugin, so if you have a favorite, please share it.

---

That pretty much covers everything I've done to Atom to make it the best space for me to write code.
