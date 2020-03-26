---
date: 2020-03-24T04:29:31.563Z
title: "The Difference Between =, ==, & === in JavaScript" 
subtitle: "Not All Equals are Created Equally"
featuredImage: "./featuredImage.jpg"
tags: ['JavaScript']
externalLink: ""
published: false
---

## "=" = "Assignment"

When you use a single equals sign, you assign the value on the right of the equals sign to the thing on the left. 

```js
var string = "5";
var int = 5;

console.log( string = int );

// outputs 5, but that's because you're resetting `string` to the value of `int`
```


## ==

While the double equals operator does compare two values and returns either `true` or `false` depending on if the match or not, it does so through a method called [Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion). Type Coercion is the automatic process in which the browser converts values of two different types into one type for comparison. This can lead to unexpected results if one of your input values is not a type you were expecting.

When using the `==` as a operator, it performs Type Coercion before doing the comparison. So if you're given a string and a number, it converts both to either numbers or strings and then does the comparison. 

```js
var string = "5";
var int = 5;

console.log( string == int ); // true
```
Due to the unpredictability of the type coercion it is recommended to avoid the Double Equal Sign, in favor of the Triple Equal Sign. 


## ===

This is the real comparison operator. The Triple Equals sign (and conversely the `!==`) compare both the type and the value of the variables being compared. That way if you're variables get compared with a string and a number, the comparison will return false.

For example: 

```js
var string = "5";
var int = 5;

console.log( string === int ); // false
```

It's recommended to use `===` in place of `==`, because hardly ever will you want to compare something of different types and return `true`. If you're expecting a number, and a string gets passed in, there's probably something wrong upstream. 