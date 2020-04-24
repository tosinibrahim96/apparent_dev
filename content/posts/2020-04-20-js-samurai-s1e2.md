---
title: "Journey of a Javascript Samurai S01 E02 [Compatibility, Transpilers, Polyfills]"
slug: journey-of-a-javascript-samurai-s1e2
description: "Difference between forward and backward compatibility, clarifying which category Javascript belongs and how to handle issues that arise"
date: 2020-04-24 08:59:32
author: Ibrahim Alausa
tags:
    - javascript
    - compatibility
    - new-beginning
cover: https://images.unsplash.com/photo-1564517746937-14218d983034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1071&q=80
fullscreen: false
---

You can check out episode 1 of this series [here](https://www.apparentdev.com/journey-of-a-javascript-samurai-s01-e01/) 😉. We talked about the relationship between Javascript & Java, Relationship between ECMAScript & Javascript, Javascript environments, and how their APIs are different from the core Javascript language and finally the Programming Paradigms used in Javascript. It's a great one, trust me 🤞🏽.

## Lets move 🚀

In this article, we will talk about compatibility in Javascript language with browsers. Our major highlights are

-   What compatibility is and the types such as Forward and Backward compatibility
-   What category of compatibility does Javascript fall into
-   The tools used to handle compatibility problems between Javascript and the browser environment
    <br><br><br>

### What is compatibility

According to [techtarget](https://whatis.techtarget.com/), compatibility is the capacity for two systems to work together without having to be altered to do so - [source](https://whatis.techtarget.com/definition/compatibility). In our case, the two systems involved are the Browser and the Javascript code we write.

### Forward compatibility vs Backward compatibility

[![Door with directions](https://images.unsplash.com/photo-1549357333-a32a1993b1ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)](https://images.unsplash.com/photo-1549357333-a32a1993b1ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)

If we describe Javascript as a **Forward compatible** language, this means that when there’s a new addition to the Javascript language specification and we include the new syntax in our Javascript code, it should work in an old browser without issues. In very simple terms, old browsers should understand the new Javascript syntax. e.g `async-await` syntax should work in old browsers. On the other hand, If we describe the Javascript language as a **Backward compatible** language, then old Javascript syntax will always work in new browsers. I.e If a new version of chrome or firefox is released today, a syntax from an old Javascript specification like the `var` keyword should still work on the new browser.

### What category of compatibility is Javascript

I thought Javascript is both forward and backward compatible, but it isn’t. Javascript is Backwards compatible (Old syntax works in new browsers ALWAYS). If a new feature is added to the language today and we include it in our codebase, an old browser will throw an error because it doesn’t support that feature yet. Not cool Javascript!!

[![Frustrated man](https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)](https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)

As a programmer writing Javascript code, We always want to use the new shiny features of the language because most times they are always shorter and cleaner. We also don't want to tell users to download the latest version of chrome or firefox to make our application work properly for them. How do we ensure we can use the new, cleaner syntax without facing compatibility issues when a user with an ancient browser tries to use the application?

### Transpilers to the rescue

For new and incompatible syntax, the solution is transpiling. A transpiler is simply a source-to-source translator. In our case, the new syntax is transpiled to old syntax to ensure that older browsers understand the syntax. The most common transpiler is [Babel](https://babeljs.io).

[![Babel showing old and new syntax](https://i.imgur.com/TroOvkk.png)](https://i.imgur.com/TroOvkk.png)
<br>
In the image above, the syntax on the left uses the ES2015 `const` keyword for variable declaration. Babel transpiles the code to the old `var` keyword as seen on the right. The old version is what we upload to the server so that all browsers(old and new) use our application without facing compatibility issues.

### Sometimes, the problem is not Javascript

Sometimes the issue may not be the Javascript syntax, the Javascript environment may not support a certain API. I described the differnce between Javascript syntax and Javascript environment API [here](https://www.apparentdev.com/journey-of-a-javascript-samurai-s01-e01/). We may encounter an issue where a browser functionality is available in firefox but not in Internet Explorer, then we use A [shim/polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) to mimic the feature so we have something to fallback to for non supporting browsers.

#### Example

When performing DOM manipulation using `ChildNode.replaceWith()`, this is the regular syntax below

[![Syntax from MDN](https://i.imgur.com/KD2KKuc.png)](https://i.imgur.com/KD2KKuc.png)
<br>

However, performing the same action on Safari or Internet Explorer 10+ and higher, a [polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) is required and here's what we have to do

[![Syntax from MDN](https://i.imgur.com/c5BD5YK.png)](https://i.imgur.com/c5BD5YK.png)
<br>

### It's a Wrap

Like always, thanks for making it this far. I appreciate it. The major points I need you to take away from this article are

-   Compatibility is the capacity for two systems to work together without having to be altered to do so.
-   Javascript is backwards compatible, not forward i.e old syntax will always work in new browsers.
-   We can create the illusion of forward compatibility in Javascript (new syntax working in old browsers) by using a transpiler like Babel.
-   When the issue is with the Javascript environment API and not the language, we make use of a polyfill instead of transpiler.
-   Having a good understanding of the difference between core Javascript syntax and Javascript environment API will help you understand if what you need is a polyfill or a transpiler.

Please reach out to me on [LinkedIn](https://www.linkedin.com/in/ibrahim-alausa-624a47140/) or [Twitter](https://twitter.com/apparent_dev) for questions, comments, and feedback. I would love to hear and learn from you too.

Keep learning 💪🏿.
