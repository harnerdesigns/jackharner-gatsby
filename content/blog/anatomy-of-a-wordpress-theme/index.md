---
date: 2023-01-13T00:21:19.284Z
title: "Anatomy of a WordPress Theme" 
subtitle: "Required Template Files for Themes & Plugins"
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ["WordPress"]
externalLink: ""
published: true
---

WordPress Development relies on either Themes or Plugins for WordPress. Today, I'm going to walk you through the base files you need for any WordPress Theme.

A few of these files you absolutely need for WordPress to even consider your collection of files a theme, a handful that you kind of need depending on what site you're going for, and a lot that allow you to realize WordPress true potential.

<h2>Absolutely Required</h2>

There are only two files that <strong>absolutely required</strong> for WordPress to even recognize your theme as a theme. <code>index.php</code> and <code>style.css</code>. Let's break down the difference and some necessary parts.

<h3><code>index.php</code></h3>

According to the WordPress <a href="https://developer.wordpress.org/themes/basics/template-hierarchy/">Template Heirarchy</a>, <code>index.php</code> is the last fallback for every type of page. If it can't match to any other template file, this is the one that gets rendered.

<h3><code>style.css</code></h3>

This is the main stylesheet of your theme. It needs to live in the root of your theme's folder. "<code>wp-content/themes/&lt;theme-name&gt;/style.css</code>". In order for WordPress to treat your theme right (buy it a nice dinner and some expensive wine), you need to include a comment header at the very top (otherwise it's leftovers and clearance wine). It contains information like the name of your theme, description, links to the developers and support, and more. For example, this is the header from WordPress' default <a href="https://github.com/WordPress/twentynineteen/blob/master/style.css">TwentyNinteen Theme</a>:

<pre><code class="css">/*
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
</code></pre>

If you use a task runner like Gulp you can set up your SCSS tasks to generate the header for you from your <code>package.json</code> file so you only have to update that information in one spot.

<h2>Optional But Useful</h2>

<h3><code>functions.php</code></h3>

Your theme's Functions file is the file where all the magic that makes WordPress so great happen. It runs when WordPress is initialized and is where you can extend the platform to suit your needs.

<blockquote>
  <h2>BE CAREFUL WHEN MODIFYING THIS FILE!</h2>
  
  <code>functions.php</code> runs on both the Admin side and the front-end, so if you leave a typo or something, it will break your whole site. Work on your theme locally and <em>Never</em> update your <code>functions.php</code> in the admin area Theme Editor.
</blockquote>

Typically you use the <code>functions.php</code> file to enqueue scripts and stylesheets to get loaded dynamically, define widget areas, modify how WordPress outputs pretty much anything, and a whole lot more.

For Example:

<pre><code class="php">function enqueue_my_scripts(){
        wp_enqueue_script( "theme", get_stylesheet_directory_uri().'/theme.js');
        wp_enqueue_style( 'style', get_stylesheet_uri() );
}
add_action('wp_enqueue_scripts', 'enqueue_my_scripts');

</code></pre>

<h3><code>header.php</code></h3>

This template file gets called with <code>get_header()</code>. In here lives everything you want at the beginning of every page. Things like the opening <code>&lt;html&gt;</code> tag, your <code>&lt;head&gt;&lt;/head&gt;</code> block, your opening <code>&lt;body&gt;</code> tag and then typically a <code>&lt;header&gt;&lt;/header&gt;</code> block.

Make sure to include <code>&lt;?php wp_head(); ?&gt;</code> at the end of your <code>&lt;head&gt;</code> block or else WordPress doesn't have a place to inject code into the header.

<h3><code>footer.php</code></h3>

<code>footer.php</code>, much like <code>header.php</code>, is called with <code>get_footer()</code>. As you could expect, <code>footer.php</code> includes all the things you want at the <em>end</em> of every page: your footer, probably a few widget or menu areas, and then the closing tags:

<pre><code class="php">&lt;?php wp_footer(); ?&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<em><code>wp_footer()</code> is nessecary so that WordPress can add scripts to the end of the document.</em>

<h3><code>sidebar.php</code></h3>

The last of the layout templates, <code>sidebar.php</code> get's called with, I'm sure you can guess, <code>get_sidebar()</code>. Depending on the needs of the design, the sidebar can be or display anything.

First things first you need to register your sidebar. Place the following code in your <code>functions.php</code> file:

<pre><code class="php">register_sidebar( array(
    'id'          =&gt; 'top-menu',
    'name'        =&gt; 'Top Menu',
    'description' =&gt; 'This sidebar is located at the top.'
) );
</code></pre>

Remember what you set for the <code>id</code> because you need that to get the sidebar content. Add the following code to your <code>sidebar.php</code> file:

<pre><code class="php">&lt;div id="sidebar-top-menu" class="sidebar"&gt;
    &lt;?php dynamic_sidebar( 'top-menu' ); ?&gt;
&lt;/div&gt;
</code></pre>

Your "Top Menu" sidebar should now show up in the <code>Customize &gt; Widgets</code> area of the WordPress backend.

<h3><code>search.php</code></h3>

The depth and complexity of customizing a search page are out of the scope of this article, but you can do it. Typically this template just needs a loop, fetching posts and outputting as a grid or list. You can also replace this template with an entirely different search tool to handle more advanced searching.

<h2>Post Type Templates</h2>

<h3><code>single.php</code></h3>

The Single template is displayed when a single post is queried. It typically contains the full content of the post, your social share links, and potentially a comments section.

You utilize the loop to get the content for the post:

<pre><code class="php">&lt;?php if ( have_posts() ) : ?&gt;
    &lt;?php while ( have_posts() ) : the_post(); ?&gt;    
    // Do Stuff
    &lt;?php endwhile; ?&gt;
&lt;?php endif; ?&gt;
</code></pre>

<h3><code>comments.php</code></h3>

The Comments template is called from <code>comments_template()</code> from within <code>single.php</code>.

Inside <code>single.php</code> you would include:

<pre><code class="php">if ( comments_open() || get_comments_number() ) :
    comments_template();
endif;
</code></pre>

Which just checks if comments are open for that post, or if there are any comments and if so output the default comments form.

See the <a href="https://codex.wordpress.org/Comments_in_WordPress">codex</a> for more info about WordPress comments.

<h3><code>page.php</code></h3>

The Page template is the default template for Pages. The biggest difference between Posts and Pages in WordPress is that pages are for more timeless content. Examples being your site's "About Us" page or the "Contact Us" page. Unlike Posts, Pages cannot be categorized or tagged. They can, however, be arranged hierarchically with each page being able to have many children but only one parent page.

With Pages you can develop custom templates. Either <code>page-{templateName}.php</code> or <code>page-templates/page-{templateName}.php</code>. This specific template will match any pages with the slug <code>{templateName}</code> unless you add the following PHP comment to the beginning of the template:

<pre><code>&lt;?php /* Template Name: Example Template */ ?&gt;
</code></pre>

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

