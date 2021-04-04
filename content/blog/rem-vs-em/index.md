---
date: 2021-02-16T05:35:50.249Z
title: "Rem vs Em? What's The Difference?" 
subtitle: "Responsive Typography"
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ['CSS']
externalLink: ""
published: false
---

Your sites need to just work on any device, regardless of screen size. It is what it is. One of the key elements to that is using Responsive Typography. You achieve this responsive enlightenment through Relative units for your `font-size` properties in CSS. The two main one's are `rem` and `em` although there are a couple others like `ch` and `%`.

## To REM or Not To Rem?

The easiest way I remember the difference between `rem` and `em` is that `rem` stands for "root em". By using `rem` you're basing your font-size on the `html` element (not the `body` element, they commonly get mixed up). If the `html` element's font-size is `16px` then `1rem == 16px` and `0.5rem == 8px`. 

On the flip side, using just `em` bases the size of the nearest parent element with a defined font-size. For example, given the following simplified markup:

```html
<html>
    <body>
        <div>
            <p>Lorem Ipsum Dolor Sit Amet</p>
        </div>
    </body>
</html>
```
```css
html{ font-size:   16px; }
div { font-size: 1.5rem; }
p   { font-size:  0.8em; }
```

What would the font-size, in pixels, of the `Lorem Ipsum Dolor Sit Amet` text be? 

Since the `p` tag is using an `em` unit you multiply the `0.8` times the nearest parent with a defined font-size, in this case the `div`. So `0.8 x 1.5rem` == `1.2rem`. You then multiple the `rem` unit by the font-size of the `html` element, so `1.2 x 16px` == `19.2px`. The the `Lorem Ipsum Dolor Sit Amet` text would compute as `19.2px`.

How about with this CSS instead? 

```css
html{ font-size:   16px; }
body{ font-size:   30px; }
div { font-size: 1.5rem; }
p   { font-size:  0.8em; }
```

TRICK QUESTION. The answer is also `19.2px`, so the real question is do you know why?

`rem` is based of the root element's font size, so the `div` is not affected by the `body`'s `30px` font-size. The `p` tag is also unphased by that body's juicy `30px` because it's nearest parent with a defined font-size is `div` and `div` skips up to the `html` tag for all it's font-sizing needs.

Therefore, that `body` line of CSS is USELESS (in this very specific simplified scenario).

## HTML isn't always set to 16px

Most of the modern browsers default the HTML font-size to 16px, however it is something that the user can change in the browser's settings. For Accessibility and Responsive design reasons (which I'll dive into later) your Design and CSS should accommodate for different root font-sizes.

In order to make the math easier, it's common to set the `html` font-size to a 62.5% which multiplied by a default value of 16px leaves you with a nice round `1rem == 10px`:

```css
html { font-size:  62.5%; } // 16px * 0.625 = 10px
div  { font-size: 1.5rem; } // 15px
```

## Responsive Font Size == Accessible Font Size

While nowhere near the only aspect of building an accessible website, having a functional site that works at almost any font size is crucial to keeping your site both responsive and accessible.

By avoiding static pixel values throughout your CSS and sticking to *only* relative units like `rem` & `em` that allows your entire site to maintain it's proportions and usability, regardless of screen size or users font-size settings.

A ton of users bump up the font size on every device they touch. Usually only a couple pixels worth, or they're like my dad who gets about 4 words to fit on the screen, burning calories scrolling just trying to read the news.

## Not Just For Font-Size.

While both `em` and `rem` are based on font-size you can use them with pretty much any other attribute you would use pixels on. The two most obvious choices for it are margin and padding. 

```css
h1{
    margin: 0.5em auto;
}
```
Using font-size relative units in your layout helps with the responsive-ness of your site. No matter what size that `h1` tag ends up being, there will always be half that heading's font size worth of space both above and below. 

If you manage to keep everything relative, you can easily adjust the whole layout by changing font-size of the `html` element with a single media query 