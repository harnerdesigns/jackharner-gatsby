---
date: 2022-07-20T15:55:43.658Z
title: "Custom Menu Order in the WordPress Admin" 
subtitle: ""
featuredImage: "./lan-deng-CFKwL570ZSc-unsplash.jpg"
ogImage: "./ogImage.png"
tags: ["WordPress"]
externalLink: ""
published: true
---

## Turn On The Custom Admin Menu Hook

The `custom_menu_order` hook is a simple hook that just tells WordPress you want to display the Admin menu in a custom order. You filter it with `add_filter()` and can just use the built-in function `__return_true` to (you can probably guess) return true to the hook.

Add this to your `functions.php` file:

```php
 add_filter( 'custom_menu_order', '__return_true' );
```

__[Docs](https://developer.wordpress.org/reference/hooks/custom_menu_order/)__

## ORDER IN THE... WordPress Admin!

Now that Custom Menu Order is turned on, it's time to actually set the order. This is controlled through the `menu_order` hook.

```php
add_filter( 'menu_order', '<custom_menu_order_fn_name>', 10, 1 );
```

The hook sends an array of the current menu item's URLs as the only parameter. Keep in mind it is only the part of the url AFTER  `/wp-admin/`, but including all of the url parameters:

> For example the Pages menu links to `https://example.wp/wp-admin/edit.php?post_type=page` and you just turn it into: `edit.php?post_type=page`.

You can either add and remove things individually from the Menu, or return a completely new array with only the items you want in the order you want.

### Removing Posts Menu (All Posts, Add New, etc.) from WP Admin

Using the PHP function `array_search()` returns the array index for a specific value. If you wanted to remove a specific menu/submenu completely, you just search for the top level pages URL, and use PHP's `unset()` to remove the item from the array.

```php
function jh_remove_posts_menu( $menu_ord ) {
    if (($key = array_search('edit.php', $menu_ord)) !== false) {
        unset($menu_ord[$key]);
    }
    return $menu_ord;
}
add_filter( 'menu_order', 'jh_remove_posts_menu', 10, 1 );
```

### Totally Custom WP Admin Menu Order

Here's an example of throwing out the default menu order and returning an entirely new one. 

> This is probably the way to go if you're going to be moving or removing more than one item from the menu. It's easier to just set the order explicitly, instead of fighting with the array the hook provides.

```php
function jh_custom_menu_order( $menu_ord ) {
 
    return array(
        'index.php', // Dashboard
        'separtor1', // First separator
        'edit.php', // Posts
        'edit.php?post_type=page', // Pages
        'edit.php?post_type=<custom post type>', // Custom Post Type 
        'separator2', // Second separator
        'upload.php', // Media
        'edit-comments.php', // Comments
        'separator3', // Third separator
        'users.php', // Users
        'themes.php', // Appearance
        'plugins.php', // Plugins
        'tools.php', // Tools
        'options-general.php', // Settings
        'separator-last', // Last separator
    );
 }
 add_filter( 'menu_order', 'jh_custom_menu_order', 10, 1 );
 ```

The order of the items in the array determines the order of the menu. You can add and leave out any pages that are accessible from the WordPress Admin.

Don't worry though, the menu still respects User Role Capabilities, so if you add the Settings menu, it still only shows up for the Administrator role.

## Order Array of Core WordPress Pages

As of WordPress v6.0.1, this is the default menu order that gets passed to your `menu_order` filter function:

```php
 [
    'index.php',
    'separator1',
    'edit.php',
    'upload.php',
    'edit.php?post_type=page',
    'edit-comments.php',
    'separator2',
    'themes.php',
    'plugins.php',
    'users.php',
    'tools.php',
    'options-general.php',
    'separator-last',
 ]
```