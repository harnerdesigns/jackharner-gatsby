---
date: 2024-01-20T17:02:50.298Z
title: "Pausing CSS Animations on Hover"
subtitle: "Without Any JavaScript"
featuredImage: "./erwan-hesry-IqB5MPcQp6k-unsplash.jpg"
tags: ["CSS", "Animation"]
externalLink: ""
published: true
---

CSS Animations are an easy, lightweight way to add a little motion and excitement to a page. You definitely don't want to overdo it, though. One of the most frustrating things as a user is when you go to click on something, it moves, and you miss. 

Today, I'm going to show you how to pause your CSS animations when someone goes to click on them, *without* JavaScript.

```toc
```

## It All Starts With A CSS Animation

We'll start with one of my favorite simple animations, the Pulse. Add the following to your css:

```css
@keyframes pulse {
  0% {
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

and then apply the animation to your element with the `animation` property: 

```css
.box {
  animation: pulse 3s infinite
}
```

All together that looks like: <span class="box1"></span>

I've used that animation many times to emphasize a discount, bring focus to the best deal on a Pricing page, or even just to make a beating heart. As long as your animation is using css and the `@keyframe` property this method will work.

{{{vert}}}

## Treat Your Users Like Stormtroopers - Avoid Moving Targets

If there are clickable things inside the thing you're animating, you don't want your users to have to click on moving targets. It's so frustrating to click and miss, let alone click, miss, and click on something else. Luckily, there's a really simple way to pause CSS Animations in CSS without JavaScript. 

The key to it all is the `animation-play-state` property. Let's see it in (SCSS) action:

```scss
.box {
  animation: pulse 3s infinite;

  &:hover {
    animation-play-state: paused;
  }
}
```

Which looks like: <span class="box2"></span>

As you can see, it starts and stops the animation when you hover your mouse in and out of it.

By setting the `animation-play-state` to `paused` on hover, the animation will pause, your click targets will stop moving, and your users will be happy. I had experimented with basically removing the animation on hover but that caused lots of jumps and skips. `animation-play-state` literally just pauses the animation and un-pauses when you stop hovering.

## Stop Moving Things That Don't Need To Move

You don't want your users to have to try and click on moving targets. If they miss too many times, they'll get frustrated and no amount of fancy animation will prevent them from leaving for good.

With great animation power, comes great responsibility. Don't animate things users are supposed to click on, but if you have to, stop moving the thing if it looks like the user is about to click on it.