---
date: 2019-12-22T18:23:53.017Z
title: "Auto-Generate Content Folders In Gatsby" 
subtitle: "Preformat Your Frontmatter & More"
featuredImage: "./featuredImage.png"
tags: ['Gatsby', 'Node']
externalLink: ""
published: true
---

I have JackHarner.com's Blog and Portfolio content setup as a couple of directories with subdirectories for the individual posts. Like so: 
```
src/
| ...
| content/
  | blog/
    | blog-post/
      | index.md
      | featuredImage.png
    | blog-post-2/
      | index.md
      | featuredImage.png
    | ...
  | portfolio/
    | ...

```
Each of the `index.md` files contains a block of frontmatter dsecribing attributes about the post.

```frontmatter
---
date: 2019-12-22T18:23:53.017Z
title: "Auto-Generate Content Folders In Gatsby" 
subtitle: "Preformat Your Frontmatter & More"
featuredImage: "./featuredImage.png"
tags: ['Gatsby', 'Node']
externalLink: ""
published: true
---
```