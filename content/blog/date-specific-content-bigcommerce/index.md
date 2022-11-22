---
date: 2022-11-22T05:34:40.692Z
title: "Displaying Content Between Specific Dates On BigCommerce" 
subtitle: "Using the Moment Handlebars Helper"
featuredImage: "./lucian-alexe-f2xfTOv0p9Y-unsplash.jpg"
ogImage: "./og-image.png"
tags: ["BigCommerce", "Automation"]
externalLink: ""
published: true
---

Have you ever had to stay up till midnight to flip over to a new BigCommerce theme with banners and content for a big sale (Black Friday, for example)? It's super annoying having to time the theme launch and there's no way to really automate that. Thankfully we can take advantage of the Moment.js Handlebars Helper provided by BigCommerce to their Stencil Themes.

## {{moment}} Helper and How It Works

The `{{moment}}` Handlebars Helper provides access to some aspects of the Moment.js library for handling and calculating dates and times. 

```html
{{moment "January 1, 2022" "YYYY-MM-DD"}}
\\ outputs 2022-01-01
```

You can also use it to calculate dates with relative date & time phrases:

```html
{{moment "5 hours ago" "MM/DD/YYYY HH:mm"}}
// outputs the Date and Time from 5 hours in the past.
```

Although we're going to be taking advantage of the "now" datetime keyword to display banners and other content between specific dates.

## Comparing "Now" To A Specific Date

The magic code snippet for this goes like this: 

```html
{{#and (if (moment "now" "MM/DD/YYYY") ">=" "11/23/2022") (if (moment "now" "MM/DD/YYYY") "<=" "11/28/2022")}}
   // Content to show during Black Friday Weekend 2022
{{else}}
    // Content to show before and after Black Friday Weekend 2022
{{/and}}
```

We're using nested Handlebars helpers to compare and see if the current date is after or equal to 11/23/2022 AND if the current date is before or equal to 11/28/2022. 

If you're going to use this logic in multiple places across the site, you can set your start and end dates as Theme Settings in the `config.json` file and then call them like this: 

```html
{{#and (if (moment "now" "MM/DD/YYYY") ">=" theme_settings.black_friday_start_date) (if (moment "now" "MM/DD/YYYY") "<=" theme_settings.black_friday_end_date)}}
   // Content to show during Black Friday Weekend 2022
{{else}}
    // Content to show before and after Black Friday Weekend 2022
{{/and}}
```

Make sure to match the formatting of the date and the moment helper format, (11/01/2022 vs 11/1/2022) or Moment won't be able to compare the dates properly.

## Go Forth & Automate!

Now you no longer need to try and publish your BigCommerce Stencil theme right at midnight when you start a sale. You can schedule the banners and sale content early, publish the site, and then the content will only display during your specified dates. Hit me up on [Twitter](https://twitter.com/jackharner) if you have any questions!

---

Photo by <a href="https://unsplash.com/@lucian_alexe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lucian Alexe</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  