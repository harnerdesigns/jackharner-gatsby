---
date: 2020-01-19T18:32:31.115Z
title: "Yarn vs. NPM" 
subtitle: "PACKAGE MANAGER THROWDOWN"
featuredImage: "./featuredImage.jpg"
tags: ['Node']
externalLink: ""
published: false
---

NPM (Node Package Manager) and Yarn are both JavaScript Package managers for ease of installing 3rd Party Tools & Libraries into your modern web development workflow. 

## Major Differences Between Yarn & NPM

1. NPM was developed as an open source project in 2009. Yarn was released by Facebook in 2016 as an improvement upon the foundation that NPM laid.
2. Yarn uses `yarn add` while NPM uses `npm install`
   1. Can be confusing when switching between the two.
3. Yarn keeps a copy of packages you download stored locally. I'll explain why in a little bit.


## Yarn Module Cache

Every time you install a new package with Yarn, it stores a copy of it locally on your computer. This way when multiple projects require the same package, Yarn doesn't have to go download the required package again, it just grabs it off your hard drive and puts it in the project you're installing. 


And you can even install Yarn with NPM: 

```bash
npm install --global yarn
```
> Although, for security reasons that I don't fully understand they recommend NOT installing Yarn through NPM and instead installing Yarn based on your specific operating system ([Ubuntu/Debian](https://classic.yarnpkg.com/en/docs/install#debian-stable), [Mac](https://classic.yarnpkg.com/en/docs/install#mac-stable), [Windows](https://classic.yarnpkg.com/en/docs/install#windows-stable)).


## Blazing Saddles: Package Manager Boogalo

According to a test done by [GitHub user appleboy](https://github.com/appleboy/npm-vs-yarn) that you can reproduce yourself, Yarn both with and without it's cache is significantly faster at installing modules, and even installs without internet! (assuming you've cached the package you're installing).