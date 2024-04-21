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

#### Instructions

1. Open the `src/app/task.service.ts` file.

2. Add the following code to the file:

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
            createdAt: new Date()
        },
        {
            title: 'Task 2',
            description: 'Description of task 2',
            createdAt: new Date()
        }
    ];

    
    addTask(task: Task) {
        this.tasks.push({
            ...task,
            createdAt: new Date()
        });
    }
}
```

This new function will be called from our `TaskFormComponent` to add a new task to the list.
From there we'll pass the new task as a parameter to the function.

## What you learned

In this chapter, you learned how to add a task in the `TaskService` in an Angular application. You learned how to add a function to add a task to the list in the `TaskService`.
