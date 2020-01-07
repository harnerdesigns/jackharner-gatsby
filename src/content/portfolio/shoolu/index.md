---
date: 2019-07-20T17:12:33.962Z
title: "Shoolu" 
logo: "./shoolu-logo.svg"
description: "E-Commerce Design & More"
color: "#02a974"
tags: ["HTML", "BigCommerce", "Webpack"]
images: ["./New-Shoolu-Home.png", "./New-Shoolu-Product.png"]
weight: 9
---
### The Title:
# Marketing Director

### The Job:
# So Much More Than That

_Disclaimer: I currently work for Shoe Fitters Inc. managing Shoolu.com_

[Shoolu.com](https://shoolu.com) is a fast growing online Shoe Retailer. They carry name brands like New Balance, Adidas, Earth, Dansko, FRYE, UGG & more. My job as the Marketing director is any and everything related to the website. 

This includes: 

* Maintaining and updating our custom BigCommerce Stencil Theme
* Managing PPC Ad campaigns across multiple platforms
* Develop Social Media Marketing materials and content
* Generate Email campaigns and maintain the marketing automation


On top of that, it's a very small company so occasionally I help out with: 

* Developing internal & customer-facing tools. <a href="https://returns.shoolu.com" target="_blank" rel="noopener">Shoolu's Returns Portal</a> streamlined the return process for our customers, reducing support tickets and customer calls. 
* Tracking down or taking & processing product photos to meet Amazon's requirements. I've automated large portions of this task with Photoshop Actions, Powershell, & Python.
* Responding to customer support issues including processing exchanges, fixing shipping errors, & answering general questions. 

### Growth & Marketing

In my time here, we've implemented and experimented with all kinds of different marketing platforms and techniques. In order to find the right mix that brings qualified "ready-to-purchase" traffic, as well as finding the customers that are going to stick with us for the long haul. 

### All Things Web Dev

Shoolu is built on BigCommerce and the front end is built using BigCommerce's Stencil framework. The site was originally developed by an agency hired before I was, but at this point there is not a piece of code on that theme that I haven't tweaked or worked on. 

My improvements to the site include: 

* Updating the Mobile experience of the site, specifically the Header area. The header is essential to the site with direct access to customer support, as well as the search, cart, account info and our main categories. 
* Implementing our soon to launch Rewards Program, including multiple dynamic Calls to action around the site to get people to sign up and (hopefully) drive more repeat purchases. 
* Numerous tweaks and adjustments to the UI, UX, Copy, Content, & Graphics.
* Requested a feature that got implemented into BigCommerce (Thanks Karen!). Being able to submit a url as part of the POST request when logging in to redirect users after successful login. I added a dropdown login form to our header and wanted to be able to log users in and send them back to the same page they were on. I added a hidden field populated with the current URL, and the user is able to seamlessly login and go right back to shopping.
* BigCommerce does not have a way to query specific categories of products and display them programmatically. To deal with this issue, I built an external API that takes in a Category ID, How many products to fetch, and a few other parameters, then returns with the specific products you need to display. The front end then hits the API with AJAX and displays the returned products. Unnecessarily complex, but highly useful for showcasing specific products around the site. At least until BigCommerce expands their Querying capabilities (I hear GraphQL is coming?).