---
layout: post
title: "Client Focused Wordpress Development"
categories:
- Wordpress
date: 2014-01-20
---
Every time I work with a client on a Wordpress related project, the number one thing being asked for is customization. Out of the box, Wordpress really isn’t very opinionated about what it will let you customize and the content you’ll be able to add. It comes with some basic content types (posts, pages, media, attachments, menus) and the rest is up to your imagination.

Since it was designed originally for blogs, Wordpress has come a long way as a real Content Management System, if you should choose to use it that way. But to get there you need customize it out a little bit.

There are a few ways to do that: you can extend your theme’s functions further, or you can use a few choice plugins to get your client’s site easier for them to update.

At this point I should say this, it’s really easy to drown a Wordpress site in plugins and send it off, bloated with a dozen extra scripts and stylesheets. That’s not good practice; it drowns performance, overcomplicates your admin area and can set up your client to accidentally mismanage their website.

The plugins below don’t do that as much. These are plugins I use a lot in client projects and have gotten great feedback, saying that they’ve helped a lot after the project handoff.

### Wootheme Features &amp; Our Team

Wootheme has a few free plugins. These two, [Features](http://wordpress.org/plugins/features-by-woothemes/) and [Our Team](http://wordpress.org/plugins/our-team-by-woothemes/) are my favorite. They are really simple to update for the client; for the developer it’s really simple to implement in your theme files, just call a function like you would anything else and boom! it outputs the content.

They don’t come styled, so that part’s up to you, but if you’re developing your theme the right way with modular class names, styling shouldn’t be too big of a deal.

These are personal favorites of mine.

### Wordpress SEO by Yoast

Every internet thief on the planet has an SEO strategy. Most of them are wolves in sheep’s clothing; that’s what I tell all my clients . The one really great plugin I’ve found for SEO is [Yoast’s](http://wordpress.org/plugins/wordpress-seo/). It’s very straightforward to use; on each post and page there’s a form to fill out and gives a really pragmatic approach to SEO.

### MailChimp Lite

Most email marketing I’ve worked with get run through MailChimp. This [plugin](http://wordpress.org/plugins/mailchimp-for-wp/) is a great way to add to your mailing lists without exporting a .CSV or anything strange. It gives you a short code for a text widget and is pretty flexible with what form fields that sign up will take.

### Custom Post Types UI

Like I said, Wordpress isn’t very opinionated out of the box. You need to extend its function to have other post types beyond posts and pages. Say you need a portfolio or you need a collection of resources, you can create a custom post type.

This plugin [Custom Post Types UI](http://wordpress.org/plugins/custom-post-type-ui/) makes that process easier.

You can register post types in your functions.php file in your Wordpress theme. But if your client ever changes theme, that section would disappear out the admin (but not your database), so this feels more like plugin territory.

### Advanced Custom Fields

Custom fields are a great way to add associated data with a post. The drawback to the custom field that comes with Wordpress is that it’s just a single text input. [Advanced Custom Fields](www.advancedcustomfields.com) gives you a little more of a UI for your custom fields. You can embed instructions for your client.

There’s a lot of great documentation on how to incorporate this into your theme. There is a bit of a learning curve with it, but it’s certainly not impossible. I do highly recommend wrapping the functions it gives you in if statements, in case your client doesn’t fill out that particular field.

### Contact Form 7

Forms are a pain. There’s no way around that. It’s kind of a staple to use them. [Contact Form 7](http://contactform7.com/) is a simple plugin that lets you build a form and embed a short code. I love how easy this is to customize and build.

My one drawback here is that out of the box, Contact Form 7 spits out its scripts and stylesheets on every page. But there’s a way around [that](contactform7.com/loading-javascript-and-stylesheet-only-when-it-is-necessary/).

### WP Help

This is the only plugin I have not used but I love the concept. [WP Help](http://wordpress.org/plugins/wp-help/) lets you leave theme documentation for your client. In theory it should cut down on the number of random questions you get.

* * *

Wordpress is a great CMS; it can be your client’s biggest asset and an ease for your client to update, if you want it to. I’d love to hear from you, though. What plugins are you using your client projects?
