---
title: UI Library
description: Add an UI library to your project
---

:::note
Learn how to add an UI library to your project to enhance the user interface of your application.
:::

## What is an UI library?

An UI library is a collection of reusable components that can be used to build a user interface. It can be used to build a complete application or to add specific features to an existing application.

## Why use an UI library?

Using an UI library has several advantages:

- **Consistency**: An UI library provides a set of components that have a consistent look and feel. This ensures that your application has a consistent user interface.
- **Reusability**: An UI library provides a set of reusable components that can be used to build a user interface. This allows you to build your application faster.
- **Accessibility**: An UI library provides a set of components that are accessible. This ensures that your application is accessible to all users.
- **Customization**: An UI library provides a set of components that can be customized. This allows you to customize the look and feel of your application.

- // TODO add a visual diff example.

## How to add an UI library to your project

For this learning content, we'll add [Bootstrap](https://getbootstrap.com/) to our project.
The Angular community created multiple projects to wrap Bootstrap to facilitate the installation.
We'll use the [NG Bootstrap](https://ng-bootstrap.github.io/#/home) one.

### Install Bootstrap

Open a terminal and run the following command to install Bootstrap:

```bash
ng add @ng-bootstrap/ng-bootstrap
```

This command will install Bootstrap as a dependency in your package.json file and add the necessary configuration to your project.

:::tip
**ng add** is an Angular schematic command available for Angular libraries to enhance the library installation by updating the project files.
:::

// TODO add a git diff example.

## What you learned

You learned how to add an UI library to your project. You learned about the advantages of using an UI library and how to install Bootstrap in an Angular project.

:::caution
**bootstrap** also refers to **bootstrapping an application**.  
This is not the same as adding the Bootstrap UI library to your project. 

Bootstrapping an application refers to the process of initializing an application. It is the process of loading a set of instructions that will be used to start the application.

For example, Angular uses the `src/main.ts` file to bootstrap the application. This file is the entry point of the application. It is the first file that is executed when the application starts.

The `main.ts` file contains the following code:

```typescript
bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
);
```







