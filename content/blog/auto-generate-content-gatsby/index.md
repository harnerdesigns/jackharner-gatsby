---
date: 2019-12-22T18:23:53.017Z
title: "Auto-Generate Content Folders In Gatsby" 
subtitle: "Preformat Your Frontmatter & More"
featuredImage: "./featuredImage.jpg"
tags: ['Gatsby', 'Node', 'Automation']
externalLink: ""
published: true
---



JackHarner.com is built with Gatsby, a framework based on React that makes blazing fast websites. 

![Gatsby Logo](./gatsby-logo.svg)

I have my Blog and Portfolio content setup as a couple of directories with subdirectories for the individual posts. Like so: 
```
src/
| ...
| content/
  | blog/
    | blog-post/
      | index.md
      | featuredImage.png
      | ...
    | blog-post-2/
      | index.md
      | featuredImage.png
      | ...
    | ...
  | portfolio/
    | ...

```
Each of the `index.md` files contains a block of frontmatter dsecribing attributes about the post.

```
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
All of these folders and files are then parsed at build time to generate the pages and the content throughout the site. 

As some of you may know, I'm very lazy, but Lazy in the good way where I don't like doing repetitive tasks more than once or twice. I've automated tons of simple tasks in my day to day at [Shoolu](../../portfolio/shoolu). Things like Running Reports, and processing product photos are all now 1-2 click tasks, when they used to take hours out of my day every week.

I wanted starting a new blog post or portfolio piece to be as simple as possible, and with this I've gotten it down to:

```bash
npm run newBlog
```
Let's look at how I did it and how you can speed up a small part of updating your Gatsby site with Node.

## Create the Template Directory

Create a new directory in your `/src/content/` folder called `templates/`. Inside your new `templates/` directory create a new directory for every post type you want to automate. In my case it will be `blog/` and `portfolio/`.

Now your project should look a little something like this:

```
src/
| ...
| content/
  | blog/
    | ...
  | portfolio/
    | ...
  | templates/
    | blog/
      | <empty folder>
    | portfolio/
      | <empty folder>
```

{{{vert}}}

## Get Template-ing

This is where you'll need to customize this tutorial to fit with your site and preexisting content. Inside your `/src/content/templates/<post-type>` directory, create versions of the files you will need every time you create a post. For me, that includes an `index.md` file with some custom frontmatter, and a `featuredImage.png`.

Take a look at my `templates/blog/index.md`:

```markdown
---
date: $date
title: "$title" 
subtitle: ""
featuredImage: "./featuredImage.png"
tags: ['']
externalLink: ""
published: false
---
```
Notice the `$date` and `$title` variables in the frontmatter. We will be replacing those variables down the line. 

My default Featured Image is just a solid pink image to match the branding of the site: 

![Default Featured Image](./defaultFeaturedImage.png)

The Featured Image is pretty much always going to be changed down the line. One problem I've run into is that Gatsby, as far as I know, doesn't allow you to set default Frontmatter values. However, having the default allows me to not have to remember "featuredImage.png" when saving the updated image (I can just overwrite the default). 


## Script All The Things!

Now that we've got our template, we're going to write a Node script that copies the folder and replaces some variables with user input. 

We do need a few dependencies so run this command in your projects root folder:

```bash
npm i --save-dev readline-sync ncp replace-in-file
```
* `readline-sync` allows for super simple Node CLI Prompts to take in user input.
* `ncp` is a tool to help Node copy folders recursively.
* `replace-in-file` makes it really easy to substitute values for defined variables in the copied version of the file.

In the root folder for the project, create a new directory called `tools/` and in that a new file called `newBlog.js`

At the top of `newBlog.js` declare all of the dependencies we'll need:

```js
var readline = require('readline-sync');
var ncp = require('ncp').ncp;
var replace = require('replace-in-file');
```

Next up is to define some variables we are going to use and take in the User Input for Title & Slug:

```js
var postTitle = readline.question("What is the title? ");
var slug = readline.question("Slug? [Default: '"+ string_to_slug(postTitle) +"'] ", {defaultInput: string_to_slug(postTitle)});
var date = new Date().toISOString();

var sourcePath = "./src/content/templates/blog/";
var destPath = "./src/content/blog/" + slug;
```
By setting a default value for the Slug allows me to set the slug to something other than the default, if I want to. Otherwise it just sets it to a url-encoded version of the title. 


Generating the default slug from the given title is done with the following function:

```js
function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str
}
```

It takes in a string, removes whitespace, converts non url-encoded characters, and replaces spaces with `-` dashes. ("What's Up Fool?" -> "whats-up-fool"). 

## Time To Copy

Since everything is set up, it's time to copy the directory. We use `ncp` which is a Node package to replicate Linux's `cp` command. It takes in the Source Folder, the Destination Folder, and a Callback as arguments. 

```js
ncp(sourcePath, destPath, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Done Copying');

    // ... Do Stuff After Copying Is Done
   });
```




## Replace The Template Variables

Remember the `$date` and `$title` variables from earlier? Now it's time to swap those out for real values. Using the `replace-in-file` Node Package makes this super simple. 

The `replace()` function takes in an Options Object and a callback. Here's our Options Object:

```js
var replaceOptions = {
    files:[destPath + "/index.md"],
    from: [/\$title/g, /\$date/g],
    to: [postTitle, date],
} 
```

Define the files to search in, the keys to search for (can be Regex or just a string), & what to replace them with then `replace-in-file` does all the heavy lifting.  If you pass in an array to both `from` and `to` it will replace the first key in the `from` array to the first value in the `to` array, and so on, allowing you to replace multiple things in one go.

All that's left is to pass in our options and the callback function. 

```js
replace(replaceOptions, (error, changedFiles) => {
    if (error) {
      return console.error('Error occurred:', error);
    }
    console.log('Modified files:', changedFiles.join(', '));
  });
```

## Code, Comments, ACTION!

You have two options when it comes to actually running the script. 

* Just run the script with Node: `$ node tools/newBlog.js`
* Add `node tools/newBlog.js` to your `package.json` as a script and run it through NPM (i.e. `$ npm run newBlog`).

Then enter a title, optionally pick a slug and away we go! 

## Where To Go From Here?

If you wanted to take this script a few steps further, here are some ideas to get you started.

* Duplicate your `tools/newBlog.js` file for every other post type, modifying as necessary. 
* Refactor the script to be able to handle any post type you throw at it. `readline-sync` has a whole lot of options for taking in user input. 
* Create as much content as possible, and automate as many things as possible.

[Hit me up on Twitter](https://twitter.com/jackharner) if you implement this script in your Gatsby site! I'd love to hear your suggestions.

## If You're Lazy, Here's the full script: 

```js
var readline = require('readline-sync');
var ncp = require('ncp').ncp;
var replace = require('replace-in-file');

var postTitle = readline.question("What is the title? ");
var slug = readline.question("Slug? [Default: '"+ string_to_slug(postTitle) +"'] ", {defaultInput: string_to_slug(postTitle)});
var date = new Date().toISOString();

var sourcePath = "./src/content/templates/blog/";
var destPath = "./src/content/blog/" + slug;

var replaceOptions = {
    files:[destPath + "/index.md"],
    from: [/\$title/g, /\$date/g],
    to: [postTitle, date],
} 


ncp(sourcePath, destPath, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Done Copying');
    replace(replaceOptions, (error, changedFiles) => {
        if (error) {
          return console.error('Error occurred:', error);
        }
        console.log('Modified files:', changedFiles.join(', '));
      });
   });



function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
```
