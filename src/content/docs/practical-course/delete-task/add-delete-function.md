---
title: Add delete function in the TaskService
description: Learn how to delete a task from the list in an Angular application.
---

:::note
Learn how to delete a task from the list in an Angular application.
:::

## The deleteTask function

#### Instructions

1. Open the `src/app/task.service.ts` file.

2. Add the following code to the file:

```typescript ins={"Add the deleteTask function": 22-25}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      title: 'First task',
      description: 'This is the first task'
    },
    {
      title: 'Second task',
      description: 'This is the second task'
    }
  ];
  
  addTask(task) {
    this.tasks.push(task);
  }
  
  
  deleteTask(uuid: string) {
    this.tasks = this.tasks.filter(task => task.uuid !== uuid);
  }
}
```

## What you learned

In this chapter, you learned how to delete a task from the list in an Angular application. You learned how to create a `deleteTask` function in the `TaskService` class to remove a task from the list.

