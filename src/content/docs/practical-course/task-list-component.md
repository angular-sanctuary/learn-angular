---
title: Task list component
description: Create a task list component in Angular
---

## What you will learn

In this chapter, you will learn how to create a task list component in Angular. You will learn how to create a new component using the Angular CLI and how to use it in your application.


## Angular CLI

The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications. You can use the tool directly in a command shell, or indirectly through an interactive UI such as Angular Console.

We already used it to serve the application locally with the `ng serve` command.

Now we will use it to create a new component.

## Component creation

1. Open another terminal tab.
2. Type `ng generate component task-list`.
3. You should see a new folder called `task-list` in the `src/app` folder.

## Component usage

So far the application still only displays the `app` component html content.

We will now use the `task-list` component in the `app` component.

1. Open the `src/app/app.component.html` file.
2. Replace the content of the file with the following code:

```html
<app-task-list />
```

3. Save the file.
4. Go back to your browser and refresh the page.
5. You should see the following page:

## Component selector

The `app-task-list` is the component selector. It is used to tell Angular to render the `task-list` component in the `app` component.

The selector is a CSS selector that identifies this component in a template. Angular creates and displays an instance of the component wherever it finds the corresponding selector in the host HTML.

It's defined in the `task-list.component.ts` file:

```typescript
@Component({
  selector: 'app-task-list', <== This is the selector
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
}
```

