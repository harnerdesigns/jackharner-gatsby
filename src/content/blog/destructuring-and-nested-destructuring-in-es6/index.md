---
date: 2020-10-18T16:47:36.345Z
title: "Destructuring and Nested Destructuring in ES6" 
subtitle: ""
featuredImage: "./ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
ogImage: ""
tags: ['JavaScript', 'Newsletter']
externalLink: ""
published: false
unlisted: true
---

Have you ever had a JavaScript object that you needed to extract a bunch of different values out of? Today I'd like to introduce you to your new best friend: ES6 Destructuring.

ES6 brings with it a bunch of nifty new ways to do things with JavaScript. One of the things I use ALL THE TIME is Destructuring. It allows you to pick and choose properties out of an object and automatically assign them to a variable. 

Take the following JavaScript Object for example: 

```js
let person = {
    name: "Bob",
    age: 26,
    married: false
}
```

Previously, if you needed to use and manipulate the different properties of that object you would have to assign each variable manually:

```js
var person = {
    name: "Bob",
    age: 26,
    married: false
};

var name = person.name,
    age = person.age,
    married = person.married;
    
console.log(married) // true
```

Now let's do that again with ES6. You'll find it's a whole lot cleaner.

```js
let person = {
    name: "Bob",
    age: 26,
    married: false
}

const {name, age, married} = person

console.log(age) // 26
```


## Not Just Objects Either!

You can even use destructuring on an Array! 

```js

let people = [
    "Jon",
    "Bon",
    "Jovi"
]

const [first, second, third] = people

console.log(second) // "Bon"
```

It assigns the items in your array to the corresponding variable in the destructuring array. If you need to skip the first two items in the array you can do so with just a comma:

```js

let people = [
    "Jon",
    "Bon",
    "Jovi"
]

const [,, third] = people
console.log(third) // "Jovi"
```

## Nested Destructuring

Let's take a look at a more complex example. 

```js
let person = {
    name: "Robert",
    age: 60,
    married: {
        spouse: {
            name: "Roberta",
            age: 62
            },
        anniversary: "01-01-1970"
    },
    kids: []
}
```
Given this more in depth Object, how would you go about getting _just_ Robert's spouse's name? With a little magical thing called "Nested Destructuring".

```js
let {married: {spouse: {name}}} = person

console.log(name) // "Roberta"
```

With Nested Destructuring, you can cherry pick properties to get from how ever many levels down in your object as you need. Obviously this can get pretty messy pretty quickly so feel free to destructure more than once if you need to to keep your code clean.

Keep in mind, when you destructure down into a property, like the example above, it does not set the variable of the property you went down in to. 

```js
let {married: {spouse: {name}}} = person

console.log(spouse) // undefined
```

If you need `spouse` and `name` as separate variables you will have to destructure more than once: 

```js
let { married: { spouse } } = person
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
            age: 62
            },
        anniversary: "01-01-1970"
    },
    kids: []
}
```




---
#### <span>Featured Image by <a href="https://unsplash.com/@ripato?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ricardo Gomez Angel</a> on <a href="https://unsplash.com/s/photos/structure?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>