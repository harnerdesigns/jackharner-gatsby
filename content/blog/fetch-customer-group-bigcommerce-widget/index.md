---
date: 2023-02-24T07:34:30.321Z
title: "Fetch Customer Group & More in a BigCommerce Widget" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: "./featuredImage.png"
tags: ["BigCommerce"]
externalLink: ""
published: true
---

Did you know you can fetch Customer data on the frontend in a custom BigCommerce Widget? If you didn't, well it's your lucky day because today I'm going to show you how.

## Schema Setup

This tutorial is going to assume you are using [Bigcommerce's Widget Builder cli](https://developer.bigcommerce.com/docs/ZG9jOjMwNzg1ODgz-widget-builder) and already have it configured to work with your specific store.  (I'll probably write a post about this as well.)

```shell
$ widget-builder create customer-widget
```

That should pop open `localhost:8080` and generate the default folder file boilerplate with three files: 

```
customer-widget/
  - config.json
  - schema.json
  - widget.html
  ```

In that same folder you're going to need to create a two new files: 

```
customer-widget/
  - config.json
  - schema.json
  - widget.html
+ - query.graphql
+ - queryParamsBuilder.json
```

### Setting up query.graphql for a BC Widget

All this file does is hold the GraphQl query you want to run when the widget is placed. You can use this to fetch products, or customer data. Pretty much anything you can fetch with the Storefront GraphQL API you can bring in as data for a widget. For now we're just focusing on getting the Customer Group ID witch you can grab with this query: 

```graphql
{
  customer {
    customerGroupId
  }
}
```

I want to caveat this with the fact that there are many many many dumb things about BigCommerce Widgets ( they are getting better, and the widget-builder tool helps with a some of it ) so just make sure to test everything before comitting to doing something with widgets over baking it custom into the theme. (I've got a post planned for the things you  **can't** do with Widgets, so stay tuned for that)

### What's up with the queryParamsBuilder.json file?

When you have more complex GraphQL queries like fetching products you'll probably need to take in a setting value and use it in the query. In the case of fetching the customer group you don't because there is only one customer object available and it's the user viewing the page.

So for the sake of this article, the `queryParamsBuilder.json` is just an empty object: 

```javascript
{}
```

For whatever reason the query doesn't run if you don't include the file so you need both, even if you're not using any query params. This might change in the future so it might not be necessary after an update to the widget-builder cli

## Using GraphQL Data in the Widget Template

To get the data you just fetched in the template? The fetched data is added on to the `_` object so you can use it in your `widget.html` file like so:

```html
{{#if _.data.customer.customerGroupId "==" 1}}
  // Do something when the customer is assigned
  // to a customer group with the ID of 1
{{/if}}
```

Obviously if you have a more complex query the logic will be much more complex. However, if you need to troubleshoot something, you can use the JSON handlebars helper: `{{json _.data}}` to see everything that's getting returned.

## Why isn't my customer object populated locally with widget-builder?

When using the widget-builder CLI and fetching customer data from GraphQL, unfortunately with `widget-builder start` there (currently) isn't a way to attach a customer to the local version of the widget. 
Once you get the widget published to the store it will start populating properly, but for now there's no way to spoof a customer locally while building a widget.

## Before you go..

If you've made it this far, you're obviously someone who works on the more technical side of BigCommerce development. Given that, I think you might be interested in my post about setting up [Continuous Integration / Deployment with GH Actions for BigCommerce Themes](https://jackharner.com/blog/bigcommerce-stencil-ci-cd-with-github-actions/). 
Let me know if you have any questions or if you've found something different tinkering with BigCommerce Widgets.
