---
date: 2023-01-13T00:21:19.284Z
title: "Anatomy of a WordPress Theme" 
subtitle: "Required Template Files for Themes & Plugins"
featuredImage: "./joyce-mccown-LAEPsbXOhIM-unsplash.jpg"
ogImage: ""
tags: ["WordPress"]
externalLink: ""
published: true
---

WordPress Development relies on either Themes or Plugins for WordPress. Today, I'm going to walk you through the base files you need for any WordPress Theme.

A few of these files you absolutely need for WordPress to even consider your collection of files a theme, a handful that you kind of need depending on the site requirements, and a lot that allow you to realize WordPress' true potential.

### Absolutely Required

There are only two files that <strong>absolutely required</strong> for WordPress to even recognize your theme as a theme. `index.php` and `style.css`. Let's break down the difference and some necessary parts.

### `index.php`

According to the WordPress <a href="https://developer.wordpress.org/themes/basics/template-hierarchy/">Template Heirarchy</a>, `index.php` is the last fallback for every type of page. If it can't match to any other template file, this is the one that gets rendered.

### `style.css`

This is the main stylesheet of your theme. It needs to live in the root of your theme's folder. "<code>wp-content/themes/<theme-name/style.css</code>". In order for WordPress to treat your theme right (buy it a nice dinner and some expensive wine), you need to include a comment header at the very top (otherwise it's leftovers and clearance wine). It contains information like the name of your theme, description, links to the developers and support, and more. For example, this is the header from WordPress' default <a href="https://github.com/WordPress/twentynineteen/blob/master/style.css">TwentyNinteen Theme</a>:

```css
/*
Theme Name: Twenty Nineteen
Theme URI: https://github.com/WordPress/twentynineteen
Author: the WordPress team
Author URI: https://wordpress.org/
Description: Our 2019 default theme is designed to show off the power of the block editor. It features custom styles for all the default blocks and is built so that what you see in the editor looks like what you'll see on your website. Twenty Nineteen is designed to be adaptable to a wide range of websites, whether you’re running a photo blog, launching a new business, or supporting a non-profit. Featuring ample whitespace and modern sans-serif headlines paired with classic serif body text, it's built to be beautiful on all screen sizes.
Requires at least: WordPress 4.9.6
Version: 1.2
License: GNU General Public License v2 or later
License URI: LICENSE
Text Domain: twentynineteen
Tags: one-column, flexible-header, accessibility-ready, custom-colors, custom-menu, custom-logo, editor-style, featured-images, footer-widgets, rtl-language-support, sticky-post, threaded-comments, translation-ready
This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
Twenty Nineteen is based on Underscores https://underscores.me/, (C) 2012-2018 Automattic, Inc.
Underscores is distributed under the terms of the GNU GPL v2 or later.
Normalizing styles have been helped along thanks to the fine work of
Nicolas Gallagher and Jonathan Neal https://necolas.github.io/normalize.css/
*/
```

If you use a task runner like Gulp you can set up your SCSS tasks to generate the header for you from your `package.json` file so you only have to update that information in one spot.

## Optional But Useful

### `functions.php`

Your theme's Functions file is the file where all the magic that makes WordPress so great happen. It runs when WordPress is initialized and is where you can extend the platform to suit your needs.

>  ## BE CAREFUL WHEN MODIFYING THIS FILE!
> 
> `functions.php` runs on both the Admin side and the front-end, so if you leave a typo or something, it will break your whole site. Work on your theme locally and <em>Never</em> update your `functions.php` in the admin area Theme Editor.


Typically you use the `functions.php` file to enqueue scripts and stylesheets to get loaded dynamically, define widget areas, modify how WordPress outputs pretty much anything, and a whole lot more.

For Example:

```php
function enqueue_my_scripts(){
        wp_enqueue_script( "theme", get_stylesheet_directory_uri().'/theme.js');
        wp_enqueue_style( 'style', get_stylesheet_uri() );
}
add_action('wp_enqueue_scripts', 'enqueue_my_scripts');

```

### `header.php`

This template file gets called with <code>get_header()</code>. In here lives everything you want at the beginning of every page. Things like the opening <code><html></code> tag, your <code><head></head></code> block, your opening <code><body></code> tag and then typically a <code><header></header></code> block.

Make sure to include <code><?php wp_head(); ?></code> at the end of your <code><head></code> block or else WordPress doesn't have a place to inject code into the header.

### `footer.php`

`footer.php`, much like `header.php`, is called with <code>get_footer()</code>. As you could expect, `footer.php` includes all the things you want at the <em>end</em> of every page: your footer, probably a few widget or menu areas, and then the closing tags:

```php
<?php wp_footer(); ?>
</body>
</html>
```

<em><code>wp_footer()</code> is nessecary so that WordPress can add scripts to the end of the document.</em>

### `sidebar.php`

The last of the layout templates, `sidebar.php` get's called with, I'm sure you can guess, <code>get_sidebar()</code>. Depending on the needs of the design, the sidebar can be or display anything.

First things first you need to register your sidebar. Place the following code in your `functions.php` file:

```php
register_sidebar( array(
    'id'          = 'top-menu',
    'name'        = 'Top Menu',
    'description' = 'This sidebar is located at the top.'
) );
```

Remember what you set for the `id` because you need that to get the sidebar content. Add the following code to your `sidebar.php` file:

