---
date: 2018-04-28 21:30:50.000
title: "Custom Post Type Archives Not Showing Up In WordPress Menus" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ['WordPress']
externalLink: ""
published: true
---

Need to add Custom Post Type Archives to a WordPress menu but they're not showing up? I tore my hair out for a good while before finding the answer. For some reason, most of my custom post types were showing up just fine, but some weren't. The answer is surprisingly simple and shouldn't have taken me as long to figure out as it did.
<h2>Make Sure The Archive Is Turned On</h2>
You can't add a CPT Archive to a menu if that archive doesn't exist. Make sure in your functions.php file that you include the following code when creating the post type:

```php
register_post_type(
    'example', 
    array('has_archive' =&gt; true, 
        [other args]
    )
);
```
<h2>Check Under The "View All" Tab</h2>
Once you made sure that the archive is on, check under the View All tab for the custom post type. It should just be the plural name of your custom post type, but it could be different depending on the settings in your register_post_type() function.

<img class="alignnone wp-image-433 size-full" src="https://harnerdesigns.com/wp-content/uploads/2018/04/View-All-Tab.png" alt="Make Sure To Check The View All Tab" width="600" height="400" />
<h2>Check The Screen Options</h2>
If your custom post type isn't showing up at all on the Menu page, check the Screen Options. For some reason, new CPTs can possibly be unchecked and thus, not show up at all on the Menu page. Make sure everything is checked in the box and you should be all set!

<img class="alignnone wp-image-434 size-full" src="https://harnerdesigns.com/wp-content/uploads/2018/04/Screen-Options.png" alt="Check The Screen Options And Make Sure Your Custom Post Type Is Checked" width="600" height="204" />
<h2>Conclusion. Working Custom Post Type Archives</h2>
And That's It! You should be able to add the Custom Post Type Archives to the menus in WordPress now. Let me know in the comments down below if you have any questions! Be sure to check out the rest of our <a href="https://jackharner.com/blog/tags/wordpress/">WordPress Tutorials</a>.