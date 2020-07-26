---
date: 2020-04-30T03:33:30.612Z
updated: 
title: "Schedule Tweets Without Thinking About It"
subtitle: "Simple Tweets Build Log" 
featuredImage: "./og-photo.png"
tags: ['Build Log', 'Node']
externalLink: ""
published: true 
---

# Day 99 : Saturday, July 26th, 2020
## Long Time No Talk.

It's been a while. I've, thankfully, been working the whole time through the pandemic, both on some client work and my 9-5. I opened the project back up because I'm making a point to be more active on Twitter and that was the whole reason I started building Simple Tweets in the first place. 

Boot it up with:

```bash
npm run startBoth
```
which runs both the Frontend React code as well as the backend Node server. Everything loads fine, but I try to sign in with Twitter and it doesn't work. It just sits spinning on the Twitter oAuth page, waiting for my server to respond then after a minute, it kicks back an Error 500: Service Unavailable.

I thought maybe it was a lingering Cookie issue, so I cleared all those out, but still no response on the login.

I check the server logs and it comes back with "Login Successful" but never redirects the user to be logged in. 

I'm perplexed but tired, it's late so I just shut it down and go to bed. I'll revisit in a few days probably.

# Day 12 : Wednesday, April 29th, 2020
## Better Late Than Never, Right?

I'm starting this build log off a little bit after I started the project (currently titled Simple Tweets, but probably going to change). I didn't really have the idea to write down the whole process till I was well into an MVP. Either way, better late than never, right? According to GitHub the very first commit was on April 17, 2020, so that makes this Day 12.

My vision for Simple Tweets is a tool you can use to schedule tweets without thinking about it. You decide the max times it will tweet for you per day, whether you want it random or on a schedule, and then scheduling tweets is as simple as typing it out and hitting schedule. 

I'm not really sure if this is something Twitter users really _need_ per se, but it's been a massive learning opportunity for me so far. For now, that's all I really care about. 

## Design To Prototype

The idea had initially popped into my head a while back (way back in February, now that I looked it up) for a "minimalist tweeter". I wanted something where I could just spam the tweet box without actually spamming Twitter. I threw together this mockup in Illustrator shortly after having the idea.

![Simple Tweets First Mockup](./Tweet-Scheduler-mockup.png)

Two months go by, and I finally decide to build the thing. I knew I wanted to build the thing with React, and I had dabbled with a project using a MongoDB, Express, React & Node (MERN) stack earlier so that's what I chose for this project. 

## Time To React

The first thing I threw together was the React frontend. Had a lot of fun just recreating the mockup but with code (honestly my favorite part of any project). I started off with the fixed sidebar, and the tweet box. Used state to set the Tweet character limit, track the tweet as you're typing and validate the current entry. 

```js
const validateTweet = (tweet) => {
    let tweetCharCount = tweet.length;
{{{CURRENT IMAGE OF SIMPLE TWEETS}}}
    if (tweetCharCount <= 0) return false;
    if (tweetCharCount > tweetCharLimit) return false;

    return true;
  };
```

Very simple for now, but essentially checks if the tweet length is greater than 0 and less than 280. After a few days of back and forth, I eventually settled on going with a minimal light theme instead of dark. I'll probably add a toggle for that down the line, but for now I don't really care. 

![Simple Tweets Now](simple-tweets-now.jpg)


## oAuth Is Pretty Cool, Now That I Have A Better Grasp 

Since the tool is entirely focused on Twitter, the only way my users can login is with Twitter. Makes Sense. That just meant I had to figure out oAuth. It's been a pretty big beast for me that I've yet to attempt to tackle, but now is the time. 

The backend is based around Express, and MongoDB. I'm using [Passport.js](http://www.passportjs.org/) for Authentication and the beautifully put together [passport-twitter](https://github.com/jaredhanson/passport-twitter) package to handle the Authentication. 

One of the first big roadblocks I ran into was the fact that I had set up a virtual host so that `simple-tweets.local` would resolve to my `localhost:3000`, but I was having weird issues with the cookies being set to the wrong domain somewhere in the oAuth loop. Lots of googling and hair ripping later, I reset every path in the project to use http://127.0.0.1 as well as in the Twitter Developer tools. Once we have it live on a server with a domain pointing to it, we shouldn't have this problem, but now I'll know what to look for. 

I'll contine to update this post as the project progresses. 