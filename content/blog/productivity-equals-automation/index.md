---
date: 2020-07-01T01:13:41.217Z
title: "Productivity = Automation" 
subtitle: ""
featuredImage: "./franck-v-U3sOwViXhkY-unsplash.jpg"
ogImage: "./featuredImage.png"
tags: ['#DevDiscuss', 'Automation']
externalLink: ""
published: true
---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Time for <a href="https://twitter.com/hashtag/DevDiscuss?src=hash&amp;ref_src=twsrc%5Etfw">#DevDiscuss</a><br><br>Tonight&#39;s topic is... Productivity tools 🛠<br><br>Let&#39;s start with some questions<br><br>- What does it mean to be productive?<br>- How does your view on tools evolve over time?<br>- Recommend some tools! <a href="https://t.co/Wyc84CYx6A">pic.twitter.com/Wyc84CYx6A</a></p>&mdash; DEV Community 👩‍💻👨‍💻 (@ThePracticalDev) <a href="https://twitter.com/ThePracticalDev/status/1278131605878562818?ref_src=twsrc%5Etfw">July 1, 2020</a></blockquote>


## I'm Lazy.

**BUT** I'm the good kind of lazy that works really hard to do as little actual work as possible. If I have to do anything more than twice, I'm going to think about automating it. From scripts to download & process product photos, to hours-saving spreadsheet combiners, there's not much in my job and life that isn't at least partially fueled by automation. 

## My Automation Toolkit

Smarter minds than me can probably go into the depths of Pros and Cons between all of these methods, but I'm not going to. This is just a list of some of the things I've used over the years to speed up mundane tasks. Everything here was used to solve a super specific problem, so think about things in your work day that can be sped up with the help of our friendly ~~overlords~~ computers. 

> ### If It's Repetitive, You Can Probably Get a Computer to Do It For You. 

### Python

Python is often reached for when starting to learn programming. It's simple, it's easy to read, and you don't get lost in a sea of brackets and semi-colons. At the same time it's insanely powerful and I'm sure a very large chunk of the online world is run with python. 

Need to process or combine large spreadsheets on a recurring basis? Check out Pandas. 

Want to automate certain mundane tasks online? Check out Selenium (more on that later 👇). 

Want to make Generative Art or play with fractals? [Python can do that too](https://simpleprogrammer.com/python-generative-art-math/).

### Selenium

Need to submit the same form on a webpage over and over again? Time to bust out Selenium. Selenium is a tool you can use with Python (or Java) to write code to make a browser do things to itself 😉. Python is super verbose and easy to read so you're just telling the browser: 

> "Go Here, type XYZ into that Form, click on this checkbox and then click on that submit button"
> 
> ### "Now do it 999 more times"

**With Great Scripting Power Comes Great Responsibility**. Don't accidentally (or __intentionally__) DoS anybody by bombarding their site with requests. Build in exits and control the timing of requests. All That Fun Stuff.

### PowerShell / Bash Scripts

PowerShell was  my first introduction to scripting. I started with simple "move files around" type scripts and built more stuff from there as the need came up. I wrote a PowerShell script that could fetch product images by SKU from specific sources, crop/resize and rename the files, then upload them over FTP to our web server. What used to be a manual hour long process is now 5-10 minutes tops. 

Bash Scripts are basically the Linux version of PowerShell (or the other way around, I don't know). Super useful for processing things server side. Mixed with Cron, you can automate reports and file fetching fairly simply, back up and maintain your servers automatically, and more. Definitely spend some time learning Bash scripting if you do anything on Linux Servers.

### AutoHotkey

If your on Windows I highly recommend [AutoHotkey](https://www.autohotkey.com/). It allows you to configure almost anything as a keyboard shortcut. 

Some of my most used shortcuts: 

* `]j` will output `- Jack <mm/dd/yyyy>` with the current date. 
* `Ctrl + Pause` starts and stops Spotify, while `Ctrl + <Scoll Lock / Print>` will switch tracks.
* Tapping `Caps Lock` doesn't do anything. Double Tapping `Caps Lock` toggles Caps Lock. I've wasted way too much time backing up when I accidentally hit it AND eVERYTHING sTARTS tYPING lIKE tHIS.
* I use an older mechanical keyboard that doesn't have a Windows key, that I got for $2. I also religiously use Windows Virtual Desktops and the keyboard shortcuts for those are controlled with the Windows Key (Specifically `Windows + Tab` brings up the overview). Google was my friend and I was able to rebind `Caps + Tab` to open up the overview, and `Caps + <A/S>` to switch between desktops. 

## Keyboard Shortcuts -- Learn 'Em. Love 'em. Live 'em.

On top of everything I've configured for AutoHotkey, I swear by keyboard shortcuts. Why waste time reaching for the mouse and then moving it all the way across the screen to dig through 3 levels of menus to click on something, when you can just memorize the keyboard shortcut and be done with it. 

This is doubly true for Photoshop and Illustrator. All of the tools you're using have keyboard shortcuts to flip through them. 

You'll save so much time in the long run and you don't have to move your hand back and forth to the mouse as much. It's a win-win. 

# Go Forth And Automate!

<center><span>Banner Image by <a href="https://unsplash.com/@franckinjapan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Franck V.</a> on <a href="https://unsplash.com/s/photos/automation?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></center>