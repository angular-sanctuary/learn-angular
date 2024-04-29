---
title: Add route for update task feature
description: Learn how to add a route to update a task in an Angular application.
---

:::note
Learn how to add a route to update a task in an Angular application.
:::

## The route path

So far we defined the route paths with static values:

- `''` for the `TaskListComponent`
- `'add-task'` for the `AddTaskComponent`

The update route path is quite different.

We'll include an update button in the `TaskListComponent` for each task.
By navigating to the `UpdateTaskComponent`, we need a way to know which task we want to update.

We'll use a dynamic route path to pass the `id` of the task to update.

## Add the route

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

## The update button

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

## Let's test it out

1. Click on the 'Update' button next to a task in the list.
2. The URL should change to `http://localhost:4200/update/1` for example.
3. The `TaskFormComponent` should be displayed.

## ✔️ What you learned

In this chapter, you learned how to add a route to update a task in an Angular application. You learned how to define a dynamic route path to pass the `id` of the task to update. You also learned how to use the `routerLink` directive to navigate to the `UpdateTaskComponent` and pass the `id` of
the task to update.

