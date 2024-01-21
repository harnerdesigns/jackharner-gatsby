---
date: 2024-01-19T01:31:07.167Z
title: "How to Run GitHub Actions on a Schedule" 
subtitle: "Using Cron with GitHub Actions"
featuredImage: "./chuttersnap-mytSmcgVHRE-unsplash.jpg"
ogImage: "./chuttersnap-mytSmcgVHRE-unsplash.jpg"
tags: ['Automation', 'Git', 'Newsletter']
externalLink: ""
published: true
---

If you use GitHub actions to build and deploy (CI/CD) a project, you can schedule those actions to automatically run on a specific time interval using cron. This is sweet if you're building a pseudo-static site with data that doesn't change all the time, but does change often enough to want to automate the build process. 

I initially implemented cron into my GitHub Actions to build my side project [Live Music Forecast](https://livemusicforecast.com) every 6 hours, but have also used this to automate all kinds of different GitHub actions. 

```toc
```

## What is Cron?

Cron (aka Cron Jobs, Crontab) is a command line utility about as old as linux itself. Cron allows for the automatic running of code, scripts, & commands on a time based interval. 

## Defining the Cron Schedule

Cron takes in a string to determine which minutes, hours, days, & months to run your script on. 

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

For example, `*/5 * * * *` will run your GitHub Action every 5 minutes of every day. This is most likely over kill and will probably run you into GitHub's Action time limits very quickly. Every 5 minutes is the fastest interval GitHub allows actions to be ran.

Some more example cron schedules: 

* `59 23 * * 6` will run at 11:59 PM on Saturday
* `0 12 1 * *` will run at 12 noon, on the 1st of every month
* `1 */6 * * *` runs at the first minute of every 6th hour. (12:01a, 6:01a, 12:01p, and 6:01p)

I highly recommend using a tool like [crontab.guru](https://crontab.guru) to make sure your schedule is set up properly. Debugging cron schedules is basically just publishing it and waiting for the scheduled time to come and go, so it can be annoying if you mess it up. 

## Scheduling your GitHub Action

In your action's configuration file, your schedule is defined as one of the workflow triggers under the `on:` attribute: 

```yml
name: GH Actions Cron Schedule
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '1 */6 * * *'

# rest of your action here...
```

If you need to, you can configure your action to run on multiple different schedules: 

```yml
name: GH Actions Multi-Cron
on:
  schedule:
    - cron:  '1 */6 * * 0-4' # Run every 6hrs Sun-Thur
    - cron:  '1 */3 * * 5-6' # Run every 3hrs Fri-Sat

# rest of your action here...
```

For the full list of things that can trigger your GitHub Workflows, check out the [GitHub Docs](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule).

## Heads Up, The Timing Isn't Going To Be Exact

GitHub Actions run in UTC time, so you'll need to adjust your cron schedule based on your timezone if you want it to run at a specific time. 

The other thing GitHub mentions is that your cron schedule is when the action will be queued to run. This doesn't mean your action will run at that exact time, depending on server availability. If that slight timing ambiguity is going to cause issues with your workflow, [Contact Me](/contact) for a free consultation call to look at more time-specific alternatives.

--

_Banner image by <a href="https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CHUTTERSNAP</a> on <a href="https://unsplash.com/s/photos/schedule?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>_
  