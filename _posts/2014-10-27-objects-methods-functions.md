---
title: Objects, Methods & Functions
date: 2014-10-27 14:03:43 Z
categories:
- JS
layout: post
---

Following up with [a post](http://arwhd.co/js/2014/07/30/Me-Learning-JavaScript/) I wrote a little while back, I'm still learning JavaScript. There's a lot of take in and the thing I find the most difficult is keeping terminology straight. I get what a loop and a variable are, but somethings in JavaScript are really similar in meaning and syntax that it makes it hard to follow stuff.

I've compiled this post as my personal notes to reference from, mostly to keep some of these terms straight.

### Functions
A function is a collection of statements used to return a result. It's away of grouping a task together that you might want to reuse over again. A function can take parameters to abstract it's ability further making it more flexible and reusable.

Here's an example:

<pre><code class="language-javascript">function doThings(first, second){
	var third = first * second + second;
	return third;
}</code></pre>

This is a simple function called `doThings();` and it takes two parameters, first and second then does some basic math with them and returns the result.

You can assign a function to a variable and not name it, this is called an anonymous function. The other thing I took away from looking at functions and variables is that if you're defining a variable in your function, this is known as a local variable and belongs to that function only and can't be used elsewhere.

### Objects
Most things in JavaScript are objects.

> An object is a collection of properties, and a property is an association between a name and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. [^1]

You can think of an object as any real-life tangible noun. Take for example a beer you're drinking. A beer itself has all sorts of characteristics to describe it. Is it an ale? Is it a stout? What type of fermentation does it have? How many ounces is in front of you? How strong is it?

<pre><code class="language-javascript">var beer = newObject();
beer.kind = 'amber ale';
beer.oz = 16;
beer.color = 'copper';</code></pre>

Our object of `beer` now has properties assigned to it for it's color, ounces and kind. These properties are like variables that belong to that object. Methods and properties group together to model something.

### Methods
Methods are functions that belong to objects. For example, `.log();` is a method that belongs to the `console` object, `.getElementById();` that belongs to the `document` object and so on.

---

These are my notes and there's more to come soon.

[^1]: [_Working with objects_ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
