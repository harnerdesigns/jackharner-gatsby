---
date: 2020-01-07T17:07:37.363Z
title: "Shoolu Product API" 
logo: "./shoolu-logo.svg"
description: "Filling Gaps In BigCommerce"
color: "#0fb681"
tags: ["PHP", "AJAX"]
images: ["./shoolu-product-grid.png"]
weight: 0
published: true
--- 

BigCommerce has their [Stencil Framework](https://github.com/bigcommerce/stencil-cli) to build themes for their platform. I've extensively customized just about everything I can on Shoolu's Stencil Theme, but one massive thing is missing:

### You can't query specific products to display

I'm sure there's some kind of technical explanation for the lack of querying ability, but I needed it, _so I built it_. 

By using the `bigcommerce-php-api` wrapper for the BigCommerce API I was able to build my own Endpoint. Send it a Category or Brand ID, a count, whether to search sub-categories, and a few other parameters and it'll spit back a list of product IDs.

Back on the stencil theme frontend I would query the Product API, get the list of IDs back, then use BigCommerce's `stencil-utlils` library to query the individual product data and add it to the Product Card template. 

## Next Steps 

* Rebuild the whole project with Node/Express for a more responsive API
* Have the API itself return the product card/data/whatever instead of relying on the `stencil-utils` library.
* Package the server code up in such a way that's shareable.


## But What About GraphQL?
BigCommerce recently launched their GraphQL "Storefront API". Their GraphQL does offer what I need to make this happen, but they have no way to only query products that are in stock. You'd call `getProductsByBrand("BRAND")` and it returns everything in that Brand, regardless of current inventory. 

Apparently this _is_ something BigCommerce is working on, but as of writing it's not a viable option.
