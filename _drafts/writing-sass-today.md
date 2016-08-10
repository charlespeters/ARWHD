---
title: Writing Sass Today
date: 2016-06-13 00:00:00 Z
layout: post
---

As much as front-end developers have fallen in love with PostCSS, the truth remains that people are still writing Sass at their day jobs. Sass is still really popular and for good reason. Sass is widely adoptable by most platforms, it's easy to get started with and a really enjoyable syntax.

But all of those things can be a hindrance. A lower barrier to entry can lead to a lack of structure and organization. Personally, out of all the Sass codebases I've stepped into, not one of them was adhered to a structure or any guidelines.

Reference:

- https://css-tricks.com/sass-style-guide/
- https://sass-guidelin.es/

### Nesting

Don't. No good can come from nesting, resist this temptation. Yes nesting empowers that author to group related CSS and bubble out the parent selector. My issue with nesting sits with the person who has to read that code later who didn't author it. It can really quickly turn into a tangled mess. If you insist on using nesting (again it does have benefits but I don't feel they're worth it), move all the base declarations for parent into a single `&` and then add an extra space between each nested child declaration.

### Variables

- Use clean variable names.
- Take stock of the `!default` flag
- Use local variables with commented purpose.
- Move computation into it's own variable

### Extends

In my opinion, using the `@extend` method is a bad idea, the output is less than ideal because it creates a lengthy selector parse. I do not recommend it. It's probably better to move those declarations you want extended into a base class you apply as a utility. The native `@apply` method seems like a better option to accomplish an that type of extend. Browser support is negligible but the PostCSS toolchain is really helpful for transpiling things like this, there's a plugin that's experimenting with the specification.

Reference:

- [Apply Spec](http://tabatkins.github.io/specs/css-apply-rule/)
- [PostCSS @apply](https://github.com/pascalduez/postcss-apply)

### Mixins

Mixins are cool. They're helpful. Supposedly they're better for performance as they're not chaining selectors to each other. My opinion of mixins is they're useful for grouping values together that need to printed out with slight variation. It's better to try to avoiding to hide magic them. Use them to print out values for certain properties.

Dropbox's Scooter, takes an interesting approach to using mixins in their project. They use default variables to define a naming prefix to a class plus any default values for that class. I'm assuming this is so those base values can be overwritten and these mixins reused later. But the default values outside the mixin are interesting, this ensures that when the mixin is called even if there's no values passed into it, it doesn't return an error.

Never use mixins to output vendor prefixes. There are better tools for this like Autoprefixer.

Reference:

- http://csswizardry.com/2016/02/mixins-better-for-performance/
- https://github.com/dropbox/scooter


### Functions & Directives
- Namespace functions with a hyphen. Like web components there maybe reserved words in CSS, so it might be better for functional values like `color()`, `url()` or `var()` for future Sass compilations to use a hypen to denote that your Sass functions are different from native CSS functions.
- `@for` `@each` loops are cool. But keep them small and nimble.



### Partials

- Partials are my favorite part of Sass. They're in my opinion the best part. They give you the ability to break down your CSS in smaller chunks.
- Put variables related to that module at the top of the file
- Put media queries at the bottom of the file. mqpacker is good at consolidating all of them for you.
- Index directories of partials with an `_all.scss`, they can really clean up your main Sass file where you want all the project partials concatenated.


### Linting

- Sass lint
- Stylelint

Reference:

- https://github.com/sasstools/sass-lint
