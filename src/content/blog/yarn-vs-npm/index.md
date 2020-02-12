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
2. Yarn uses `yarn add` while NPM uses `npm install` (Can be confusing when switching between the two.)
1. Yarn keeps a copy of packages you download stored locally. I'll explain why in a little bit.


## Yarn Module Cache

Every time you install a new package with Yarn, it stores a copy of it locally on your computer. This way when multiple projects require the same package, Yarn doesn't have to go download the required package again, it just grabs it off your hard drive and puts it in the project you're installing, saving you time and bandwidth. 

## Blazing Saddles: Package Manager Boogalo

According to a test done by [GitHub user appleboy](https://github.com/appleboy/npm-vs-yarn) that you can reproduce yourself, Yarn both with and without it's cache is significantly faster at installing modules, and even installs without internet! (assuming you've cached the package you're installing).

|                                              | npm install   | npm ci  | yarn | 
|----------------------------------------------|---------------|---------|------|
| install without cache (without node_modules) | 3m            | 3m      | 1m   |
| install with cache (without node_modules)    | 1m            | 18s     | 30s  |
| install with cache (with node_modules)       | 54s           | 21s     | 2s   |
| install without internet (with node_modules) | -             | -       | 2s   |

Blazing Fast! Even without using a cache, Yarn is 200% faster than NPM. 

## How To Install Yarn

### Windows 
Go to the [Yarn Installation Page](https://classic.yarnpkg.com/en/docs/install), make your you have Node.js installed, download the version you want and run the installer. Yarn goes through and installs for you. 

### macOS

You can install Yarn with HomeBrew: 

```bash
brew install yarn
```

### Ubuntu / Linux

Go to the [Yarn Installation Page](https://classic.yarnpkg.com/en/docs/install), and follow the steps. You'll have to add Yarn's repo to APT and then install through there. 

### NPM - Don't Do This

You can even install Yarn with NPM: 

```bash
npm install --global yarn
```
> Although, for security reasons that I don't fully understand they recommend NOT installing Yarn through NPM and instead installing Yarn based on your specific operating system ([Ubuntu/Debian](https://classic.yarnpkg.com/en/docs/install#debian-stable), [Mac](https://classic.yarnpkg.com/en/docs/install#mac-stable), [Windows](https://classic.yarnpkg.com/en/docs/install#windows-stable)).