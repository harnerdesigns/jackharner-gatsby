---
date: 2019-06-13 01:06:34.000
title: "Sick Console Bro! How To Style Your console.log with CSS" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ["JavaScript", "CSS"]
externalLink: ""
published: true
---

<em>Photo by <a href="https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Glenn Carstens-Peters</a> on Unsplash</em>

In <a href="https://developers.google.com/web/tools/chrome-devtools/console/console-write#styling_console_output_with_css">Chrome</a> and Firefox (>31) you can add CSS styles to your console.log() messages. It's fairly simple and straightforward.

All you need to do is include a <code>%c</code> string before your log message and then pass your CSS as a parameter to the console.log( ) function. Like so:

<pre><code class="js">console.log("%c{{Log Message}}", "{{CSS}}");
</code></pre>

For example, this code runs on <a href="https://harnerdesigns.com">my portfolio</a>:

<pre><code class="js">console.log("%cHarner Designs", "color:#233E82; font-family:'Ubuntu'; display: block;font-weight:bold; font-size:48px; background:#fff;");
    console.log("%cLike to dig into the meaty bits of the website?\nThanks for looking! Hit us up on Twitter @harnerdesigns!", "color:#222; font-family:'Ubuntu'; font-weight:100; font-size:24px; background:#fff;");
    console.log("%cDid you know you can style your console output?!", "color:#333; font-family:'Ubuntu'; font-weight:100; font-size:18px; background:#fff;");
    console.log("%cCheck our blog to learn how: https://harnerdesigns.com/blog/style-your-console-log-with-css/", "line-height: 3em; padding: 0.5em; text-align: center; border: 1px dotted #aaa; background:#fff; font-size: 14px;");
</code></pre>

and outputs like this to the console:

<img src="https://harnerdesigns.com/wp-content/uploads/2019/06/styled-console-update.png" alt="" width="1025" height="347" class="alignnone size-full wp-image-1140" />

{{{vert}}}

<h2>Styling Multiple Strings In One Log</h2>

It's also <a href="https://stackoverflow.com/a/13017382/10425698">possible</a> to include multiple strings in one command and style them differently. Check it out:

<pre><code class="js">console.log("%cString1" + "%cString2", "{{CSS for String1}}", "{{CSS for String2}}");
</code></pre>

<h2>Reusing Styles Across Log Messages</h2>

You can also store the CSS You want to apply to a variable and then pass that to multiple console.logs:

<pre><code class="js">var consoleStyle = "{{Reusable CSS}}";
console.log("%cString1", consoleStyle);
console.log("%cString2", consoleStyle);
</code></pre>

<h2>Conclusion</h2>

Do you leave any little easter eggs in your console? Could you see a use case for this in your own projects? I'd love to know down in the comments! Show me some examples of cool things you've found in console messages.
