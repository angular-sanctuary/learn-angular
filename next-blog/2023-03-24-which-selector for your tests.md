---
title: 'Which locators should you use for testing?'
slug: 'foo2'
description: 'A step at a time into an open-source journey'
pubDate: 'Mar 24 2023'
heroImage: '/blog/from-consumer-to-contributor.jpeg'
tags: ['open-source', 'testing', 'playwright', 'cypress']
---

Cover image by <a href="https://unsplash.com/@erdaest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erda Estremera</a> on <a href="https://unsplash.com/fr/photos/aSFZKeZiHPc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Introduction

When you start writing tests, you will quickly realize that you need to select elements on the page.
You will also quickly realize that there are many ways to select elements on the page.
Which one should you use?

## Locator types

There are many ways to select elements on the page.
The most common ones are:

- CSS selector
- XPath
- Text
- Label
- Role
- Data attribute
- ARIA attribute
- Test ID

For consistency and maintainability, you should always use the same type of locator.
You should also use the most specific locator possible.
For example, if you can select an element using a CSS selector, you should not use a text locator.

Well, that's the theory.
In practice, you will have to use different types of locators depending on the situation.
Let's see when you should use each type of locator.

## CSS selector

CSS selectors are the most common type of locator.
They are also the most powerful.
You can use them to select any element on the page.
You can also use them to select elements inside other elements.
For example, you can select a button inside a form.

```js
const button = page.locator('form >> text=Submit');
```

You can also use them to select elements based on their attributes.
For example, you can select an element based on its `id` attribute.

```js
const button = page.locator('#submit');
```

You can also use them to select elements based on their position.
For example, you can select the second button on the page.

```js
const button = page.locator('button:nth-of-type(2)');
```

You can also use them to select elements based on their state.
For example, you can select a disabled button.

```js
const button = page.locator('button:disabled');
```

You can also use them to select elements based on their pseudo-classes.
For example, you can select a button that is being hovered.

```js
const button = page.locator('button:hover');
```

You can also use them to select elements based on their pseudo-elements.
For example, you can select a button that is being focused.

```js
const button = page.locator('button::focus');
```

You can also use them to select elements based on their content.
For example, you can select a button that contains the text "Submit".

```js
const button = page.locator('button:has-text("Submit")');
```


## XPath

XPath is another type of locator.
It is a query language that allows you to select elements on the page.
XPath is very powerful.
You can use it to select any element on the page.
You can also use it to select elements inside other elements.
For example, you can select a button inside a form.

```js
const button = page.locator('//form//button');
```

You can also use it to select elements based on their attributes.

```js
const button = page.locator('//*[@id="submit"]');
```

You can also use it to select elements based on their position.
For example, you can select the second button on the page.

```js
const button = page.locator('//button[2]');
```

You can also use it to select elements based on their state.
For example, you can select a disabled button.

```js
const button = page.locator('//button[@disabled]');
```

You can also use it to select elements based on their content.
For example, you can select a button that contains the text "Submit".

```js
const button = page.locator('//button[contains(text(), "Submit")]');
```

XPath is very powerful.
However, it is also very verbose.
It is also very hard to read.
For these reasons, you should only use XPath when you cannot use CSS selectors.

## Text

Text locators are very simple.
They allow you to select elements based on their text content.
For example, you can select a button that contains the text "Submit".

```js
const button = page.locator('text=Submit');
```

Text locators are very easy to write.
However, they are also very fragile.
If the text of the element changes, your test will fail.
For this reason, you should only use text locators when you cannot use CSS selectors.

## Label

Label locators are very simple.
They allow you to select elements based on their label.
For example, you can select a button that has the label "Submit".

```js
const button = page.locator('label=Submit');
```

Label locators are very easy to write.
However, they are also very fragile.
If the label of the element changes, your test will fail.
For this reason, you should only use label locators when you cannot use CSS selectors.

## Role

Role locators are very simple.
They allow you to select elements based on their role.
For example, you can select a button that has the role "button".

```js
const button = page.locator('role=button');
```

Role locators are very easy to write.
However, they are also very fragile.
If the role of the element changes, your test will fail.
For this reason, you should only use role locators when you cannot use CSS selectors.

## Data attribute

