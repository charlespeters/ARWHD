---
layout: post
title: "SASS-based Grid with a For Loop"
categories:
- SASS
date: 2014-07-02 10:14:43
---

SASS has the ability to have a for loop to return a lot of extensions

<pre><code class="language-scss">
@for $i from 1 through 12 {
    .col-#{$i} {
        float: left;
        width: ( 100% / $i ) - 2%;
        margin-right: 2%;
    }
}

@for $i from 1 through 12 {
    .col-#{$i}-12 {
        float: left;
        width: percentage( $i / 12 ) - 2%;
        margin-right: 2%;
        &:last-child {
            margin-right: 0;
        }
    }
}
</code></pre>
