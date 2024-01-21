---
date: 2024-01-20T07:28:16.378Z
title: "Function get_page_by_title is deprecated since version 6.2.0! Use WP_Query instead."
subtitle: "How to Get a Page By Title with WP_Query"
featuredImage: "./ed-robertson-eeSdJfLfx1A-unsplash.jpg"
ogImage: ""
tags: ["WordPress"]
externalLink: ""
published: true
---

If you want to retrieve a WordPress page by its title you used to be able to do that with a nifty function called `get_page_by_title`. Well now WordPress has deprecated that specific function and you'll get a warning in your site's logs if you try to use it. I'm going to show you how.

```toc

```

## What happened to get_page_by_title()

The `get_page_by_title()` function was deprecated when WordPress released version 6.2 back in March 2023. The function was old and [apparently caused problems](https://make.wordpress.org/core/2023/03/06/get_page_by_title-deprecated/) where the function could be run before plugins and things finished initializing. This opened up the possibility that `get_page_by_title()` would return a page that the current user wasn't actually supposed to have access to.

WP_Query is a much more advanced way of querying the database for post and post data and isn't susceptible to the same bugs.

## How To Get a Page by Title with WP_Query

Since you shouldn't use `get_page_by_title()` anymore, you can do it instead using `WP_Query` instead.

You can achieve that by setting the `post_title` parameter within the `WP_Query` arguments.

Here's an example WordPress Query to get a page by the title:

```php

$args = array(
    'post_type' => 'page',
    'post_status' => 'publish',
    'posts_per_page' => 1,
    'post_title' => 'Your Page Title'
);

$query = new WP_Query($args);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        // Page found, you can access its properties here
        the_title(); // Example of displaying the page title
    }
} else {
    // Page not found
}

wp_reset_postdata(); // Reset the query
```

## Let's Go Over The Code

In the example above, we're setting the `post_type` parameter to 'page' to specify that we're querying for pages. You can adjust the post type according to your needs. The `post_status` parameter is set to 'publish' to retrieve only published pages. You can modify these parameters as required.

The `posts_per_page` parameter is set to 1 to retrieve only one page matching the title. If you expect multiple pages with the same title, you can increase this value.

Finally, the `post_title` parameter is set to 'Your Page Title', where you should replace it with the actual title you're searching for.

Within the loop, you can access the properties of the retrieved page using functions like `the_title()`, `the_content()`, `get_permalink()`, etc.

Don't forget to call `wp_reset_postdata()` after the loop to reset the query and restore the global post data.

## Make Your Own get_page_by_title() function

If you've developed a theme or plugin that relied on the `get_page_by_title()` function that's now deprecated, you can substitute it for your own instead.

Just define the function somewhere near the top of your theme's `functions.php`.

```php
function jacks_get_page_by_title($title) {
    $args = array(
    'post_type' => 'page',
    'post_status' => 'publish',
    'posts_per_page' => 1,
    'post_title' => $title
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();

            // Returns the Post Object if one is found
            return get_post(); 
        } else {
            return null;
        }
    }
}

$homePagePost = jacks_get_page_by_title( "Home Page" );
```

Then you just have to find and replace all of the old deprecated functions for your new shiny ones. Obviously you'll want to test thoroughly because this could potentially cause some bugs and behave slightly differently than the old function. 