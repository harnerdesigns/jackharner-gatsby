---
date: 2020-06-09T16:35:09.669Z
title: "Custom Fields By Name"
subtitle: "In BigCommerce Stencil Themes"
featuredImage: "./featured-image.jpg"
tags: ["BigCommerce", "Tutorial"]
externalLink: ""
published: true
---

At [Shoolu](/portfolio/shoolu), we take advantage of Custom Fields on products in BigCommerce all the time. Our inventory software runs some rules against the product data and sets various fields as various values we use to enhance the product pages across the site.

## The Problem

When the theme templates are processed, the custom fields are passed to the frontend as an array of objects:

```json
{
    'product': {

        'custom_fields': [
            {'name': 'Property', 'value': 'Property Value'},
            {'name': 'Property2', 'value': 'Property2 Value'},
            
            ]
    }
}
```
Unfortunately, due to whatever technical limitations or "for security purposes" this doesn't work: 

```
{{#if product.custom_fields.Property2}}

... do something

{{/if}}
```

Why can't they just build `custom_fields` as an object with the custom field names as keys? Require the name to be something that works as a JSON key with a max length and build it that way. 

{{{vert}}}

## The ~~Solution~~ Workaround

There's a Handlebars block tag available called `filter` which allows you to filter an array of objects down by a specific property of the object. 

```
{{#filter product.custom_fields '<FieldName>' property='name' }}
    {{#if value '==' 'True'}}
        Just Do It.
    {{/if}}
{{/filter}}
```

Biggest downside is trying to do things around your theme based on that value, you have to wrap your `{{#if}}` blocks in the `{{#filter}}` block. It doesn't look very intuitive and feels very hacky, but it works so it's what we get. 

If you have a better way of doing this, please please please let me know on [BlueSky](https://bsky.app/profile/jackharner.com).
