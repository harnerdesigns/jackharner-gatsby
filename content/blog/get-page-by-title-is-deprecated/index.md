---
date: 2023-06-18T07:28:16.378Z
title: "Function get_page_by_title is deprecated since version 6.2.0! Use WP_Query instead." 
subtitle: "How to Get a Page By Title with WP_Query"
featuredImage: "./ed-robertson-eeSdJfLfx1A-unsplash.jpg"
ogImage: ""
tags: ["WordPress"]
externalLink: ""
published: true
---

If you want to retrieve a WordPress page by its title using `WP_Query` instead of the deprecated `get_page_by_title` function in WordPress, you can achieve that by setting the `post_title` parameter within the `WP_Query` arguments. Here's an example:

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

In the example above, we're setting the `post_type` parameter to 'page' to specify that we're querying for pages. You can adjust the post type according to your needs. The `post_status` parameter is set to 'publish' to retrieve only published pages. You can modify these parameters as required.

The `posts_per_page` parameter is set to 1 to retrieve only one page matching the title. If you expect multiple pages with the same title, you can increase this value.

Finally, the `post_title` parameter is set to 'Your Page Title', where you should replace it with the actual title you're searching for.

Within the loop, you can access the properties of the retrieved page using functions like `the_title()`, `the_content()`, `get_permalink()`, etc.

Don't forget to call `wp_reset_postdata()` after the loop to reset the query and restore the global post data.