---
date: 2018-11-28 21:41:18.000
title: "Upload SVG Files To WordPress" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ["WordPress"]
externalLink: ""
published: true
---

Allowing SVG Files in WordPress so you can upload them through the Media panel is surprisingly simple. This allows you to harness the power and speed benefits of SVG Files as opposed to Raster Images.

Either add the following snippet to your theme's <code>functions.php</code> file or create a WordPress plugin that executes the following code:

```php
function harnerdesigns_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'harnerdesigns_mime_types');
```

There are <a href="https://security.stackexchange.com/questions/11384/exploits-or-other-security-risks-with-svg-upload">security concerns</a> to allowing SVG files to be uploaded, so make sure that only trusted contributors have access to uploading.
