---
date: 2023-06-12T20:30:17.311Z
title: "Previewing A Theme In BigCommerce" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ['BigCommerce']
externalLink: ""
published: false
---

## Easiest Way To Preview A New BigCommerce Theme

1. Log in to your BigCommerce backend. (Usually through `https://yourdomain/manage`)
2. Click on `Storefront > Themes`.
3. Make a mental (or physical) note of the current active theme in case you need to revert back. 
4. Find the theme you want to preview in the list.
5. Click the three dot menu next to the name of the theme you want to preview.
6. Click Apply and then select the theme variation (if there's more than one and hit ok).

### Keep In Mind!

This applies the theme to your live store and anything new in that theme will be visible to the whole world (including bugs!). 

You can easily revert back by following the same steps to re-apply the theme that was live before you applied the preview. 

If you don't want to mess up the live store at all you can still preview themes, but the steps are a little more involved.

## Preview A BigCommerce Theme Without Disturbing The Live Store

Here's how you can preview a updated or new BigCommerce Theme without applying anything live or making any changes to the storefront.

1. Log In to your BigCommerce backend.
2. Click on `Storefront > Themes`.
3. Find the theme you want to preview in the list.
5. Click the three dot menu next to the name of the theme you want to preview.
6. Click `Customize`.
7. Once the Customizer loads fully, click the `Preview` toggle at the top of the page.

Now you can click around and see what the site looks like with the new theme and your Live store is safely untouched.

One issue with this route is if you are previewing a new Custom Template. There's no way to tell the customizer to use a different template for a specific page, and the only way to set a custom page template on a product, category, page, or brand is if it's available in the live theme.

## Using The Stencil CLI

If you're someone like me who has to preview and jump through a ton of themes, even if you're not coding the theme yourself, you should probably set up and familiarize yourself with the Stencil CLI. 

You would be able to preview any theme with just a couple commands: 

```sh
cd /bigcommerce-theme-folder/
git pull
stencil start
```
Obviously this route takes a little bit more setup on your part, which I'll go over in another article. (you can follow the [BigCommerce Docs]() for getting set up with your specific OS). If you're working with multiple stores at all this is the best way (for now 😉) to preview updates to a BigCommerce theme.

## But Wait, There's A Better Way On The Horizon

Obviously this process is fairly tedious. I work with a couple BigCommerce specific agencies and they all have their own clients. All of that tedious-ness compounds into frustration fairly often.

Given that, I'm always looking for the most efficient way to let clients preview themes. But in the end... I decided to build my own. 😅

PreviewCommerce Coming Soon: 

![PreviewCommerce Preview Image]()

Join the [PreviewCommerce Newsletter](https://previewcommerce.com/) to get updates.