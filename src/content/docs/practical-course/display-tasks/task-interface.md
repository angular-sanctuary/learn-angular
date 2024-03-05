---
title: Create the task interface
description: Create your first Typescript interface
---

:::note
Learn how to create your first TypeScript interface and type the task array.
:::

## Models folder

Create a new folder called `models` in the `src/app` folder.

This folder is used to store all the TypeScript interfaces of the application.

## Interface creation

Create a new file called `task.model.ts` in the `src/app/models` folder.

Add the following code to the file:

```typescript
// task.model.ts
export interface Task {
  title: string;
  description: string;
  createdAt: Date;
}
```

## Interface usage

Now that we have created the `Task` interface, we can use it in our application.

Now that we have created the `Task` interface and used it in our application, we can populate it with data.

Open the `src/app/task-list.component.ts` file.

Add the following code to the file:

```typescript ins={"Import the task interface": 3-4} ins={"Add the tasks variable": 13-23}
// task-list.component.ts
import { Component } from '@angular/core';

import { Task } from './models/task.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    
    
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
}
```

## ✔️ What you learned

In this chapter, you learned how to create your first TypeScript interface. You learned how to define a TypeScript interface and how to use it to create a new object. You also learned about the benefits of using TypeScript, such as autocompletion, type checking, IDE support, and build time errors.

## 🚦 Quiz

