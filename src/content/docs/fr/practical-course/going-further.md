---
title: Going Further
description: "You've learned the basics of Angular, now it's time to go further. This section will help you to understand the advanced concepts of Angular."
---

## Angular CLI options

The Angular CLI provides several options to help you create and manage your Angular application.

### Standalone API

By including `--standalone=false` in the `ng new` command, you created an Angular application without the new Standalone API.
Included by default in the Angular latest versions, it enhances Angular with a better Developper experience and unlocks new features.

### Test files

By including `--skip-tests=false` in the `ng new` command, you created an Angular application without any test files.
By default, by creating ne content in Angular like components or services, the CLI will generate test files for you.

For a component, the CLI will generate a `.spec.ts` file that contains the tests for the component.

### Server-side rendering

By including `--ssr=false` in the `ng new` command, you created an Angular application without server-side rendering.
Server-side rendering is a technique used to render web pages on the server side, before sending them to the client.

It only benefits some specific use cases and can be complex to set up.
