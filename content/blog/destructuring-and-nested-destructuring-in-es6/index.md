---
date: 2020-10-18T16:47:36.345Z
title: "Destructuring and Nested Destructuring in ES6"
subtitle: ""
featuredImage: "./ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
tags: ["JavaScript", "Newsletter"]
externalLink: ""
published: true
unlisted: false
---

Have you ever had a JavaScript object that you needed to extract a bunch of different values out of? Today I'd like to introduce you to your new best friend: ES6 Destructuring.

ES6 brings with it a bunch of nifty new ways to do things with JavaScript. One of the things I use ALL THE TIME is Destructuring. It allows you to pick and choose properties out of an object and automatically assign them to a variable.

Take the following JavaScript Object for example:

```js
let person = {
  name: "Bob",
  age: 26,
  married: false,
}
```

Previously, if you needed to use and manipulate the different properties of that object you would have to assign each variable manually:

```js
var person = {
  name: "Bob",
  age: 26,
  married: false,
}

var name = person.name,
  age = person.age,
  married = person.married

console.log(married) // false
```

Now let's do that again with ES6. You'll find it's a whole lot cleaner.

```js
let person = {
  name: "Bob",
  age: 26,
  married: false,
}

const { name, age, married } = person

console.log(age) // 26
```

## Not Just Objects Either!

Destructuring is not just for Objects, you can even use it on an Array!

```js
let people = ["Jon", "Bon", "Jovi"]

const [first, second, third] = people

console.log(second) // "Bon"
```

It assigns the items in your array, in order, to the corresponding variable in the destructuring array.

If, for whatever reason, you need to skip the first two items in the array you can do so with just a comma:

```js
let people = ["Jon", "Bon", "Jovi"]

const [, , only] = people
console.log(only) // "Jovi"
```

{{{vert}}}

## Nested Destructuring

In the real world, you're probably going to have more complex objects than just that, so let's take a look at a more complex object example.

```js
let person = {
  name: "Robert",
  age: 60,
  married: {
    spouse: {
      name: "Roberta",
      age: 62,
    },
    anniversary: "01-01-1970",
  },
  kids: [],
}
```

Given this more in depth Object, how would you go about getting _just_ Robert's spouse's name? Any Ideas? With a little magical thing called "Nested Destructuring".

```js
let {
  married: {
    spouse: { name },
  },
} = person

console.log(name) // "Roberta"
```

With Nested Destructuring, you can cherry pick properties to get from as many levels down in your object as you need. Obviously this can get pretty messy pretty quickly so feel free to destructure more than once if order to keep your code clean.

Keep in mind, when you destructure down into a property, like the example above, it does not set the variable of the property you went down in to. So in this case both `spouse` and `married` are undefined.

```js{3}
let {
  married: {
    spouse: { name },
  },
} = person

console.log(spouse) // undefined
```

If you need `spouse` and `name` as separate variables you will have to destructure more than once:

```js
let {
  married: { spouse },
} = person
let { name } = spouse

console.log(spouse) // {name: "Roberta", age: 62}
console.log(name) // "Roberta"
```

## What If I Need To Destructure To A Different Variable Name?

Sometimes in the real world, data comes in with weird property names, or you need to extract different nested properties that happen to have the same name. Don't worry though, ES6 has you covered.

Let's keep using our more complex person Object and extract BOTH his and his wife's name at the same time.

```js
let person = {
  name: "Robert",
  age: 60,
  married: {
    spouse: {
      name: "Roberta",
      age: 62,
    },
    anniversary: "01-01-1970",
  },
  kids: [],
}
```

Based on what we've gone over so far, your first thought might be to do something like this:

```js
const {
  name,
  married: {
    spouse: { name },
  },
} = person
```

However if you were to try this you'd be met with a nice fat "Duplicate Assignment" error because you're trying to set the `name` variable twice. Babel or whatever ES6 Compiler you're using won't like that at all, so you need to define custom variable names.

Check it out:

```js
const {
  name: hisName,
  married: {
    spouse: { name: herName },
  },
} = person

console.log(hisName + " Is Married To " + herName) 
// Robert Is Married To Roberta
```

All you're doing is saying "Take this property and extract as this specific variable". Which when compiled to regular JavaScript for your browser it looks like this:

```js
var hisName = person.name
var herName = person.married.spouse.name
```

## Keep It Clean, and Keep It Simple

Using Destructuring allows you to cleanly and simply extract properties from objects in ES6 JavaScript into variables to be manipulated and modified. Keep It Simple Stupid and hit me up on BlueSky [@JackHarner](https://bsky.app/profile/jackharner.com) if you learned something!

---

#### <span>Featured Image by <a href="https://unsplash.com/@ripato?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ricardo Gomez Angel</a> on <a href="https://unsplash.com/s/photos/structure?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
