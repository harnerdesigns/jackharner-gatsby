---
date: 2022-10-25T22:28:27.823Z
title: "Changing the WordPress Login Page Logo" 
subtitle: ""
featuredImage: "./murat-onder-EWDCeCUz8Ho-unsplash.jpg"
ogImage: "./murat-onder-EWDCeCUz8Ho-unsplash.jpg"
tags: ["WordPress", "Code Snippets"]
externalLink: ""
published: true
---

## First Ensure You Have Custom Logo's Enabled In The Theme

Add this to your `functions.php` file:

```php
add_action('init', 'jh_custom_logo_support', 10);
function jh_custom_logo_support() {
    add_theme_support('custom-logo');
}
```

## Changing The wp-login.php Logo

Add this to your `functions.php` file:

```php
<?php
// Changes the /wp-login.php logo to the site's custom logo.
add_action('login_head', 'login_page_custom_logo');

function login_page_custom_logo() {

    $custom_logo_id = get_theme_mod('custom_logo');
    $image = wp_get_attachment_image_src($custom_logo_id, 'full');

    ?>

    <style>
        body.login div#login h1 a {
            background: url("<?=$image[0] ?>") center center / contain no-repeat;
            height: 25vh;
            width: 100%;
        }
    </style>
    <?php
}

// Changes the SEO Text for the logo:
add_action('login_headertext', function () { return get_bloginfo('name') . " Login"; });

// Changes the Logo Link to the Site's Home URL:
add_action('login_headerurl', function() { return get_home_url(); });

// Adds an <h1> under the logo:
add_action('login_message', function () { return "<h1>" . get_bloginfo('name') . " Login</h1>"; });
```

---

Cover Image By <a href="https://unsplash.com/@muratodr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Murat Onder</a>
  