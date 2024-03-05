---
title: Programmatical routing
description: Learn how to use programmatical routing in an Angular application
---

## 🎓 What you will learn

In this chapter, you will learn how to use programmatical routing in an Angular application.

In the last step, we tested the form with this scenario:

1. Click on the `Add a new task` link
2. Enter a title and a description in the form
3. Click on the `Create task` button
4. Click on the `List of tasks` link

But what if we want to redirect the user to the list of tasks after the form is submitted?
That's a common scenario in web applications, and Angular provides a way to do that.

We saw how to trigger a navigation by clicking on a link with the `routerLink` directive.
But in our situation, we want to trigger a navigation when the `createTask` function is called.

## Inject the Router

Your own custom services are not the only elements you can inject in the constructor of a component.
By using the Angular Router feature, you can inject the `Router` service in a component.

This service provides information about the current route and allows you to navigate to a different route.

Open the `src/app/task-form.component.ts` file.

Add the following code to the file:

```typescript ins={"1. import the Router": 3-4} ins={"2. Inject the Router in the class constructor": 19-20} ins={"3. Use the navigate function from the Router": 25-26}
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

import { Router } from '@angular/router';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
    task = {
        title: '',
        description: ''
    };
    
    constructor(
        private taskService: TaskService,
        
        private router: Router
    ) { }

    createTask() {
        this.taskService.addTask(this.task);

        this.router.navigate(['/tasks']);
    }
}
```

The navigate function expects an array of route segments as a parameter.
In our case, we want to navigate to the `tasks` route as we defined it in our route definition, so we pass `['/tasks']`;

```typescript
const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent }
];
```

## Let's test it out

Now if you repeat the previous scenario:

1. Click on the `Add a new task` link
2. Enter a title and a description in the form
3. Click on the `Create task` button

You should be redirected to the list of tasks.

## What you learned

In this chapter, you learned how to use programmatical routing in an Angular application. You learned how to inject the `Router` service in a component and use its `navigate` function to navigate to a different route.



