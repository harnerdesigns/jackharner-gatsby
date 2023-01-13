---
date: 2018-08-17 21:31:40.000
title: "Pointing A Domain to The Newest File In A Directory" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ['Linux']
externalLink: ""
published: true
---

I wrote a python script for Shoolu.com to use the BigCommerce API to pull the latest added products and generate an XML RSS file.  BigCommerce did have the functionality to automatically generate these RSS feeds but they have moonlighted support and have removed it for new merchants so it didn't seem like something to rely on.

<h2>PYTHON To The Rescue</h2>

I found the BigCommerce Python API and used that to fetch all the products with a created date of at most 7 days ago. I then looped through all those products to create the nessecary items in the RSS File.

This worked well and good but I was basically just overwriting the one file and losing any previous weeks worth of New Products. I knew it would be easy enough to just write to a different file with the current date in the file name so it'd be new every time.

<h2>Trouble In Paradise</h2>

The plan was to use this RSS feed to generate a "What's new at Shoolu" email every week through MailChimp and their ability to work with RSS Feeds. The problem with the current approach of dating the files was that I was pointing Mailchimp at the one direct file so I'd have to update it every week which kind of defeats the purpose of all of this.

{{{vert}}}

<h2>An Unexpected Solution</h2>

I tried digging around for a way to have a root domain (<a href="https://rss.shoolu.com">rss.shoolu.com</a>) point to the latest file in the directory. There were several suggestions including using php to fetch the latest file and redirecting and some other less than elegant solutions.

None of them really tickled me the way a good solution does.

I finally decided to just update the python script to just output <code>index.xml</code> as well as <code>latestProducts-[date].xml</code>. That way <code>index.xml</code> would get overwritten with the currently accurate info and we'd also get the dated backups to log.

Then for simplicities sake I just updated the Apache Virtual Host file for the domain:

```
<Directory /var/www/rss/public/>
    ...
    DirectoryIndex index.xml
</Directory>
```
So the root domain would point directly to the file. Might not be the most elegant solution, but it works in this specific case so I'd figured I'd document it.
