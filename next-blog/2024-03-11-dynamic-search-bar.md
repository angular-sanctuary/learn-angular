---
title: 'Angular Application architecture!'
slug: 'dynamic-search-bar'
description: 'Learn to create a standalone Angular application architecture!'
pubDate: 'Mar 8 2024'
heroImage: '/blog/angular-architecture/cover.png'
tags: ['angular']
---

Starting with Angular 17, a n Angular application created with `ng new` is a **Standalone application**.
It uses the Standalone API not only for COmponents and Directives but as a way to bootstrap the application.

ngModules are part of the past!

If Standalone is quite new to you are still relying on old course content using ngModules, here are the differences!

### Components and Directives context

Modules were used to wrap all the required context for a component/directive to work by declaring them in the 
