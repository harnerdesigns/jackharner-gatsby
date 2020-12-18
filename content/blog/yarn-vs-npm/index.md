---
date: 2020-01-19T18:32:31.115Z
title: "Yarn vs. NPM"
subtitle: "PACKAGE MANAGER THROWDOWN"
featuredImage: "./featuredImage.jpg"
tags: ["Node"]
externalLink: ""
published: true
---

NPM (Node Package Manager) and Yarn are both JavaScript based package managers for ease of installing 3rd Party Tools & Libraries into your modern web development workflow. They revolutionized the way people shared code. Instead of having to tediously copy and paste, or even worse, link to a hosted version of the library, now you fetch a library or module and store it locally in your project. Yarn and NPM work fairly similarly, but have a few key differences in how they operate.

## Major Differences Between Yarn & NPM

1. NPM was developed as an open source project in 2009. Yarn was released by Facebook in 2016 as an improvement upon the foundation that NPM laid.
2. Yarn uses `yarn add` while NPM uses `npm install` (Can be confusing when switching between the two.)
3. Yarn keeps a copy of packages you download stored locally. I'll explain why in a little bit.
4. Both Yarn and NPM use the `package.json` file to get the packages to install. However, Yarn uses `yarn.lock` and NPM uses `package-lock.json` to more explicitly state which package version to get.

## A Breif History of NPM

NPM was originally released back in January 2010 by Isaac Z. Schlueter and took the JavaScript world by storm. It was the inspiration for Yarn, developed by Facebook in 2016, PHP's package manager Composer, and more. Due to the popularity of the project they eventually incorporated as npm, inc in order to manage enterprise level relationships to ensure the success of the project and the JavaScript community as a whole.

## Yarn Module Cache

Every time you install a new package with Yarn, it stores a copy of it locally on your computer. This way when multiple projects require the same package, Yarn doesn't have to go download the required package again, it just grabs it off your hard drive and puts it in the project you're installing, saving you time and bandwidth.

## Blazing Saddles: Package Manager Boogalo

According to a test done by [GitHub user appleboy](https://github.com/appleboy/npm-vs-yarn) that you can reproduce yourself, Yarn both with and without it's cache is significantly faster at installing modules, and even installs without internet! (assuming you've cached the package you're installing).

Here are the results of their test comparing NPM to Yarn:

| Test                                         | npm install | npm ci | yarn |
| -------------------------------------------- | ----------- | ------ | ---- |
| install without cache (without node_modules) | 3m          | 3m     | 1m   |
| install with cache (without node_modules)    | 1m          | 18s    | 30s  |
| install with cache (with node_modules)       | 54s         | 21s    | 2s   |
| install without internet (with node_modules) | -           | -      | 2s   |

Blazing Fast! Even without using a cache, Yarn is 200% faster than NPM.

## How To Install Yarn

After doing the research for this post I'm definitely sticking to Yarn for projects moving forward. Here's how you can install Yarn and see for yourself just how fast it is and get started integrating it into your workflow.

### Windows

Go to the [Yarn Installation Page](https://classic.yarnpkg.com/en/docs/install), make your you have Node.js installed, download the version you want and run the installer. Yarn goes through and installs for you.

### macOS

You can install Yarn with HomeBrew:

```bash
brew install yarn
```

### Ubuntu / Linux

Go to the [Yarn Installation Page](https://classic.yarnpkg.com/en/docs/install) and follow the steps. You'll have to add Yarn's repo to APT and then install through there.

### NPM - Don't Do This

You can even install Yarn with NPM:

```bash
npm install --global yarn
```

> Although, for security reasons that I don't fully understand they recommend NOT installing Yarn through NPM and instead installing Yarn based on your specific operating system ([Ubuntu/Debian](https://classic.yarnpkg.com/en/docs/install#debian-stable), [Mac](https://classic.yarnpkg.com/en/docs/install#mac-stable), [Windows](https://classic.yarnpkg.com/en/docs/install#windows-stable)).

## Are you going to make the switch?

> Let me know on twitter [@JackHarner](https://twitter.com/jackharner) if you do and which package manager you prefer! Thanks for reading!!
