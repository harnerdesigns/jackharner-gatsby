---
date: 2020-08-01T21:22:11Z
updated: 2024-02-19T11:55:40Z
title: "BigCommerce Stencil CI/CD with GitHub Actions" 
subtitle: "Publish Your Theme on Every Commit to Main"
featuredImage: "./martin-adams-a_PDPUPuNZ8-unsplash.jpg"
tags: ['BigCommerce', 'E-Commerce', 'Git', 'Automation', 'Newsletter']
externalLink: ""
published: true
unlisted: false
---

Post Updated November 21st, 2022 to work with Stencil-CLI >5.x

Back in November 2019, GitHub released GitHub Actions. An ["API for cause and effect"](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/) they called it. 

Basically, GitHub Actions allow you to program things to happen when other things happen to your repo. For example, running tests on Pull Requests as they come in, or [updating your GitHub Profile Readme with your latest DEV posts](https://dev.to/gautamkrishnar/show-your-latest-dev-to-posts-automatically-in-your-github-profile-readme-3nk8). 

Today I'm going to walk you through using GitHub Actions to publish your BigCommerce Stencil Theme automatically.

```toc
```

## What is CI/CD?

CI/CD stands for Continuous Integration / Continuous Delivery. CI/CD is a coding philosophy that allows teams to publish changes often, without the daunting task of pushing to production manually.  Setting up a solid CI/CD Pipeline will save you and your team plenty of hours over the course of the project to make up for the initial time setting it up. 

## Bye Bye Bitbucket Pipelines.

The first iteration I tried for CI/CD on my Stencil Theme came from [this article](https://medium.com/bigcommerce-developer-blog/how-to-level-up-your-development-workflow-with-continuous-delivery-3a6493cc1d13) from BigCommerce. It talks about how to utilize BitBucket Pipelines to Auto-deploy your theme. I was storing our theme on BitBucket anyway because this was before GitHub offered free private repos, so it ended up working perfectly.

Once GitHub allowed Free Private Repos for individuals (and eventually teams), I decided to move all of our repos back. I still wanted the CI/CD benefits of BitBucket Pipelines so I dove into GitHub Actions to see if I could make it work.  

## Folder Structure

The first thing you need to do to setup GitHub Actions is create a hidden folder called `.github` (note the period at the beginning) in the root of your theme. Inside that folder create one more folder called `workflows`. Now create a file in `/.github/workflows/` called `main.yml`.

This YAML (a recursive acronym that stands for YAML Ain't Markup Language) file is what tells GitHub what to do, when to do it, & what to do it with.

{{{vert}}}
## Configuration

I've included the full code down below, but I'm going to walk through each piece so you understand what's happening and how to adjust it for your specific use case.

### Name It

First things first, we've got to name this bad boi. Start your `main.yml` file off with the following: 

```yml
name: Push Stencil Theme To BigCommerce.
```
This defines the name of the Workflow that you are creating and shows up on GitHub each time the workflow runs.

### Main Branch Only

In order to save build minutes, we only want to run the workflow when something is pushed to the `main` branch. For that, add the following:

```yml
on:
  push:
    branches:
      - main
```
The `on` option allows you to specify when to run the workflow. There are about 25 different events that you can configure workflows for, [check out the full list here](https://docs.github.com/en/actions/reference/events-that-trigger-workflows). 

### Get A JOB You BUM!

The next thing we need to do is create the Job. This is where all the magic happens inside the Workflow.

```yml
jobs:
  build:
    name: Stencil Push
    runs-on: ubuntu-latest
    steps: 
```
Let's break that block down even further. 

1. `jobs:` - This line defines an array so you can run multiple different jobs at a time.
2. `build:` - This is the ID for the job we are setting up. You can use the ID to reference jobs from other jobs, for example, to check if the first job exited a specific way. 
3. `name: Stencil Push` - Pretty self-explanatory. Defines the name of the job. 
4. `runs-on: ubuntu-latest` - This allows you to configure the OS of the computer that will be processing your Job. You can choose between Linux, Windows, And Mac Operating Systems, depending on your needs. 
5. `steps:`  This starts the Steps array where you configure everything that happens inside the job. 

### STEP It Up

Jobs have multiple steps, just like workflows can have multiple jobs. The big difference is that steps run sequentially, waiting for one to finish before the next step starts.

#### Check It Out.

First things first we have to checkout the repository. If you're unfamiliar with Docker, basically you're spinning up a new blank virtual machine every time your job runs. In order to manipulate the files you need to get them first. Luckily, GitHub Actions comes with a pre-configured set of tools to do simple things like that:

Start off your `steps` array with **Step 1**: 

```yml
steps:
      - name: Checkout Repository
        uses: actions/checkout@v1
```

The `uses` attribute in this step allows you to run other GitHub Actions inside your Action. This allows things to be modular and reusable. Check out [GitHub.com/actions](https://github.com/actions) for more info.

#### Node v14 Only

Since BigCommerce Stencil requires Node 14, **Step 2** involves installing the specific version of node we need:

```yml
steps:
  
  ...

  - name: Set Node version to 14
    uses: actions/setup-node@v1
    with:
      node-version: 14
```
On this step we now have the `with` attribute. This allows you to pass configuration options to your "Uses" actions. In this case we define `node-version` as `14` since that's what we need for the Stencil CLI to work. 

#### Install Dependencies

**Step 3** is kind of a 2 for 1 deal. With the `run` attribute on the step you can run console commands. The pipe `|` is used to start off a multi line command. Install the Stencil Cli first, and then run whichever package manager you use. In my case it's Yarn. 

```yml
steps:
  
  ...
  
  - name: Install Dependencies
    run: |
      npm install -g @bigcommerce/stencil-cli
      yarn
```

{{{vert}}}

#### Configure Stencil CLI

> Update as of 2022: `stencil init` now has all of the flags available to run through CI. The original setup involved storing the entire contents of the .stencil file as a secret in the repo. 

We need to add a couple secrets to the repo to keep our Stencil CLI Access Token secure. Open up your Repo and click `Settings > Secrets & Variables > Actions > New Repository Secret`. Name the first one `STENCIL_STORE_URL` and paste in your store's mybigcommerce.com url (i.e. `https://store-xxxxxxxxxx.mybigcommerce.com` ). Save that secret and add a second one called `STENCIL_ACCESS_TOKEN` with your Stencil CLI Access Token as the value. GitHub Secrets allow you to use sensitive data in your Actions without exposing it to the world. 

Once again we'll use Step Environment Variables to send our secrets to the `stencil init` command to generate the `secrets.stencil.json` and `config.stencil.json` files used connect the CI runner to our specific BigCommerce store:

```yml
steps:

  ...
- name: Connect to store
      env:
        URL: ${{ secrets.STENCIL_STORE_URL }}
        TOKEN: ${{ secrets.STENCIL_ACCESS_TOKEN }}
      run: stencil init -u $URL -t $TOKEN -p 3000 -h https://api.bigcommerce.com
```

#### Push It Gurl

The last thing to do is push the theme with the Stencil CLI. We use the aforementioned `-a` & `-d` flags to **A**ctivate a specific variation (in our case the variant called "Light") of the theme and to **D**elete the oldest unused theme (there is a limit to how many themes you can have uploaded to BigCommerce at one time).

```yml
steps:

  ...

  - name: Push Theme
    run: |
      stencil push -a Light -d
```

## That's All Folks

After that all you have to do is commit the workflow file to your repo and push it up to Github. As soon as it's in there, github will take that commit and run your Workflow against it. 

Be Careful Though, because at this point anything you push to your `main` branch will get automatically pushed to your live site. Make sure to follow good Git practices and only commit to the `main` branch PRODUCTION READY CODE. That is the beauty of using Git in your CI/CD Workflow because if you break something it's super simple to roll back the `main` branch to the previous commit, make your fixes and try again. 


## The Full Code

```yml
name: Push Stencil Theme To BigCommerce
# This workflow is triggered on pushes to the Main Branch only.
on:
  push:
    branches:
      - main

jobs:
  build:
    name: Stencil Push
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v1

      - name: Set Node version to 14
        uses: actions/setup-node@v1
        with:
          node-version: 14

      - name: Install Dependencies
        run: |
          npm install -g @bigcommerce/stencil-cli
          yarn

      - name: Connect to store
            env:
              URL: ${{ secrets.STENCIL_STORE_URL }}
              TOKEN: ${{ secrets.STENCIL_ACCESS_TOKEN }}
            run: stencil init -u $URL -t $TOKEN -p 3000 -h https://api.bigcommerce.com

      - name: Push Theme
        run: |
          stencil push -a Light -d
```

## Taking The BigCommerce CI/CD Flow A Step Further

Once you get settled into a CI/CD flow that works for you and your clients, here are a handful of ideas to extend it: 

1. Connect the workflow to send work to both a staging and production site.
2. Setup an NPM / Yarn Cache to save time installing all the different dependencies.
3. Modify the theme name with things like the date and the Pull Request info to connect the theme names back to the repo.
4. Create a separate [GitHub action that uses CRON](/blog/github-actions-cron/) to regularly pull in the live theme on the store, capturing any changes your client made directly through the theme editor. 

And pretty much anything else you can think of that you can accomplish with GitHub Actions. Automating the deploy process makes it so much easier to focus on fixing bugs and building new features, instead of wasting time manually deploying new changes.

> <span>Featured Image by <a href="https://unsplash.com/@martinadams?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Martin Adams</a> on <a href="https://unsplash.com/s/photos/piping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>