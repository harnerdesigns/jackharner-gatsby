---
date: 2018-09-11 05:33:10.000
title: "Pushing WordPress Theme Updates With Git" 
subtitle: ""
featuredImage: "./featuredImage.png"
ogImage: ""
tags: ['WordPress', 'Git', 'Automation']
externalLink: ""
published: true
---

Do you frequently update WordPress themes? It's kind of a pain in the ass, right?  Typically has to be done manually through FTP or uploading a new zip through the backend.

Well, today I'm going to show you how to update your site with just:

```
$ git push live
```

Sounds to good to be true? It's not. Check it out:

<h2>Prerequisites</h2>

1) SSH Access to your web server
2) Git installed on your local machine and on your web server

This setup works best for one off customs themes (like the one on <a href="https://harnerdesigns.com">HarnerDesigns.com</a>) and not for themes produced to be distributed.

<h2>Create Your Repo Locally</h2>

First things first, create a folder for your project and enter it:

```
$ mkdir git-test &amp;&amp; cd git-test
```

then initialize the repo:

```
$ git init
```

Alternatively, you can just clone my <a href="https://github.com/harnerdesigns/blank2">Blank2 - Blank WordPress Theme</a> repo to get started:

```
$ git clone https://github.com/harnerdesigns/blank2.git git-test
```

<h2>Create A Bare Repo On The Remote Server</h2>

A bare repo is a directory containing the working tree of your git project, just without storing all the files. It's essentially just a directory of all the files noramlly in your .git directory.

SSH into your server:

```
$ ssh &lt;user&gt;@&lt;server&gt;:&lt;sshPort&gt;
```

Create a folder for the bare repo and enter it:

```
&lt;user&gt;@&lt;server&gt; $ mkdir git-test.git &amp;&amp; cd git-test.git
```

Remember where on the server you created this directory, you'll need that later (Doing it in your home directory works perfectly fine).

Initialize the bare repo:

```
&lt;user&gt;@&lt;server&gt; $ git init --bare
```

[ad]

<h2>Hook It Up</h2>

Your shiny new bare git repo has a directory <code>hooks</code> and in it are a bunch of .sample files. We want to do something after the repo receives new data, so create a new file called <code>post-receive</code> (no extension) and add the following to it:

```
#!/bin/bash
GIT_WORK_TREE=&lt;pathToWordPressInstall&gt;/wp-content/themes/git-test git checkout -f
```

What this will do is, any time you push to this git repo, set the working tree for the repo to the theme folder in your WordPress install and then force checkout the files.

<h2>Back Down From The "Cloud"</h2>

Now logout of your remote server. It's time to add the new repo as a remote for your local one.

Make sure you're in your project's folder:

```
$ git remote add live ssh://&lt;server&gt;/home/&lt;user&gt;/git-test.git
```

and that's it! All you need to do to update your live theme now is add some files, commit them like normal and then run:

```
$ git push live
```

Being able to Update WordPress sites quickly allows for quicker bug fixes and less time spent wrangling files. Combine this idea with a taskrunner like Gulp and you'll be flying through updates.

Let me know if you use this method or if you have any other ways to manage WordPress Themes!
