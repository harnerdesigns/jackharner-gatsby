---
date: 2020-07-17T20:29:24.067Z
title: "BigCommerce Stencil CI/CD with GitHub Actions" 
subtitle: "Publish Your Theme on Every Commit to Master"
featuredImage: "./martin-adams-a_PDPUPuNZ8-unsplash.jpg"
tags: ['BigCommerce', 'git', 'Automation', 'Newsletter']
externalLink: ""
published: false
---

Back in November 2019, GitHub released GitHub Actions. An ["API for cause and effect"](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/). 

Basically, GitHub Actions allow you to program things to happen when other things happen to your repo. For example, running tests on Pull Requests as they come in, or [updating your GitHub Profile Readme with your latest DEV posts](https://dev.to/gautamkrishnar/show-your-latest-dev-to-posts-automatically-in-your-github-profile-readme-3nk8). 

Today I'm going to walk you through using GitHub Actions to publish your BigCommerce Stencil Theme automatically.

## What is CI/CD?

CI/CD stands for Continuous Integration / Continuous Delivery. CI/CD is a coding philosophy that allows teams to publish changes often, without the daunting task of pushing to production manually.  Setting up a solid CI/CD Pipeline will save you and your team plenty of hours of the course of the project to make up for the initial time setting it up. 

## Bye Bye Bitbucket Pipelines.

The first iteration I tried for CI/CD on my Stencil Theme came from [this article](https://medium.com/bigcommerce-developer-blog/how-to-level-up-your-development-workflow-with-continuous-delivery-3a6493cc1d13) from BigCommerce. It talks about how to utilize BitBucket Pipelines to Auto-deploy your theme. I was storing our theme on BitBucket anyway because this was before GitHub offered free private repos, so it ended up working out.

Once GitHub allowed Free Private Repos for individuals (and eventually teams), I decided to move all of our repos back. I still wanted the CI/CD benefits of BitBucket Pipelines so I dove into GitHub Actions to see if I could make it work.  

## Folder Structure

The first thing you need to do to make GitHub Actions work is create a folder called `.github` (note the period at the beginning) in the root of your theme. Inside that folder create one more folder called `workflows`. Now create a file in `/.github/worflows/` called `main.yml`.

This YAML (a recursive acronym that stands for YAML Ain't Markup Language) file is what tells GitHub what to do, when to do it, & what to do it with.

## Configuration

I've included the full code down below, but I'm going to walk through each piece so you understand what's happening and how to adjust for your specific use case.

### Name It

First things first, we've got to name this bad boi. Start your `main.yml` file off with the following: 

```yml
name: Push Stencil Theme To BigCommerce.
```
This defines the name of the Workflow that you are creating and shows up on GitHub each time the workflow runs.

### Master Branch Only

In order to save build minutes, we only want to run the workflow when something is Pushed to the Master branch. For that, add the following:

```yml
on:
  push:
    branches:
      - master
```
The `on` option allows you to specify when to run the workflow. There are about 25 different events that you can configure workflows for, [check out the full list](https://docs.github.com/en/actions/reference/events-that-trigger-workflows). 

### Get A JOB You BUM!

The next thing we need to do is create the Job. This is where all the magic happens inside the Workflow.

```yml
jobs:
  build:
    name: Stencil Push
    runs-on: ubuntu-latest
```
Let's break that block down even further. 

1. `jobs:` - This line defines an array so you can run multiple different jobs at a time.
2. `build:` - This is the ID for the job we are setting up. You can use the ID to reference jobs from other jobs, for example, to check if the first job exited a specific way. 
3. `name: Stencil Push` - Pretty self-explanatory. Defines the name of the job. 
4. `runs-on: ubuntu-latest` - This allows you to configure the OS of the computer that will be processing your Job. You can choose between Linux, Windows, And Mac Operating Systems, depending on your needs. 

### STEP It Up








## The Full Code

```yml
name: Push Stencil Theme To BigCommerce
# This workflow is triggered on pushes to the Master Branch only.
on:
  push:
    branches:
      - master

jobs:
  build:
    name: Stencil Push
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v1

      - name: Set Node version to 10
        uses: actions/setup-node@v1
        with:
          node-version: 10

      - name: Install Dependencies
        run: |
          npm install -g @bigcommerce/stencil-cli
          yarn

      - run: 'echo "$STENCIL" > .stencil'
        shell: bash
        env:
          STENCIL: ${{secrets.STENCIL}}

      - name: Push Theme
        run: |
          stencil push -a Light -d
```


<span>Photo by <a href="https://unsplash.com/@martinadams?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Martin Adams</a> on <a href="https://unsplash.com/s/photos/piping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>