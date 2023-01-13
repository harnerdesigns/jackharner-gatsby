---
date: 2016-06-20 03:28:56.000
title: "Using Flex Box For Responsive Design" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ['CSS']
externalLink: ""
published: true
---

<h2>Flex Box is Pretty Awesome</h2>

Today I’m going to show you how to use Flex Box to create a row of buttons that turns into a responsive list of links with just CSS. This technique can be useful for having multiple large calls to action. Keep reading to learn what’s going on in the code, or just jump to the bottom for the source code, it’s up to you.

<img src="https://harnerdesigns.com/wp-content/uploads/2016/06/Flex-Grid.png" alt="Flex-Grid" />

<h2>Basic HTML</h2>

We’ll start off with some initial markup:

<pre><code>&lt;container&gt;
    &lt;div class="button"&gt;
        &lt;p&gt;Classes&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="button"&gt;
        &lt;p&gt;Instructors&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="button"&gt;
        &lt;p&gt;Sign&amp;nbsp;Up&lt;/p&gt;
    &lt;/div&gt;
&lt;/container&gt;</code></pre>

<h2>Desktop CSS</h2>

Then we’ll add some CSS to make the Desktop version:

<img src="https://harnerdesigns.com/wp-content/uploads/2016/06/desktop-css.png" alt="desktop css" />

<pre><code>container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    flex-wrap: wrap;
}

.button {
    background: rgba(255, 255, 255, 1);
    width: 15%;
    text-align: center;
    height: auto;
}
</code></pre>

What this does is makes the container the Flex Box for all the buttons. We can then use all of the flex box properties to adjust how the buttons display. For more info on flex box and what you can do with it, check out CSS-Trick’s <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Comprehensive Guide</a>.

<h2>Mobile CSS</h2>

Now for the magic. By adding the cards and the container to the mobile media query we can then manipulate the flex-direction property. As you can guess, flex direction adjusts which way the items will flow inside the container. By setting the container to flex-direction: column, and the cards to flex-direction:row; we can layout the buttons in a much more mobile friendly way.

<img src="https://harnerdesigns.com/wp-content/uploads/2016/06/mobile-css.png" alt="mobile css" />

<pre><code>@media screen and (max-width: 900px) {
  container {
    flex-direction: column;
  }

  .button {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5em;
  }
  .button p {
    padding: 0 0.5em;
  }

}
</code></pre>

That's it! With a little flex box magic and a single media query you can easily have a row of buttons for your users with more screen real estate, and a column for those on their phones and small tablets.

<p class="codepen" data-height="600" data-theme-id="17675" data-slug-hash="XKJBaQ" data-default-tab="css,result" data-user="jackharner" data-embed-version="2">See the Pen <a href="https://codepen.io/jackharner/pen/XKJBaQ/">ROW TO COLUMN</a> by Jack Harner (<a href="https://codepen.io/jackharner">@jackharner</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<script src="//assets.codepen.io/assets/embed/ei.js" async=""></script>
