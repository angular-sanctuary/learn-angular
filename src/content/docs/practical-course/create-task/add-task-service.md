---
title: Add task in service
description: Learn how to add a task in the `TaskService` in an Angular application.
---

:::note
Learn how to add a task in the `TaskService` in an Angular application.
:::

## Add a method to add a task

The `TaskService` will be responsible for managing the tasks list.
We need to add a function to add a task to the list.

Open the `src/app/task.service.ts` file.

Add the following code to the file:

```typescript ins={"Add the addTask function": 20-23}
// task.service.ts
import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [
        {
            title: 'Task 1',
            description: 'Description of task 1',
        },
        {
            title: 'Task 2',
            description: 'Description of task 2',
        }
    ];

    
    addTask(task: Task) {
        this.tasks.push(task);
    }
}
```

This new function will be called from our `TaskFormComponent` to add a new task to the list.
From there we'll pass the new task as a parameter to the function.

## What you learned

In this chapter, you learned how to add a task in the `TaskService` in an Angular application. You learned how to add a function to add a task to the list in the `TaskService`.
