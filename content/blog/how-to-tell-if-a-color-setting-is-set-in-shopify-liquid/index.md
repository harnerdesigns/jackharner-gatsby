---
date: 2022-04-05T17:48:09.249Z
title: "How To Tell If A Color Setting Is Set In Shopify Liquid" 
subtitle: ""
featuredImage: "./steve-johnson-wpw8sHoBtSY-unsplash.jpg"
ogImage: "./steve-johnson-wpw8sHoBtSY-unsplash.jpg"
tags: ['Shopify', 'Code Snippets']
externalLink: ""
published: false
---

Shopify sections make it super easy to add customizable settings that your clients can control with a wonderful user-friendly UI.

One of the many settings types available to Shopify Sections is the Color Picker:

![Shopify Color Picker](./shopify-color-picker.png)

One slightly annoying part about the Color Picker is that if you set the field to blank in the customizer: 

![Color Picker with Transparent Setting](transparent-color.png)

The specific setting won't actually be null or a falsey value, it returns as `rgba(0,0,0,0)`. Which means: 

```liquid
{% if settings.color %}
    {% comment %} 
        This will always be true. 
    {% endcomment %}
{% else %}
    {% comment %} 
        This will never render. 
    {% endcomment %}
{% endif %}
```

## The Solution

The color picker stores the setting and returns a Shopify [Color Object](https://shopify.dev/api/liquid/objects/color) which allows us to check whether or not a color is visible at all. 

```liquid
{% if block.settings.color.alpha > 0 %}
    {% comment %}
        Color Setting is set
    {% endcomment %}
{% else %}
    {% comment %}
        Color Setting is blank / transparent.
    {% endcomment %}
{%endif%}
```

This treats `rgba(255,255,255,0)` the same as `rgba(0,0,0,0)`. If a color has a 0% alpha, no matter the Red Green or Blue values, the color won't be visible. 

--

Photo by <a href="https://unsplash.com/@steve_j?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Steve Johnson</a> on <a href="https://unsplash.com/s/photos/rainbow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  