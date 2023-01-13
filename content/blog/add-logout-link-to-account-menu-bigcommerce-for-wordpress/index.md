---
date: 2019-04-18 16:30:14.000
title: "Add Logout Link To Account Menu - BigCommerce For WordPress" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ["WordPress", "BigCommerce"]
externalLink: ""
published: true
---

BigCommerce for WordPress (BC4WP) allows you to combine the power of the BigCommerce back-end with the customization of WordPress on the front-end for a truly unique E-Commerce experience.

One thing that seems missing out of their integration is a logout link on the My Account page:
<img src="https://harnerdesigns.com/wp-content/uploads/2019/04/Before-Code.png" alt="BC4WP Account Menu - Before" width="474" height="187" class="alignnone size-full wp-image-1056" />

It seemed like an easy fix and since I've started to dabble in making pull requests to Open Source Software, I decided to take a look. The "SubNav" as they've called it is populated in <code>bigcommerce-for-wordpress/src/BigCommerce/Accounts/Sub_Nav.php</code>. It uses <code>get_option</code> to pull the stored Account, Orders, &amp; Address pages and populates the <code>$links[]</code> array with the associated data.

Easy.

Just append the logout information to the <code>$links[]</code> array with <code>wp_logout_url()</code> and the logout link will appear in the my accounts page.

And thus, my first <a href="https://github.com/bigcommerce/bigcommerce-for-wordpress/pull/150">Pull Request</a> to the BC4WP repo was born.

<h2>Shot Down Like A High Schooler Before Prom</h2>

My PR was rejected citing that logging out of WordPress was "Out of Scope" of the BigCommerce for WordPress plugin. However, Jonathan of <a href="https://tri.be/">Modern Tribe</a> (the plugin developers) pointed out that there is a filter already applied to the links generated so that Site Admins can add anything they wish to that list of links: <code>bigcommerce/account/subnav/links</code>.

<h2>So..? How Do You Do It?</h2>

If you're like me and <em>want</em> to add the logout link to the BigCommerce for WordPress Account Page Submenu, just add the following code to your theme's <code>functions.php</code> file:

```php
add_filter('bigcommerce/account/subnav/links', function ($links) {
 $links[] = [
  'url'     =&gt; wp_logout_url(),
  'label'   =&gt; __('Logout', 'bigcommerce'),
  'current' =&gt; false,
 ];
 return $links;
}, 10, 1);
```

And that's it! Now there will be a convenient to use Logout Link on the "My Account" page with BigCommerce for WordPress.
