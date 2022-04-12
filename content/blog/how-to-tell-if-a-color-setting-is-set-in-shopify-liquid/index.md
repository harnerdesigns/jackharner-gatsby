---
date: 2022-04-05T17:48:09.249Z
title: "How To Tell If A Color Setting Is Set In Shopify Liquid" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: "./featuredImage.png"
tags: 
externalLink: ""
published: false
---

```liquid

{% if block.settings.color.alpha > 0 %}

    {%comment%} Color Setting is set {%endcomment%}

{%endif%}
```