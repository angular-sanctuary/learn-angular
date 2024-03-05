---
title: Create your first component
description: Create a task list component in Angular
---

:::note
Learn how to create a new component using the Angular CLI and how to use it in your application.
:::

## Angular CLI

The **Angular CLI** is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications.  

You already used the CLI to serve the application locally with the `ng serve` command in the [Getting Started](/practical-course/getting-started/#running-the-application) step.

Now you will use it to create a new component.

## Component creation

1. Open another terminal tab.
2. Run the following command:

```bash
ng generate component task-list
```

3. You should see a new folder called `task-list` in the `src/app` folder.

This new folder contains the three following files:

- `task-list.component.ts`
- `task-list.component.html`
- `task-list.component.css`

## Component usage

So far the application still only displays the `app` component html content.
You created a component but your application does not know how to use it!

We will now use the `task-list` component in the `app` component.

1. Open the `src/app/app.component.html` file.
2. Replace the content of the file with the following code:

```html ins={"Add the task list selector": 5-6}
// app.component.html
<header>
    <h1>Angular Practical course</h1>
</header>

<app-task-list />
```

3. Go back to your browser to see the following page:

## Component selector

The `app-task-list` is the component selector. It is used to tell Angular to render the `task-list` component in the `app` component.

The selector is a CSS selector that identifies this component in a template. Angular creates and displays an instance of the component wherever it finds the corresponding selector in the host HTML.

It's defined in the `task-list.component.ts` file:

```typescript "selector: 'app-task-list'"
// task-list.component.ts
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
}
```

## ✔️ What you learned

In this chapter, you learned how to create a new component using the Angular CLI and how to use it in your application.

## Quizz

What is the command to create a new component using the Angular CLI?

1. `ng generate component task-list`
2. `ng new task-list`
3. `ng create component task-list`
4. `ng component task-list`

What is the property used to define the component 'app-task-list'?

1. `name`
2. `selector`
3. `title`
4. `tag`

is Angular CLI meant to only create components?

1. Yes
2. No

Given the component is generated with the command `ng generate component task-list`, what is the name of the selector component?

1. `app-task-list`
2. `task-list`
3. `app-task`
4. `task list`

## 🔗 Resources

- [Official Angular documentation](https://angular.dev/cli)
