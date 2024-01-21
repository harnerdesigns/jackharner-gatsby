---
date: 2024-01-21T05:10:04.544Z
title: "Working On A BigCommerce Custom Checkout Locally"
subtitle: "Without Breaking Your Store's Live Checkout"
featuredImage: "./ramiro-mendes-sMCBEI5zkqc-unsplash.jpg"
ogImage: "./working-on-a-bigcommerce-custom-checkout-og-image.png"
tags: ["BigCommerce", "React"]
externalLink: ""
published: true
---

When building or modifying BigCommerce's Open Source checkout-js, the only way [the docs claim](https://developer.bigcommerce.com/docs/storefront/cart-checkout/open-checkouts/guide) you can access the locally running version of your custom checkout is by changing the Checkout Script URL setting directly on the site settings. This breaks that store's checkout for anyone except the developer. BigCommerce obviously recommends only working on a custom checkout on a staging store, but that doesn't always work. It's nice to be able to work with live data while testing and developing the checkout locally.

Modifying the Open Source checkout for a BigCommerce store is no simple task (it's a highly sophisticated React application). Doing so for a production site without completely nuking the live site's actual checkout seemed impossible. Thanks to the BigCommerceDevs Slack (see credits section at the end), it turns out it is actually possible!

Let's jump into how:

```toc

```

## Stencil-CLI Meets Open Source Checkout

If you're working with BigCommerce's open source [checkout-js](https://github.com/bigcommerce/checkout-js) (or the [checkout-sdk](https://github.com/bigcommerce/checkout-sdk-js), though the steps may be slightly different, I'm not sure), I probably don't need to tell you this, but to work on your custom checkout locally you need:

1. A Stencil theme set up to work locally with the stencil-cli
2. BC's Open Source Checkout forked and cloned locally
3. `stencil start` running in the theme's terminal
4. `npm run dev & npm run dev:server` running separately in the checkout's terminal

I'm going to assume you're using these tool's default urls/ports (at the time of writing) but if you for some reason are using something else, just make sure to substitute my values with your own.

```
Theme Running on: http://localhost:3000
Checkout running on: http://127.0.0.1:8080
```

## A Few Simple Modifications To The Checkout.html

Inside your theme's checkout page template, `/templates/pages/checkout.html` we need to make a few changes: modifying the checkout content based on the environment we're running the theme and adding some configuration settings to the window to overwrite where it looks for checkout scripts.

Find your theme's `{{{ checkout.checkout_content }}}` and wrap it in an if/else checking the `in_production` variable. The else gets an empty div with a `checkout-app` id: 

```handlebars
{{#if in_production}}
  {{{ checkout.checkout_content }}}
{{else}}
  <div id="checkout-app"></div>
{{/if}}
```

Just above the `{{{ footer.scripts }}}` tag add the following if statement triggering only if you're using the stencil-cli to run the theme (the `in_development` variable): 

```handlebars
{{#if in_development}}
  <script>
    window.checkoutConfig = { 
        containerId: "checkout-app",
        checkoutId: "{{cart_id}}",
        publicPath: "http://127.0.0.1:8080/"
    };
  </script>
  <script src="http://127.0.0.1:8080/auto-loader-dev.js"></script>
{{/if}}
```

This tells the rest of the checkout to look for and fetch the locally hosted files output through the checkout's `npm run dev:server` command.

## Now You're Working On The BC Checkout Locally

Now, whenever you're running your theme locally through Stencil CLI, your Stencil CLI theme will utilize the locally running version of your checkout as opposed to the live one. 

Wrapping everything in the `is_development` & `is_production` variables allows for some peace of mind at the fact that you'll never leave the checkout completely dead in the water.

This does mean that anytime you need to test anything in the checkout or order-confirmation locally, you *have* to have the custom checkout repo cloned locally and running alongside stencil-cli. If you're working on a store that needs a custom checkout you can bundle both packages into the same repo to make that a little easier to manage.

This little hiccup in the development process is vastly outweighed by the benefit of being able to take advantage of the stencil-cli connected to a live production site, working locally, *and* working on a custom checkout without breaking production.

## Credits

Credit for the discovery goes to [Andrew A. Barber](https://www.linkedin.com/in/andrewabarber), the Engineering Manager @ [Space 48](https://www.space48.com/), whom I met on the [BigCommerce Devs Slack group](https://developer.bigcommerce.com/docs/start/about/support#developer-slack). If you're a BigCommerce Developer, and _NOT_ in that slack group, I highly recommend you join. It's a great place to ask hyper-specific questions and get some answers from the top minds in the space.

Also huge shoutout to my [ghost-coding-client-who-shall-not-be-named](/services/ghost-coding/) for trusting me to dig into the BigCommerce Open Source Checkout for the first time and paying me to learn on the clock.