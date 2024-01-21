---
date: 2024-01-21T05:10:04.544Z
title: "Using The Locally Running BigCommerce Custom Checkout" 
subtitle: "Without Disturbing The Store's Live Checkout"
featuredImage: "./ramiro-mendes-sMCBEI5zkqc-unsplash.jpg"
ogImage: ""
tags: 
externalLink: ""
published: true
---

When using BigCommerce's Open Source / Custom Checkout. The only way the docs say you can access the locally running version of the custom checkout is by changing the Checkout Script URL setting directly on the site. This breaks that stores checkout for anyone except the developer. BigCommerce obviously recommends only working on a custom checkout on a staging store, but that doesn't always work.

Luckily, there *is* a way to do development work on a custom checkout for a live store without disrupting said live store.

```toc
```


## Stencil-CLI Meets Open Source Checkout

## Modify The Checkout.html

## Now You're Working On The BC Checkout Locally

## Credits

Credit for the discovery goes to [Andrew A. Barber](https://www.linkedin.com/in/andrewabarber), the Engineering Manager @ [Space 48](https://www.space48.com/), whom I met on the BigCommerce Devs Slack group.