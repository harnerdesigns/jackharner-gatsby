---
date: 2019-07-20T17:12:33.962Z
title: "Recent Posts Markdown Generator" 
logo: "./icon-line.svg"
description: "WordPress Plugin"
color: "#500ba4"
tags: ["WordPress", "PHP", "Markdown"]
images: ["./plugin-screenshot.png"]

--- 
## Generate A Markdown List of your Recent WordPress Posts
<div class="buttons">
<a href="https://wordpress.org/plugins/recent-posts-markdown/" class="button">Download The Plugin</a>
<a href="https://github.com/harnerdesigns/recent-posts-md/" class="button">See The Source</a>
</div>

I built this plugin out of necessity. I was cross posting a lot of articles to [Dev.to](https://dev.to/jackharner) and needed a quick and easy way to generate a list of Recent Post links back to my blog. 

Select the post type you wish to link, and how many posts to get and it outputs the following: 

```markdown
## Recent Posts
* [Something](http://localhost/blank/projects/something/)
* [Lololol](http://localhost/blank/projects/lololol/)
* [Blah Blah Blah](http://localhost/blank/projects/blah-blah-blah/)
```
## Plugin Roadmap
* "Skip most recent post". I didn't want to link to the original post as the first item in the list. So, I'd end up getting 4 posts and then just deleting the first one. It'd save some time to just have that as an option. 
* Link to multiple Post Types. 