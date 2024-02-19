---
title: Getting Started
description: How to get started with Angular
---

Angular is a platform for building mobile and desktop web applications. It is written in TypeScript/JavaScript. This course will teach you the fundamentals of Angular and TypeScript.

## Project creation

Open your terminal and type `npx -p @angular/cli@latest ng new practical-course --standalone=false --style=css --ssr=false --skip-tests=false`.
The options will bootstrap the project with the latest version of Angular with some options to facilitate the learning process.

## Open the project

1. open Visual Studio Code.
2. Click on the `File` menu and select `Open Folder`.
3. Navigate to the `practical-course` folder and click on the `Select Folder` button.

## Running the application

1. Open your terminal and type `cd practical-course`.
2. Type `ng serve`.
3. Open your browser and navigate to `http://localhost:4200`.
4. You should see the following page:



## Hot reload

> Hot reload is a feature that allows you to see the changes you make in your code without having to refresh the page.

4. Open the `src/app/app.component.html` file.
6. Replace the content of the file with the following code:

```html
<header>Angular Practical course</header>
<h1>Home page</h1>
```
6. Save the file.
7. Go back to your browser and refresh the page.
8. You should see the following page:





