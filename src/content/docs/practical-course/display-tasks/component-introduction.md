---
title: Components
description: Components are the building blocks of Angular applications
---

Components are the building blocks of Angular applications. A component controls a portion of the screen called a view. A view is a collection of one or more templates. A template is a form of HTML that tells Angular how to render the component.

Components are used to:

- Break up the application into smaller components.
- Reuse the same block in different parts of the application.
- as dedidated routes with their own URL.

:::note
If you are familiar with **components** with another frontend framework, the concept is the same.
:::

## Our first component

Our project already has a default component called `app`.

It's made of 3 files:

- `app.component.ts`: The component class code, written in TypeScript.
- `app.component.html`: The component template, written in HTML.
- `app.component.css`: The component's private CSS styles.

Think about the human body:
The HTML file is the bones, the TypeScript file is the brain and muscles, and the CSS file is the skin.
Each of these files is a part of the component.

Enterprise applications are made of many components. Each component is a piece of the application that controls a portion of the screen.
You'll learn how to create a new component in the next chapter.