<h3><code>attachment.php</code></h3>

The Attachment template file is very similar to <code>single.php</code> except it's for displaying images, videos, files and other things uploaded through the WordPress media upload system.

Very similar to visiting a wikipedia page about a specific image file:

<img src="https://harnerdesigns.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-04-at-18.57.16-fullpage-1024x573.png" alt="Wikipedia Attachment Page" class="alignnone size-large wp-image-1082" />

<h3><code>image.php</code>, <code>jpg.php</code>, <code>video.php</code></h3>

These are all just more specific versions of <code>attachment.php</code>. They allow you to specify custom templates for all images (<code>image.php</code>), only JPG images (<code>jpg.php</code>), and even videos (<code>video.php</code>). These are highly optional, and you should probably be ok with just an <code>attachment.php</code> file, but if your site needs the specificity, by all means, specify away.

<h2>Archival Templates</h2>

The Archival templates are focused around grouping relevant content together in a useful way. When you run through The Loop on an archive template, it typically returns more than one post so your templates should account for that.

<h3><code>archive.php</code></h3>

The default Archive template. Used if none of the other templates are found. Run through The Loop and output posts. If you want to have different looking pages for your Category Archives vs Looking at a specific Date and so on, use the templates below.

<h3><code>category.php</code></h3>

The Category Template is the default archive template for viewing posts of the same category. Displays a list of posts from a specific category if there is no <code>category-{categorySlug}.php</code> file for the category with a slug of <code>{categorySlug}</code>.

If <code>category.php</code> doesn't exist, WordPress reverts to <code>archive.php</code> and then <code>index.php</code>

<h3><code>tag.php</code></h3>

Exact same thing as <code>category.php</code> but for Tags.

If <code>tag.php</code> doesn't exist, WordPress reverts to <code>archive.php</code> and then <code>index.php</code>

<h3><code>taxonomy.php</code></h3>

This is the default Taxonomy Template for Custom Taxonomies. If you don't have <code>taxonomy-{taxonomyName}.php</code> and a Custom Taxonomy page is queried, it defaults back to <code>taxonomy.php</code>.

If <code>taxonomy.php</code> doesn't exist, WordPress reverts to <code>archive.php</code> and then <code>index.php</code>

<h3><code>author.php</code></h3>

The Author template is used to display posts by a specific author. In here you can include the author's Biography and social links, etc as well as a list of all the posts that individual has contributed to the site.

<h3><code>date.php</code></h3>

The <code>date.php</code> file is pretty similar to the other archival templates, it just allows you to specify a different archive page when looking at a specific date. You could build a day.php, month.php, or year.php if you needed to.

<h2>Other Templates</h2>

<h3><code>front-page.php</code> &amp; <code>home.php</code></h3>

See <a href="https://wordpress.stackexchange.com/a/110987/162441">This StackOverflow Answer</a> about the difference between <code>front-page.php</code> and <code>home.php</code>.

<h3><code>404.php</code></h3>

This template is called whenever a user ends up on a page that doesn't exist. Use the 404 template to redirect the users back to the right place or present them with a search bar to help them find what they were looking for.

Be creative with it. Landing on a broken page is never fun for your user and there's a very high chance they'll just close the tab instead of actually trying to find what they were looking for.

<h2><a href="https://github.com/harnerdesigns/blank2">Blank2 - Blank WordPress Theme</a></h2>

A good way to hit the ground running on your new WordPress project is with my <a href="https://github.com/harnerdesigns/blank2">Blank2 Blank Starter WordPress theme</a>.

Comes with all the WordPress Template files you need and a pretty nifty Gulp setup to automate at least a few steps in your development (SASS->CSS, Minify JS, BrowserSync, and more).

Run the following code in your terminal to get started:

<pre><code>$ git clone https://github.com/harnerdesigns/blank2.git new-wp-theme
$ cd new-wp-theme &amp;&amp; npm install
</code></pre>

<h2>In Conclusion</h2>

You should now have at least a basic understanding of what all the different theme files do and when to use them.

Developing for WordPress is pretty simple once you get the concepts down. It's <em>SO</em> customizable though so you can truly create any kind of web application you want.
