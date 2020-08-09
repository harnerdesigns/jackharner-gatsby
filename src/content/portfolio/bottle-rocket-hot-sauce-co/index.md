---
date: 2020-08-08T20:34:40.151Z
title: "Bottle Rocket Hot Sauce" 
logo: "bottle-rocket-logo--red.svg"
description: "Custom Shopify Theme"
color: "#e94939"
tags: 
    - Shopify
    - E-Commerce
    - Animation
images: ["Presale-Landing-Page.png"]
weight: 999
published: true
externalLink: https://bottlerocketsauce.com

---

[Bottle Rocket Hot Sauce Co.](https://bottlerocketsauce.com) was started by the fine folks over at Sweatshirt Media. I had the pleasure of building out the Shopify Theme they used for the pre-sale launch.

## Objective:
> ### Get customers checked out with as few clicks as possible.

They were launching with only 4 sauces so it didn't make sense to do a standard catalog style e-commerce store. So the plan was to just lay out the 4 sauces on the landing page, let users decide how many of each they want and take them straight to the checkout with a Buy Now button. Shopify automatically sets you up with ShopPay where users can checkout in something like 2 clicks, if they're already set up. 

## On Brand Animation

With a name like Bottle Rocket Hot Sauce, I just had to make the bottles take off when you click add to cart. I had to, and I wasn't going to take no for an answer. 

<iframe src="https://player.vimeo.com/video/446253392" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

I utilized [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) for the animations and it makes it super simple. 


```js
var launch = gsap.timeline();
launch.to(".prepped", {
    duration: 1,
    ease: Power4.easeIn,
    opacity: 0,
    y: "-=500",
    stagger: 0.2,
});
```


After the bottles take off, then it runs the "Add to Cart" actions through Shopify's AJAX API, adding the selected sauces to the cart and sending the users who clicked "Buy Now" to the Checkout.  Once that's all finished I run one more GSAP animation to bring the bottles back so the users not staring at a blank page while the checkout is loading.

```js
// Sets the bottles back 
// below where they were.
launch.set(".prepped", {
        y: "+=1000"});

// Slides the bottles back 
// into their original position.
launch.to(".prepped", {
        duration: 0.5,
        ease: Power4.easeOut,
        opacity: 1,
        y: "-=500",
        delay: 1,
      });
```

## 'Thank You's and Stuff

For my first Shopify store ever, I'm pretty stoked with how this one came out. It would look half as good without the help of [Jay](https://sweatshirtmedia.com/team#jay), [Jose](https://sweatshirtmedia.com/team#jose), [Collin](https://sweatshirtmedia.com/team#collin) & everyone else at [Sweatshirt](https://sweatshirtmedia.com). Thanks y'all for trusting me with your Saucy site, and I can't wait to try them!

This is an ongoing project so be sure to check back for updates! Oh and go buy some damn sauce (Tell them Jack sent you. I doubt it will get you anything, but it probably won't hurt).