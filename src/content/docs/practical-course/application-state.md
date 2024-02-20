---
title: Application state
description: Learn how to manage the application state in an Angular application.
---

## What you will learn

In this chapter, you will learn how to manage the application state in an Angular application.

## The problem

In modern web applications, we do not just static set of data.
We have dynamic data that changes over time. For example, in our task manager application, we have a list of tasks that can be updated at any time.

We need a way to manage this dynamic data and keep the application state in sync with the data.

Each framework has its own way to solve it.
In Angular, we can use services to manage the application state.

## Move the tasks list to a service

The new `TaskService` will be responsible for managing the tasks list.
It'll be our source of truth for the current state of the tasks list.

Open the `src/app/task.service.ts` file.

Replace the content of the file with the following code:

```typescript ins={"Add the tasks variable": 8-18}
import { Injectable } from '@angular/core';

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
}
```

## What you learned

In this chapter, you learned how to manage the application state in an Angular application. You learned how to move the tasks list to a service and how to use services to manage the application state.
