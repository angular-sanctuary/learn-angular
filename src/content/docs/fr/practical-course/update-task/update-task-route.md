---
title: Add route for update task feature
description: Learn how to add a route to update a task in an Angular application.
---

:::note
Learn how to create dynamic route path in Angular.
:::

## The route path

So far we defined 2 route paths:

- `''` for the `TaskListComponent` component to display the list of tasks
- `'add-task'` for the `AddTaskComponent` component to add a new task

The update route path is quite different.  
Existing path are stateless: they don't depend on any context.  
The update path is stateful: it depends on the task to update.  

A common way to provide an information to a routed component is by using a dynamic route path.

## Add the route

Our new path will be `'update/:id'`.  
The `update` part is static but the `:id` part is dynamic.

:::tip
The `:id` part is a route parameter.
You cn chain multiple route parameters in a path, for example `'update/:id/:name'`.
Each one is prefixed by a colon `:` followed by an arbitrary name.
:::

#### 🎓 Instructions

1. Open the `src/app/app-routing.module.ts` file.

2. Add the following code to the file:

```typescript ins={"1. Add the route for the update task feature": 9-10}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'add-task', component: TaskFormComponent },
    
    { path: 'update/:id', component: TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## The update link

We'll add a link to the `TaskListComponent` to navigate to the `TaskFormComponent` with the `id` of the task to update.
When navigating to this path, Angular will extract the `id` value from the URL and provide it to the related component.

#### Instructions

1. Open the `src/app/task-list/task-list.component.html` file.

2. Add the following code to the file:

```html ins={"1. Add the update button": 4-5}
<ul>
  <li *ngFor="let task of tasks; let i = index">
    Task name: {{ task.title }}

    <a [routerLink]="['/update', task.id]">Update</a>
  </li>
</ul>
```

The `routerLink` value is an array of URL segments.
The first one is a string, the static part of the path.
The second one is the `id` of the task to update.

## Let's test it out

1. Click on the 'Update' button next to a task in the list.
2. The URL should change to `http://localhost:4200/update/1` for example.
3. The `TaskFormComponent` should be displayed.

## ✔️ What you learned

In this chapter, you learned how to add a route to update a task in an Angular application. You learned how to define a dynamic route path to pass the `id` of the task to update. You also learned how to use the `routerLink` directive to navigate to the `UpdateTaskComponent` and pass the `id` of
the task to update.

