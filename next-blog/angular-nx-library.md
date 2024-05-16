---
title: Angular NX Library
date: 2024-05-16
excerpt: "This is a guide to create an Angular library in an Nx workspace and publish it to an npm organization."
tags:
   - angular
   - nx
   - npm
draft: true
---

## Create a npm organization

> Why creating a npm organization?
> Rather than publishing content under your own personal npm account, you can create an organization to publish packages under a shared namespace. This is useful for teams or companies that want to publish packages under a common name.
> By managinng the project as a team, it'll help you project to survive even if the original author leaves the project.

To create a npm organization, you need to have a npm account. If you don't have one, you can create one <a href="https://www.npmjs.com/signup" target="_blank>here</a>.

Once you have an account, you can create an organization by following these steps:

1. Go to <a href="https://www.npmjs.com/" target="_blank">npmjs.com</a>.
2. Click on your profile icon in the top right corner.
3. Click on `Create an organization`.
4. Enter the name of your organization and click on `Create organization`.
5. You can now add members to your organization by clicking on `Add members`.
6. You can also create teams and manage access to your organization by clicking on `Teams`.
7. You can now publish packages to your organization by following the instructions in the next section.


## Create a nx Angular library

Run the following command to create a new Angular library in your nx workspace:

```sh
nx generate @nrwl/angular:library test-lib --buildable --publishable --importPath @ngx-sanctuary/test-lib
```

## Publish a package to your npm organization

To publish a package to your npm organization, you need to have an npm account and be a member of the organization.

To publish a package, you need to follow these steps:

1. Go to the root directory of your package.
2. Run the following command to login to npm:
   ```sh
   npm login
   ```
3. Enter your npm username, password, and email address.
4. Run the following command to publish your package:
   ```sh
   npm publish --access public
   ```
5. Your package is now published to your npm organization.
6. You can now install your package by running the following command:
   ```sh
   npm install @<organization>/<package-name>
   ```
