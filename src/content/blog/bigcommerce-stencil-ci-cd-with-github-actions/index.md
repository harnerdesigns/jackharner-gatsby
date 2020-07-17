---
date: 2020-07-17T20:29:24.067Z
title: "BigCommerce Stencil CI/CD with GitHub Actions" 
subtitle: "Publish Your Theme on Every Commit to Master"
featuredImage: "./martin-adams-a_PDPUPuNZ8-unsplash.jpg"
tags: ['BigCommerce', 'git', 'Automation']
externalLink: ""
published: false
---

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