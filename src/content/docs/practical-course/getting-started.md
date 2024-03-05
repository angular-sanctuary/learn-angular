---
title: Getting Started
description: How to get started with Angular
---

Angular is a platform for building mobile and desktop web applications. It is written in TypeScript/JavaScript. This course will teach you the fundamentals of Angular and TypeScript.

## Project creation

Open your terminal and run the following command to create an Angular application:

```bash
npx -p @angular/cli@latest ng new practical-course --standalone=false --style=css --ssr=false --skip-tests=false
```

:::tip
The command includes some options to **facilitate the learning process**.
:::

## Open the project

1. open **Visual Studio Code**.
2. Click on the `File` menu and select `Open Folder`.
3. Navigate to the `practical-course` folder and click on the `Select Folder` button.

## Running the application

1. Open your terminal and type `cd practical-course`.
2. Type the following command to start the application:

```bash
ng serve
```

3. Open your browser and navigate to `http://localhost:4200`.
4. You should see the following default boilerplate page:



## Hot reload

:::tip
Hot reload is a feature that allows you to see the changes you make in your code without having to refresh the page.
:::

1. Open the `src/app/app.component.html` file.
2. Replace the content of the file with the following code:

```html
// app.component.html
<header>
    <h1>Angular Practical course</h1>
</header>
```
3. Save the file.
4. Go back to your browser and refresh the page.
5. You should see the following page:


## 🔎 Want to learn more?

- [Angular CLi options](/practical-course/going-further#angular-cli-options)

