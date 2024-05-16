---
title: 'Learning from Cypress API Testing'
slug: 'foo7'
description: 'What i learnt from creating a test suite for API Testing with Cypress'
pubDate: 'Mar 28 2023'
heroImage: '/blog/from-consumer-to-contributor.jpeg'
tags: [ 'open-source', 'testing', 'api', 'cypress' ]
---

Cover image
by <a href="https://unsplash.com/@erdaest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erda
Estremera</a>
on <a href="https://unsplash.com/fr/photos/aSFZKeZiHPc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
Unsplash</a>

## Introduction

For multiple reasons, I decided to create a test suite for API Testing with Cypress to discover how it:
- competes with Postman and Playwright to test an API.
- handles API testing
- handles the authentication process


The following content focuses on providing practical advices on creating test suites with Cypress for API Testing based on my own experience.
Providing good practices about API Testing strategy as a whole is out of scope.

## Chaining requests

## Folder structure

I decided to use the following folder structure:



```
cypress
├── e2e
│   ├── user
│   │   ├── login.spec.js
│   │   └── logout.spec.js
│   ├── users
│   │   ├── create.spec.js
│   │   ├── delete.spec.js
```

Starting with Cypress v12, a preview feature is now available to run all test files at once.
You can activate `exprimentalRunAllSpecs` in the `cypress.config` file.

```json
{
    "experimentalRunAllSpecs": true
}
```

