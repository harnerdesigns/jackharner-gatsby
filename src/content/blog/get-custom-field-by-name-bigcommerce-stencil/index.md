---
date: 2020-06-09T16:35:09.669Z
title: "Get Custom Field by Name in Bigcommerce Stencil Theme" 
subtitle: ""
featuredImage: "./featuredImage.png"
tags: ['']
externalLink: ""
published: false
---


```
{{#filter product.custom_fields 'InOriginalBox' property='name' }}
    {{#if value '==' 'False'}}
        Not in original box.
    {{/if}}
{{/filter}}
```