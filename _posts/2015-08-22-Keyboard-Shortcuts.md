---
title: Expedite Your Workflow with Keyboard Shortcuts
date: 2015-08-22 22:20:43 Z
categories:
- workflow
layout: post
---

I switch between browser and editor, from editor to terminal and then into the company chat at sporadic times. The amount of  those transitions accrue to the point where it’s time to think critically about whether there aren’t easier ways of do it.

Personally I love workflows and tooling, so the idea of using only using my keyboard to make these transitions would be the height of efficiency to me. Luckily with a little work, it’s not that far off.

### Legend

- ⌘ = Command
- ⌥ = Option / Alt
- ⇧ = Shift

### OS X
There’s not much default in OS X that isn’t super typical stuff (`⌘ + S` for save, `⌘ + T` for new tab, `⌘ + W` to close) but one I didn’t really know about was `⌘ + Tab` that will let you cycle through your open applications. Now I know that one is a little more well known but I didn’t really know about until late 2012. The other two things I do is disable any trigger for Spotlight search and alias ZSH to where I keep my main projects.

### Hammerspoon
[Hammerspoon](http://www.hammerspoon.org/) should be every hacker’s magic wand for manipulating OS X to do whatever you want. You script things with Lua to work with OS X, I mostly use it for window resizing and management. I adapted Brad Cerasani’s config a little bit to make it more my own (you can find that config in my [dotfiles](https://github.com/charlespeters/dotfiles)). So these are the current shortcuts configured in Hammerspoon:

- `Ctrl + ⌘ + ⌥ + ↑` forces a window full width
- `Ctrl + ⌘ + ⌥ + ←` forces a window half width to the left, full screen height
- `Ctrl + ⌘ + ⌥ + →` forces a window half width to the right, full screen height
- `Ctrl + ⌘ + ⌥ + 1` forces a window to 400px wide to the left
- `Ctrl + ⌘ + ⌥ + 2` forces a window to 768px wide to the left
- `Ctrl + ⌘ + ⌥ + 3` forces a window to 1280px wide to the left
- `Ctrl + ⌘ + ⌥ + 4` forces a window to 1440px wide to the left
- `Ctrl + ⌘ + ⌥ + ⇧ + ←` forces a window half width to the left
- `Ctrl + ⌘ + ⌥ + ⇧ + →` forces a window half width to the right
- `Ctrl + ⌘ + ⌥ + ⇧ + ↑` forces a window upward
- `Ctrl + ⌘ + ⌥ + ⇧ + ↓` forces a window downward


### Alfred
Next up is [Alfred](https://www.alfredapp.com/), it’s productivity booster that lets you launch applications and do a whole host of other miraculous things. My hotkey is `⌘ + Space` and from there I launch applications, run terminal commands, search bookmarks & package managers.

- Launch Terminal with a command `> command`
- [Control Rdio `rd pause`](https://github.com/leejones/alfred-rdio-workflow)
- [Search NPM’s registry `npm <query>` (ie. `npm react`)](https://github.com/willfarrell/alfred-pkgman-workflow)
- [Github Commands  `gh <query>`](https://github.com/gharlan/alfred-github-workflow)
- [Add an entry to Fantastical `cal <specifics>`](https://github.com/robb/Fantastical-Alfred-Workflow)
- [Search all of Google Chrome bookmarks `ch <query>`](http://d.pr/f/gkwy)
- [Jump to something in Slack `slk <query>`](https://github.com/fspinillo/slackfred)

The other than the first thing in that list, all of those require a 'workflow' (a script that plugs into the API). In order to use Alfred workflows, you will need to pay for [Powerpack](https://www.alfredapp.com/powerpack/).

### iTerm
I pretty much live on the command line, I love iTerm2. It’s perfect, absolutely perfect. The one great modification I make is that when I open a new pane or new tab, I make it open the same directory I’m currently working in. These are most used shortcuts:

- `⌘ + D` split pane horizontally & to open a new prompt
- `⌘ + ⇧ + D` split pane vertically & to open a new prompt
- `⌘ + [`  or `⌘ + ]` Jump between panes
- `⌘ + ⇧ + [`  or `⌘ + ⇧ + ]` Jump between tabs
- `⌥ + Space` show iTerm window

### Chrome
Pretty much, I always use Chrome for pleasure and profit, this should ease working with it:

- ``⌘ + ` `` Cycle through Windows
- `⌘ + ⌥ + I` Open DevTools
- `⌘ + ⌥ + J` Open Console
- `⌘ + (1 through 8)` Jump to the first 8 specific tabs
- `⌘ + 9` Jump to the last tab

---

That's all I got. Hammerspoon is a huge deal to me to have a scriptable method of moving windows + Alfred, I really don't feel the need to touch my mouse or trackpad much.
