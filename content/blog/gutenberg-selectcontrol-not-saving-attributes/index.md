---
date: 2022-03-15T18:57:39.197Z
title: "SelectControl Not Saving Attributes" 
subtitle: "Troubleshooting and Fixing A Custom Gutenberg Block"
featuredImage: "./featuredImage.png"
ogImage: "./featuredImage.png"
tags: ["WordPress"]
externalLink: ""
published: true
---

## SetAttributes() Doesn't Automatically Convert Types

I was using a SelectControl to set a Category ID for a specific Gutenberg block I was building. Turns out the `setAttribute()` function doesn't automatically convert types. The SelectControl returns the value as a string, & since the attribute was expecting a Number: 

```js
attributes: {
    cat1: {
      type: "number",
      default: 0,
    }
}
```

The attribute wasn't getting saved as anything. 

## A Few Solutions

The easiest way to solve this is just convert the String value to a Number with `parseInt()` when setting the Attribute:

```js
const onChangeCat1 = (value) => {
    setAttributes({ cat1: parseInt(value) });
};
```

Other than that you can adjust your attribute type to just accept a string, however given that WordPress expects Post IDs to be Numbers this probably isn't the best solution: 

```js
attributes: {
    cat1: {
      type: "string",
      default: "0",
    }
}
```


## Conclusion

Make sure you're saving your attributes as the appropriate type, (Number, String, Boolean, etc.) and WordPress Gutenberg should stop giving you issues. Hit me up on BlueSky [@JackHarner](https://bsky.app/profile/jackharner.com) if you have any other WordPress related questions.