You can find more details on the dedicated [blog post](https://www.cypress.io/blog/2023/01/12/check-out-our-experimental-release-of-run-all-specs/).

## functions over page objects

I firstly chose to use Page Objects pattern to organize the codebase, as a solution to avoid code duplication and keep implementation details hidden.
Given a User for example, the goal was not to expose the token to the test suite, but to expose a method to login.

```js
export class UserPage {
    login() {}
}
```

It works for the most part, but I quickly encountered some issues.
Tt worked like a charm with **happy paths** though.

As long as you are focusing on testing **2xx** responses, you are good to go.
But as soon as you want to test **4xx** or **5xx** responses, you will quickly end up with introducing a lot of custom
conditional code.

Page Objects are about isolating code: to create an isolated state (each UserPga is about an user with its own token) and to isolate a feature for a better discoverability.
Here for API Testing being able to isolate an authentication code breaks the Single Responsibility Principle as you will end up to put every end point of your API in a Single Page Object model.
About an isolated state, it can make tests easier to read and to use once the Page Object model is complete but it also implies tests are harder to read as requiring to understand what happens under the hood.
In my situation, this isolated state was quite limited at the end as the real benefit was about the token itself.

As the hidden shared variables were quite limited at the end, I decided to remove the Page Objects and use a more
traditional approach.

### Do i need to isolate code

Code isolation for testing already comes at the price: a test should be easy to read on its own.
As your endpoints are simple strings, you might want a way to update them easily depending on the maturiy and the evolution of your API.
That might be the good opportunity to hide some implementation details, like a dynamic endpoint for versioned API.

// TODO add example

## Networks logs

By running Cypress with `npx cypress open`, the headed mode provides you with all the devtool features of the selected browser to help you debug your tests.
However there is a limitation with API Testing as requests are made on nodejs side and not on the browser side.
So network calls can't be inspected in the devtools.

By default, you can retrieve the network logs:
- by using the `cy.intercept` command
- by logging the `cy.request` response with `cy.log`
- by clicking on the command trace in Cypress UI to get an output in the browser console

These solutions are not ideal as they require to add a lot of custom code or to make a manual action to get the network logs.

Here comes `cy-plugin-api`!
Created with Philip Hric, this plugin aims to provide you with a simple way to retrieve the network logs: *Imagine Postman, but in Cypress.*
The plugin is both easy to add and to use, with some additional options to enhance your experience and enforce the security of some requests.



### cy.api

The [cypress-api-plugin]() was created by Gleb Bahmutov, and is a great way to simplify API testing.
It provides a `cy.api` command, which is a wrapper around `cy.request`.

```js
it('should login', () => {
    cy.api({
        url: '/api/articles',
        method: 'GET',
    });
});
```

### cy.spok

Not explored with my use case by not hving JSOnSchema ready to be used yet, you will definately want to give a try to cy.spok for better assertions with json objects.

## Errors are a feature

By default, `cy.request` (and by extension `cy.api`) will fail on any non 2xx response.
Failed requests are part of the API testing process, and you should be able to assert them.

To do so, you can use the `failOnStatusCode` option:

```js
it('should fail without a token', () => {
    cy.request({
        url: '/api/articles',
        method: 'POST',
        body: {},
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(401);
    });
});
```

Your test will no longer fail and you will be able to assert the response and the status.

## Fake data

You might want to generate some fake data to be sent to your API.
There are some awesome existing libraries to do so, like the [ngneat/falso](https://www.npmjs.com/package/@ngneat/falso).

However these libraries relies on some creation patterns which might create duplicate data, even with some randomness.
For example, if you want to create a list of 10 users, you might end up with 2 users with the same name.
As an username might required be be unique, it'll result in a false negative error.

To avoid this, I chose to rely on some simple functions to generate fake data.
It's mostly about using a static prefix and the current time in milliseconds to generate unique data.

```js
const generateUsername = () => `username-${Date.now()}`;
```

By making such tests as a team, you can even prefix with your name to avoid conflicts.

```js
const generateUsername = () => `gerome-${Date.now()}`;
```

// TODO add highlander gif there will be one left

## Sharing contexts

As API testing is about asynchronous calls by nature, chaining some calls can be a bit tricky.
You might quickly end up with a callback hell on first try:

```js
it('should be able to create an article', () => {
    cy.request().then((response) => {
        cy.request().then((response) => {
            cy.request().then((response) => {
                expect(response.status).to.equal(200);
            });
        });
    });
});
```

The direct origin of this problem is getting access to a response in a callback.
To avoid this, you can use the `cy.wrap` command to wrap the response in a Cypress object.

```js
it('should be able to create an article', () => {
    cy.request().then((response) => {
        cy.wrap(response.body.token).as('token');
    });

    // Authenticated request
    cy.request(token).then((response) => {
        expect(response.status).to.equal(200);
    });
});
```

However, this is not enough due to the Cypress asynchronous nature and its queue.
You need to integrate this asynchronous nature by waiting explicitly for the response to be available.
You can do so by using the `cy.get` command.

// TODO test `@alias.all`

## Authentication

There are different ways to deal with authentication for API testing.
You might have a ready to use token, or need to generate one.

And by generating one, you might want to generate it once for all before running the tests or to generate
it for each test.

### Existing token

Some test environments might already provide you with a token.
In this case you can define it in Cypress environment variables.
Cypress provides different solutions to define a environment
variable: https://docs.cypress.io/guides/guides/environment-variables

### Generate a token once

If you need to generate a token, you can do it once before running the tests.
You can do it in the `before` hook in the support/e2e.ts file.
This way, it'll be available for all the tests.

```js
before(() => {
    cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users',
        body: {
            username: 'username',
            password: 'password',
        },
    }).then((response) => {
        cy.wrap(response.body.token).as('token');
    });
});
```

### Generate a token for each test

Some tests might not need an authentication / authorization process.
In this case, generating a token on demand might be a better solution.

It might even be on purpose to test unauthorized scenarios.

```js
it('should not be able to create an article without authentication', () => {
    cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/articles',
        body: {
            article: {
                title: 'title',
                description: 'description',
                body: 'body',
                tagList: ['tag1', 'tag2'],
            },
        },
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(401);
    });
});
```


## Conclusion

Once the burden on dealing with asynchronous calls is lifted, API testing is quite straightforward.
`cy.api` provides a great dev experience by displaying the request and response details in the Cypress iframe directly.


## What about you?

What are your favorite tools for API testing?
Do you have any tips to share?

## Resources

- [Playwright selectors](https://playwright.dev/docs/selectors/)
- [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

