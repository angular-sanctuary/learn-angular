---
title: Routing introduction
description: Introduction to routing in the practical course
---

## 🎓 What you will learn

In this practical course, you will learn how to add routing to your application.

## What is routing?

Routing is the process of determining what content to display based on the URL. In a single-page application, the URL does not change when the user navigates between different views. Instead, the application uses the URL to determine what content to display.
In our project, we now want to display either the list of task or the form to add a new task based on the URL.

## Router outlet

The Angular router module provides a special directive called `router-outlet`. This directive is used to display the content of the current route. When the user navigates to a different route, the content of the `router-outlet` is replaced with the content of the new route.

In the `app.component.html` file, we have the following code:

```html ins={"Add router-outlet as a placeholder for routed content": 2-3}
<h1>My first Angular application</h1>

<router-outlet></router-outlet>
```

By navigating to different routes, the content of the `router-outlet` will be replaced with the content of the new route.
But on all pages, we'll see the same title "My first Angular application".

## Define the routes

We need to define the routes for our application. We will have two routes: one for the list of tasks and one for the form to add a new task.

Open the `src/app/app-routing.module.ts` file.

Replace the content of the file with the following code:

```typescript ins={"Import the componentes for each route": 3-5} ins={"Define the routes": 8-10}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [

  { path: 'tasks', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Each route is defined by a `path` and a `component`:

- the `path` is the URL that the user will navigate to
- the `component` is the component that will be displayed when the user navigates to that URL.

## Add links to navigate between routes

We need to add links to navigate between the different routes.

Open the `src/app/app.component.html` file.

Replace the content of the file with the following code:

```html ins={"Add links to navigate between routes": 2-4}
<h1>My first Angular application</h1>

<a routerLink="/tasks">List of tasks</a>
<a routerLink="/add-task">Add a new task</a>

<router-outlet></router-outlet>
```

For each route, we are using the native HTML `a` tag and pass it the name of the route to be displayed.
To navigate to the related route, we use the `routerLink` directive, which is provided by the Angular router module.
Its value is the path of the route to navigate to.

You can now test this by clicking on the links in your browser.

## What you learned

In this chapter, you learned how to add routing to your application. You learned how to define the routes and how to navigate between them using the `routerLink` directive. You also learned how to display the content of the current route using the `router-outlet` directive.
