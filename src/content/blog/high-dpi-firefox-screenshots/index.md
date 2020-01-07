---
date: 2020-01-07T17:21:21.524Z
title: "Take High-DPI Screenshots In Firefox" 
subtitle: "Perfect for Showing Off Your Work"
featuredImage: "./featuredImage.jpg"
tags: ['']
externalLink: ""
published: false
---
There are several ways to take a screenshot in Firefox. 

## JS Console

Hit `Ctrl + Shift + K` or `F12` to open up the Firefox JavaScript Console. Firefox has a decent set of commands that you can run that interact with the Browser instead of the webpage. `:screenshot` is one of them.  If you type `:screenshot` into the console and hit `Enter` it will take a snapshot of the currently visible viewpoint.

If you want a higher resolution screenshot than your monitor can provide, you need to set the `--dpr` flag. DPR Stands for Device Pixel Ratio, so setting `--dpr 2` tells Firefox to capture the image at 2x the resolution of the viewport.

```
:screenshot --dpr 2
```
If you need to screenshot the full page, you just need to add the `--fullpage` flag. 

```
:screenshot --dpr 2 --fullpage
```
