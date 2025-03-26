---
date: 2025-03-26T17:58:43.617Z
title: "Starting A Freelance Developer Bluesky Feed" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: "./og-Image.png"
tags: ["ATProto", "Freelance"]
externalLink: ""
published: true
---

For my first dip into the [AT Protocol](https://atproto.com), I decided I would try my hand at setting up a Feed. If you're unaware the AT Protocol is a decentralized framework for social media. In short, instead of the Tech Giants up on their flying mansions deciding what your social media feed should be, the ATProto gives that power back to the people. 

There are a ton of great feeds popping up, but my goal is to make one specific to Freelance Developers. I've got the [feed up and running here](https://bsky.app/profile/renrah.dev/feed/freelanceDevs) if you want to check it out or shoot me a [DM on Bluesky (@JackHarner.com)](https://bsky.app/profile/jackharner.com) if you want to get added to it! 

Let's get into it.

## Getting Started 

This isn't really a tutorial of how to set up a Bluesky feed (although I might have some stuff for that in the works) but you basically get started with their [Feed Generator template](https://github.com/bluesky-social/feed-generator). It's a TypeScript based Node/Express application that handles the ingesting of the greater ATProto network (the firehose), storing posts you deem appropriate, and then outputting a "Feed Skeleton" (list of post URIs) that Bluesky (or whatever AppView) then populates with the post data. 

## Determining If A Post is Related to the Feed Topic

> Keep in mind, I don't rally know anything about writing algorithms. I know how to build website and program and a ton of other stuff but this is all new to me. If you have suggestions or constructive critisicm, hit me up [@JackHarner.com](https://bsky.app/profile/jackharner.com)

A lot of the feeds you see popping up are really just keyword scrapers: "If a post has X Y or Z in it, display it". Some even tell you: "Include #StarSky to have your post included". For as specific as a niche as "Freelance Developers" is, a basic keyword filter isn't going to cut it.

I decided to set up a score-based system to try to determine if a post is related to freelance development specifically. Let's walk through the evolution of that score system (it's still a work in progress).

I started with a list of a bunch of freelance related and development related terms. 

```js
const terms = [
    'freelance dev',
    'freelance devs',
    'freelance developer',
    'html',
    'js',
    // etc...
]
```

Then I went through and assigned point values to each term based on how likely I thought a post would make sense to be included in the feed based on having that term in there. 

```js
const terms = [
    {term: 'freelance dev', points: 20},
    {term: 'freelance devs', points: 20},
    {term: 'freelance developer', points: 20},
    {term: 'html', points: 5},
    {term: 'js', points: 5},
    // etc...
]
```

I would then take each post coming down the firehose and score them based on how many terms (and their point values) it could find in the post text. I had a score threshold defined and if the post had a higher score than that, it got stored in the database and output in the feed.

That worked for a little while but I noticed that some spammy type posts I didn't like were ending up in there. I don't know if you caught the bug for this already but if you had a post that said: 

> "I'm a freelance developer"

It would match for both `freelance developer` AND `freelance dev` giving that post a whopping 40 points. 

If you posted some spam like: 

> "Best Freelancers in LA / Best Freelance Writers in OC / Best Freelance Freelancer Editors Freelances Free Devs."

You would get a shit load of points when you shouldn't have.

## Refining the Algorithm

In order to find and present the most relevant Freelance Developer content on the network, I had to do better than that. 

### Negative Points

I included the ability to add negative point terms so I can set "freelance editor" or "freelance writer" to -30 points so it doesn't necesarily get blocked if that term exists, but there needs to be more content about development to make up for the negative score. 

### No More Stacking Points

I updated the Allow List terms to let the term be defined as an array of similar terms: 

```js
const terms = [
    {term: ['freelance dev', 'freelance devs', 'freelance developer'], points: 20},
    {term: 'html', points: 5},
    {term: ['javascript', 'js', 'jsx'] points: 5},
    // etc...
]
```

This way if it finds both "freelance devs" and "freelance developer" in the same post, it only gets 20 points, regardless of how many times it appears in the post.

I also updated the scoring to look for those terms specifically, either at the start of the text with a space after it, a space on both sides, or at the end of the string. Thanks to ChatGPT for the REGEX because that shit is UGLLYY: 

```js
for (const t of termsToCheck) {
    const termRegex = new RegExp(\\b${t.toLowerCase().replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b)
    if (termRegex.test(lowerPost)) {
    found = true
    break
    }
}
```

This prevents false positives by preventing "dev" from triggering for "devout", for example.

### AllowList and BlockList Authors

I also want to be able to display posts from people I know are freelance / indie developers without a post having to explicitly be about freelance development. I created an Allowlist and a Blocklist of author DIDs ([Decentralized Identifiers](https://en.wikipedia.org/wiki/Decentralized_identifier)).

If I put a DID in the Allowlist, their post score threshold gets chopped in half. I might even need to lower that because I've added some Devs and haven't really seen any extra posts get added. 

There were a couple people who were pretty routinely showing up in the feed during my initial testing even though they weren't talking about freelance development, or they just posted some spammy stuff. Their DID's got added to the Blocklist. If I add a DID to the Blocklist, it just doesn't even try to score their post when one comes out of the firehose.

## What's Next? 

I'm going to continue to try to refine my point system as well as tracking down other Freelance / Indie Developers to add to the list.  If that's you, [shoot me a DM on Bluesky](https://bsky.app/profile/jackharner.com) and I'll add you!

Give the feed a like, pin, or share if you feel so inclined! [Freelance Devs Bluesky Feed](https://bsky.app/profile/renrah.dev/feed/freelanceDevs)

Thanks for reading!