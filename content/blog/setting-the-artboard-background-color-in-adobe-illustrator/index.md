---
date: 2023-01-13T00:24:21.343Z
title: "Setting The Artboard Background Color In Adobe Illustrator" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ["Graphic Design", "Illustrator"]
externalLink: ""
published: true
---

Sometimes when you're working with graphic design you end up working on a piece that's meant to be displayed on a non-white background, like a logo or web icon. Unfortunately, there isn't really a way to set the background color of an artboard in Illustrator, but let's look at a few workarounds that acheive the same effect.

<h2>The Simplest Way</h2>

The simplest, but probably not best way of accomplishing a colored background is to just draw out a rectangle the size of your artboard, send it to back <code>Ctrl + Shift + [</code> and lock it <code>Ctrl + 2</code>.

<img src="https://harnerdesigns.com/wp-content/uploads/2019/07/The-easiest-way__cropped.gif" alt="" class="alignnone size-full wp-image-1157" />

I've run into problems with this method however, where I'll go to export the file as an SVG but forget to delete the background and end up with an extra element in the code or a solid color where you wanted transparency in a PNG.

Useful if you just need to check a quick background color, just don't forget to delete it when you're saving!

{{{vert}}}

<h2>The Better Way</h2>

The better, not quite as simple way to get a colored artboard is to take advantage of the Transparency Grid. It's used to show which parts of a project are transparent and how much. To get it setup go to <code>File &gt; Document Setup</code>

<img src="https://harnerdesigns.com/wp-content/uploads/2019/07/Document-Setup-Menu-Item.png" alt="Document Setup Menu Item" width="576" height="624" class="alignnone size-full wp-image-1159" />

Under the Transparency section you need to double click on both of these two color squares and set them to whatever color you want your background to be.

<img src="https://harnerdesigns.com/wp-content/uploads/2019/07/document-setup-settings.png" alt="The Settings You Need to change" width="1080" height="598" class="alignnone size-full wp-image-1161" />

Click OK on the Document Settings panel and then go to <code>View &gt; Show Transparency Grid</code>

<img src="https://harnerdesigns.com/wp-content/uploads/2019/07/Show-Transparency-Grid.png" alt="" width="705" height="823" class="alignnone size-full wp-image-1162" />

You can also use the keyboard shortcut: <code>Ctrl + Shift + D</code> to toggle the Transparency Grid on and off.

<img src="https://harnerdesigns.com/wp-content/uploads/2019/07/transparency-grid-result.png" alt="Transparency Grid Result" width="777" height="782" class="alignnone size-full wp-image-1163" />

There you have it. A "Not White" background on your Artboards in Illustrator without having extra objects or stuff cluttering up your files. The document properties are set on a per-project basis, so you'll have to set it every time.
