---
title: "Journey of a Javascript Samurai S01 E02"
slug: journey-of-a-javascript-samurai-s1e2
description: "The meaning of forward and backward compatibility and clarifying which category Javascript belongs"
date: 2020-04-20 09:31:32
author: Ibrahim Alausa
tags:
    - javascript
    - compatibility
    - new-beginning
cover: https://images.unsplash.com/photo-1583684977172-528983104c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
fullscreen: false
---

You can check out episode 1 [here](https://www.apparentdev.com/journey-of-a-javascript-samurai-s01-e01/) 😉. I talked about how Relationship between Javascript and Java, What ECMAScript is and it's relationship with Javascript, Javascript Environments and how their APIs are different from the core Javascript language and finally the Programming Paradigms used in Javascript.


## Lets move 🚀
In this article we will talk about compatibility in Javascript language in relation to browsers. Our major highlights will be 

-   What is compatibility and the types such as Forward and Backward compatibility
-   What category of compatibility does Javascript fall into
-   The tools used to handle compatibility problems between Javascript and the browser environment
    <br><br><br>

### What is compatibility
According to [techtarget](https://whatis.techtarget.com/), compatibility is the capacity for two systems to work together without having to be altered to do so - [source](https://whatis.techtarget.com/definition/compatibility). In our case, the two systems involved are the Browser and the Javascript code we write.

### Forward compatibility vs Backward compatibility 
If we describe Javascript as a Forward compatible language, this means that when there’s a new addition to the JS language specification and we include the new syntax in our JS code, it should work in an old browser without issues. In very simple terms, old browsers should understand new Javascript syntax. I.e *aync-await* syntax should work in old browsers. On the other hand, If we describe the Javascript language as a Backward compatible language, then old Javascript syntax will always work in new browsers. I.e If a new version of chrome or firefox is released today, a syntax from an old Javascript specification like the *var* keyword should still work on the new browser. 


### What category of compatibility is Javascript
Personally, I thought Javascript was both, unfortunately, it isn’t. Javascript is actually Backwards compatible (Old syntax works in new browsers ALWAYS). This means that if a new feature is added to the language today and you include it in your code, an old browser will throw an error because it doesn’t support that feature yet. Not cool Javascript!!

The major problem with this is that I always have to write old Javascript code to make sure my application does not break if the users have old browsers. A possible solution to this is to always specify the browser version that provides a good user experience for 

As a programmer writing Javascript code, I always want to use the new features of the language because most times they are always shorter and cleaner. I also don't want to tell users to always download the latest version of chrome or firefox just to make sure my application works properly

But what do we do since the browser throws an error for a new Javascript feature it doesn't support 



