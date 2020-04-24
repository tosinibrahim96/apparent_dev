---
title: "Journey of a Javascript Samurai S01 E01"
slug: journey-of-a-javascript-samurai
description: "Documentation of my journey as I strive to become a Javascript samurai"
date: 2020-04-10 02:55:32
author: Ibrahim Alausa
tags:
    - javascript
    - new-beginning
cover: https://images.unsplash.com/photo-1583684977172-528983104c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
fullscreen: false
---

I previously wrote a post [here](https://www.apparentdev.com/don-t-make-the-same-mistake-i-made-while-trying-to-get-that-first-software-job/) where I talked about how I recognized I had knowledge gaps and wanted to take action to work on myself. Here it is. **Journey of a Javascript Samurai**. I don't how I came up with this title😂. It just sounds like a cool movie title. The plan is to learn as little as possible, make sure understand whatever I learn, then try to explain and share whatever I have learned in the form of articles. Over time, I know these little drops of knowledge will become an ocean.

## Lets move 🚀

This article is a review of some of the essential points I took down from _the first chapter of the first book_ in the [You don’t know JS](https://github.com/getify/You-Dont-Know-JS) series titled "Get Started" recommended by one of my colleagues. It’s crucial to mention that the author specified that the title might be "Get Started", but **it's not intended as a beginner/intro book**. He suggested you should spend a few months writing Javascript first so you can get the best out of the book. The things we will cover in this article include

-   Relationship between Javascript and Java
-   What is ECMAScript
-   What are Javascript Environments
-   Programming Paradigms used in Javascript
    <br><br><br>

### What's the relationship between Javascript and Java

When JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser, Java already existed and was very popular.
Some smart people decided to use a name that was already familiar with existing programmers to gain their attention. The name was more based on a marketing decision rather than engineering.

[![Javascript is not Java](https://i.imgur.com/FTEjWyD.png)](https://i.imgur.com/FTEjWyD.png)
<br/>
It worked, now we're stuck with both names confusing new programmers all the time🙄. Just know that Javascript is not Java.
<br/><br/>

### What's the relationship between Javascript and ECMAScript

When I was trying to learn Javascript for the first time, I came across a profile where the person specified Javascript and ES6 as part of her technical skills. I thought she was referring to 2 different programming languages. Let's clarify this. **ECMA (European Computer Manufacturers Association)** is the body that standardized Javascript, This means that it defines a standard on how Javascript code should work in any environment. The formal name given to Javascript according to this organization is **ECMAScript**.

[![ECMA International](https://i.imgur.com/zD4b3ZR.png)](https://i.imgur.com/zD4b3ZR.png)
<br/><br/>
When there is an improvement on the current Javascript specification (let's say in the year 2015), these new features are called ECMAScript2015 features or ES6 features. When Javascript programmers talk about writing ES6, ES7 or ECMAScript2018, it's still Javascript. They’re simply saying that the Javascript syntax in the codebase was introduced in the 2015, 2016 or 2018 specification of the language.

### Javascript Environments

Today, we run JavaScript in different environments. Eg browsers, servers, etc. These environments add different APIs (Let’s just say additional capabilities) into the global scope of that particular environment. This situation makes it difficult sometimes to differentiate between core Javascript language and features provided by the API of the environment. A good example is typing **alert (“Hello world”)** in the browser console.
<br/><br/>
[![ECMA International](https://i.imgur.com/ctkFzxb.png)](https://i.imgur.com/ctkFzxb.png)

It brings a pop-up in the browser with the Hello world text. The same syntax returns an error in a NodeJS environment.
<br/><br/>
[![ECMA International](https://i.imgur.com/H2Kxvzp.png)](https://i.imgur.com/H2Kxvzp.png)
<br/>
The point here is that we should be able to differentiate core JavascScript features from features provided by the environment we are working with. The alert() function is not included in the JavaScript specification. It is provided by the browser environment.

### Programming Paradigms used in Javascript

Some programming paradigms include procedural, object-oriented (OO/classes), and functional (FP).

-   Procedural style organizes code in a top-down, linear progression through a pre-determined set of operations, usually collected together in related units called procedures.

-   Object-orented style organizes code by collecting logic and data together into units called classes.

-   Functional Programming style organizes code into functions (pure computations as opposed to procedures), and the adaptations of those functions as values.

As specified by [MDN](https://developer.mozilla.org/en-US/), JavaScript is a multi-paradigm language so we can decide to structure our application using any of the above ways. It's important to note that some programming languages have to be written using a specific paradigm e.g Haskell is described as an advanced, purely functional programming language.

### It's a Wrap

Like always, thanks for making it this far. I appreciate it. The major points I need you to take away from this article are

-   Javascript and Java are not the same thing. They are two **VERY DIFFERENT** programming languages.
-   ECMAScript and Javascript are refering to the same language. People suffix a year(2015) or number(6) to describe the time a feature was added to the language. A popular phrase you might come accross is "Arrow functions were introduced with ES6".
-   When writing Javascript code, it's important to note that some part of the code you write depends on the environment. e.g document.getElementById() won't work in a NodeJS environment but will work in a browser environment. Learn how to distinguish between environment APIs and core Javascript code.
-   Javascript is a multi-paradigm programming language so it doesn't enforce a particular style of code structure. Pick anyone that suits the project, then go ahead and create something awesome.
    <br/>

Check out the next episode [here](https://www.apparentdev.com/journey-of-a-javascript-samurai-s01-e02-compatibility-transpilers-polyfills/) where we talk about *Compatibility*, *Transpilers*, and *Polyfills* in Javascript. You don't want to miss it.

Please reach out to me on [LinkedIn](https://www.linkedin.com/in/ibrahim-alausa-624a47140/) or [Twitter](https://twitter.com/apparent_dev) for questions, comments, and feedback. I would love to hear and learn from you too.

Keep learning 💪🏿.
