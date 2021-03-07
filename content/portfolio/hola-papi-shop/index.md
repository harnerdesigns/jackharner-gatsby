---
date: 2020-12-18T02:27:29.314Z
title: "Hola Papí Shop" 
logo: "hola_papi_logo.png"
description: "Custom Shopify Theme"
color: "#fee5d7"
tags:
    - Shopify
    - E-Commerce
images: ["./The-Papi-Shop.png", "./Papi-Shop-collection.png"]
weight: 999
published: true
externalLink: "https://holapapi.com"
---
# ¡ Hola Papí !

JP Brammer is a fantastic writer and illustrator, having worked with The Washington Post, Condé Nast, and Netflix. While at Condé Nast he started an LGBTQ+ Advice column called [Hola Papi](https://holapapi.substack.com/) which he currently self-publishes.

He's good friends with a few of the people over at Sweatshirt Media, so it was an obvious choice for him to have us redo his Shopify store where he sells Prints, Clothing, & More.

To match the aesthetic of his art, we wanted to go with a more minimal style. Sweatshirt's lovely Director of Design, Jose Hadathy, did the initial design as well as all of the illustrated assets for the project. We played off of his hand-made style and brought it to the web with hand-drawn assets, and a script font. 

My role in the project was to develop a Custom Shopify Theme combining the provided assets with the initial design. 

## Oh Starry Night

We wanted to spice up the background a bit so Jose drew a collection of stars, which I tiled across the background. In order to keep load times down, I generated a tile-able PNG but included a handful of SVGs of the individual stars to animate. Doing it this way gave me ultimate control over the animation, so we could keep it minimal. 

They were scattered around the page and size randomized with a little SCSS Trickery:

```scss
@for $i from 1 through $stars {
    $size: ((random(100) + 75)/ 100) * 1vmin;
    &:nth-of-type(#{$i}) {
        top: random(100) * 1%;
        left: random(100) * 1%;
        width: $size;
        height: $size;
        animation: blink 20s infinite;
        animation-fill-mode: backwards;
        animation-delay: (-20 + random(40)) * 1s;
    }
}
```