Data attribute locators are very simple.
They allow you to select elements based on their data attribute.
For example, you can select a button that has the data attribute "submit".

```js
const button = page.locator('data-test=submit');
```

Data attribute locators are very easy to write.
However, they are also very fragile.
If the data attribute of the element changes, your test will fail.
For this reason, you should only use data attribute locators when you cannot use CSS selectors.

## ARIA attribute

ARIA attribute locators are very simple.
They allow you to select elements based on their ARIA attribute.
For example, you can select a button that has the ARIA attribute "submit".

```js
const button = page.locator('aria-label=submit');
```

ARIA attribute locators are very easy to write.
However, they are also very fragile.
If the ARIA attribute of the element changes, your test will fail.
For this reason, you should only use ARIA attribute locators when you cannot use CSS selectors.

### Which one should I use?

Each locator has its own pros and cons.
There is no one-size-fits-all solution.


**ids** should be avoided for a separation of concerns reason.

Besides being CSS selector to apply styles to the element, ids are also used by:
- HTML to link labels to inputs or forms to submit buttons.
- JavaScript to select elements
- screen readers to read the content of the page.


By following the previous rule, you should not use **css classes** to locate elements either, as their goal is to apply styles to the element.
However, a workaround if you are consistent with such a practice is to suffix your css classes with a unique identifier, such as a '-qa' and to reserver their usage as testing locators.
Mind that this is not a best practice, but a workaround and it might affect the performance of a style linter, as unused classes will be flagged as such.

Promoted as 'end user' identifiers, labels ara good alternatives to ids and css classes.
They are also more readable than css selectors, but they might be more fragile.
They rely on the marketing maturity of the product to be used consistently: what if the 'login' button is changed to 'sign in'?
An internationalization process might also change the label of the button. To prevent this, you might want to retrieve the label from a translation file dynamically.

In common use-cases, relying on the text content might not be enough to identify an element uniquely as:
- a text content can be used both for a call to action button and the title of the same page
- there are multiple similar elements on the same page (like 'edit' buttons on a list of items)

When it comes to make selectors unique, naming them with a variable content might feel like a good idea.
However the source of this dynamic part adding uniqueness might be dynamic as well might result in some prop drill where you are adding a lot of code in your codebase to make your tests pass.
This is intensified by the componentization of the UI, where you might have to pass the same variable to multiple components to make them unique.

As an solution:
- for the first case, you might want to use a combination of a role and the text content.
- for the second case, you might want to use the context of the target (like the parent section title) to narrow down the selection.


**data-** attributes
They perfectly match the requirement of having locator whom responsibility is unique here: once the key is defined for the project, so is the contract for the team about its scope.
For testing, there are some popular ones: **data-test**, **data-testid**, **data-qa**, **data-cy**.
These exmaples are also the one being used by Chrome Recorder as privilegied locators.

While labels/text content locators are purely based on the end user experience, data attributes are more technical.
Choosing them means that test writers have access to the codebase and can modify it.
The obvious example is a qa team or a dedicated project for tests.
I even met a project team where backend developers were writing tests for the frontend.

Besides identifying the locator providing you the best uniqueness without having potential side effects on the codebase and making sure those locators can be easily updated by testers, exposing technical identifiers might want to be avoided in the browser for end users.
If that's a concern for your team, there are existing solutions to remove them at build time.

Mind the goal is not just to moreve them from production, but removing them from your production environment.
The detail lies in the fact that your qa/staging envrionment should use a production build: it's not about how you build your application but where you deploy it.


## Recommandation

My recommandation is to use labelsAt the end the goal is to test a product, not the implementations details of a technical solution.
It makes labels ther perfect choice.
Adding precision with roles ensure these elements are accessible.
Grabbing a sibling/parent context will not only help to identify similar lements but will ensure there is a way for the user to identify the target uniquely.

By choosing labels you will not only ensure the features work but that:
- user can identify them properley
- there are accessible



## Conclusion

There are many ways to select elements on the page.
You should always use the same type of locator.
You should also use the most specific locator possible.
For example, if you can select an element using a CSS selector, you should not use a text locator.

## Resources

- [Playwright selectors](https://playwright.dev/docs/selectors/)
- [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
