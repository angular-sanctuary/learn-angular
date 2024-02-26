---
title: Create advanced typescript types
description: Learn how to create advanced typescript types.
---

## What you will learn

In this chapter, you will learn how to create advanced typescript types.

We updated our Task model to include an `id` property. We also updated the TaskService to use the `uuid` library to generate unique identifiers for the tasks.
We now need to update the `addTask` function to use the updated Task model.

## The addTask function

The `addTask` function in the `TaskService` class is expecting a `Task` as a parameter.
But the form only provides a `title` and a `description`.

We have 2 solutions to this problem:

1. Update the `TaskFormComponent` to crate an uuid and pass a complete `Task` to the `addTask` function.
2. Update the `addTask` function to accept a new `TaskForm` model (excluding the uuid) and create a `Task` with the `uuid` in the `TaskService`.

We'll exclude the first solution for 2 reasons:

- The `TaskFormComponent` should not be responsible for creating the `Task` model.
- As explained at the end of the previous chapter, in a real-world application, you would use a database to store the tasks and generate unique identifiers for them. We use the `uuid` library here to keep things simple.

## Typescript utility types

Typescript provides utility types to help us create new types from existing ones.

Two of the most useful utility types are `Partial` and `Omit`:

- `Partial` allows us to create a new type from an existing one with all properties optional.
- `Omit` allows us to create a new type from an existing one by excluding some properties.

:::info
Making all properties optional might feel the easiest solution as it scales well.
But it's not the best solution because it makes the code less predictable and more error-prone.
:::

## Create a new Omit type

We'll create a new `TaskForm` type by excluding the `id` property from the `Task` type.

Open the `src/app/task.model.ts` file.

Add the following code to the file:

```typescript ins={"Create the TaskForm type based on the Task model but omitting the id property": 6-7}
export interface Task {
  id: string;
  title: string;
  description: string;
}

export type TaskForm = Omit<Task, 'id'>;
```

## Update the addTask function

Open the `src/app/task.service.ts` file.

Add the following code to the file:

```typescript ins={"Update the task.model import to include TaskForm model": 2-3} ins={"Update the addTask function to accept a TaskForm and create a Task with the uuid": 23-29}
import { Injectable } from '@angular/core';

import { Task, TaskForm } from './task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      id: uuidv4(),
      title: 'First task',
      description: 'This is the first task'
    },
    {
      id: uuidv4(),
      title: 'Second task',
      description: 'This is the second task'
    }
  ];
  
  
  addTask(task: TaskForm) {
    this.tasks.push({
      id: uuidv4(),
      ...task
    });
  }
}
```

## What you learned

In this chapter, you learned how to create advanced typescript types. You learned how to use the `Partial` and `Omit` utility types to create new types from existing ones. You also learned how to update the `addTask` function in the `TaskService` class to accept a new `TaskForm` model and create a `Task` with the `uuid` in the `TaskService`.