```php
<div id="sidebar-top-menu" class="sidebar">
    <?php dynamic_sidebar( 'top-menu' ); ?>
</div>
```

Your "Top Menu" sidebar should now show up in the <code>Customize  Widgets</code> area of the WordPress backend.

### `search.php`

The depth and complexity of customizing a search page are out of the scope of this article, but you can do it. Typically this template just needs a loop, fetching posts and outputting as a grid or list. You can also replace this template with an entirely different search tool to handle more advanced searching.

## Post Type Templates

### `single.php`

The Single template is displayed when a single post is queried. It typically contains the full content of the post, your social share links, and potentially a comments section.

You utilize the loop to get the content for the post:

```php
<?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
    // Do Stuff
    <?php endwhile; ?>
<?php endif; ?>
```

### `comments.php`

The Comments template is called from <code>comments_template()</code> from within `single.php`.

Inside `single.php` you would include:

```php
if ( comments_open() || get_comments_number() ) :
    comments_template();
endif;
```

Which just checks if comments are open for that post, or if there are any comments and if so output the default comments form.

See the <a href="https://codex.wordpress.org/Comments_in_WordPress">codex</a> for more info about WordPress comments.

### `page.php`

The Page template is the default template for Pages. The biggest difference between Posts and Pages in WordPress is that pages are for more timeless content. Examples being your site's "About Us" page or the "Contact Us" page. Unlike Posts, Pages cannot be categorized or tagged. They can, however, be arranged hierarchically with each page being able to have many children but only one parent page.

With Pages you can develop custom templates. Either `page-{templateName}.php` or <code>page-templates/page-{templateName}.php</code>. This specific template will match any pages with the slug `{templateName}` unless you add the following PHP comment to the beginning of the template:

```php
<?php /* Template Name: Example Template */ ?
```

This allows WordPress to recognize the template as a custom Page Template and adds a drop down to the Edit Page screen where you can select a specific template for each page.

<img src="https://harnerdesigns.com/wp-content/uploads/2019/05/PageTemplateSelector.png" alt="" class="alignnone size-full wp-image-1081" />

Examples of different page templates you could create include:

<ul>
<li>A centered wide template, with one column and a focus on the content.</li>
<li>Different Templates for Right and Left Sidebar Positions</li>
<li>A more complex grid</li>
<li>Unique one-off landing pages</li>
</ul>

The sky's the limit really. (One of the many beauties of WordPress)

### `attachment.php`

The Attachment template file is very similar to `single.php` except it's for displaying images, videos, files and other things uploaded through the WordPress media upload system.


### `image.php`, `jpg.php`, `video.php`

These are all just more specific versions of `attachment.php`. They allow you to specify custom templates for all images (`image.php`), only JPG images (`jpg.php`), and even videos (`video.php`). These are highly optional, and you should probably be ok with just an `attachment.php` file, but if your site needs the specificity, by all means, specify away.

## Archival Templates

The Archival templates are focused around grouping relevant content together in a useful way. When you run through The Loop on an archive template, it typically returns more than one post so your templates should account for that.

### `archive.php`

The default Archive template. Used if none of the other templates are found. Run through The Loop and output posts. If you want to have different looking pages for your Category Archives vs Looking at a specific Date and so on, use the templates below.

### `category.php`

The Category Template is the default archive template for viewing posts of the same category. Displays a list of posts from a specific category if there is no `category-{categorySlug}.php` file for the category with a slug of `{categorySlug}`.

If `category.php` doesn't exist, WordPress reverts to `archive.php` and then `index.php`

### `tag.php`

Exact same thing as `category.php` but for Tags.

If `tag.php` doesn't exist, WordPress reverts to `archive.php` and then `index.php`

### `taxonomy.php`

This is the default Taxonomy Template for Custom Taxonomies. If you don't have `taxonomy-{taxonomyName}.php` and a Custom Taxonomy page is queried, it defaults back to `taxonomy.php`.

If `taxonomy.php` doesn't exist, WordPress reverts to `archive.php` and then `index.php`

### `author.php`

The Author template is used to display posts by a specific author. In here you can include the author's Biography and social links, etc as well as a list of all the posts that individual has contributed to the site.

### `date.php`

The `date.php` file is pretty similar to the other archival templates, it just allows you to specify a different archive page when looking at a specific date. You could also build a `day.php`, `month.php`, or `year.php` if you needed to be that specific in your date archives.

## Other Templates

### `front-page.php` & `home.php`

The difference between `front-page.php` and `home.php` in WordPress lies in the type of homepage that is displayed on a website.

`front-page.php` is used when a static page is set as the front page of a website. It serves as the template for the page (overriding `page.php`) that is set as the front page in the WordPress settings.

`home.php`, on the other hand, is the template used for the blog posts index page. It is typically the default homepage for a WordPress site if no static page is set as the front page.


### `404.php`

This template is called whenever a user ends up on a page that doesn't exist. Use the 404 template to redirect the users back to the right place or present them with a search bar to help them find what they were looking for.

Be creative with it. Landing on a broken page is never fun for your user and there's a very high chance they'll just close the tab instead of actually trying to find what they were looking for.


## In Conclusion

You should now have at least a basic understanding of what all the different theme files do and when to use them.

Developing for WordPress is pretty simple once you get the concepts down. It's <em>SO</em> customizable though so you can truly create any kind of web application you want.
