---
layout: post
title:  "BEM & OOCSS Together"
date:   2014-09-24 14:03:43
categories: CSS
---
CSS needs an architecture to it or it will inevitably fall apart overtime. The more projects the you end up working on the harder they are to maintain over time. When you need to go to work on them or invite someone else to work on them your thinking and rational for your choices needs to be explained for any type of cohesion or maintainability. There's tons of little decisions you make when you start writing CSS just to start with, like your class names, your selectors, or the order of your declarations. If you're using a preprocessor, like SASS, then there's your partials, variables, file structure and mixins to consider along with the others.

Then there's

So we need to some sort of structure and guide for our projects as they grow. There are 3 really popular ways of achieving that and I have a hard time keeping them all straight, I want to highlight them and go over their differences and similarities.

### BEM
BEM stands for Block, Element and Modifier [^1]

### OOCSS
Object Oriented CSS

#### Separation of Structure and Skin
emphasis on reuse [^2]


#### Separation of Containers and Content
Not Duplicating Styles

### Putting the Two Together



[^1]: [BEM](http://bem.info/method/)
[^2]: [Louis Lazarus on Smashing Mag](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
