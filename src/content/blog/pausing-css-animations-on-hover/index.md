---
date: 2020-03-28T17:02:50.298Z
title: "Pausing CSS Animations on Hover" 
subtitle: "Without Any JavaScript"
featuredImage: "./erwan-hesry-IqB5MPcQp6k-unsplash.jpg"
tags: ['CSS', 'Animation']
externalLink: ""
published: true
---

CSS Animations are an easy, lightweight way to add a little motion and excitement to a page. 

One of my favorite simple animations is the Pulse: 

```css
@keyframes pulse {
    0%{
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
```

Which looks like: <span style=" display:inline-block; background: var(--color); height: 2em; width: 2em; border-radius: 10px; animation: pulse 3s infinite;vertical-align: middle; margin: 0 0.5em;"></span>

I've used that animation as a way to emphasize a discount, bring focus to the best deal on a Pricing page, or even just to make a beating heart.

## Avoid Moving Targets

If there are clickable things inside the thing you're animating, you don't want you users to have to click on moving targets. Luckily, there's a really simple way to pause CSS Animations in CSS without JavaScript. The key to it all is the `animation-play-state` property. Let's see it in (SCSS) action: 

```scss
.box{
    animation: pulse 3s infinite;

    &:hover{
        animation-play-state: paused;
    }
}
```

By setting the `animation-play-state` to `paused` on hover, the animation will pause, your click targets will stop moving and your users will be happy. I had experimented with basically removing the animation on hover but that caused lots of jumps and skips. `animation-play-state` literally just pauses the animation and unpauses when you stop hovering. 

Super Simple way to have some more user-friendly animations on your site. 