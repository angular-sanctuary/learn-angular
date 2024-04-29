---
title: Add delete function in the TaskService
description: Learn how to delete a task from the list in an Angular application.
---

:::note
Learn how to delete a task from the list in an Angular application.
:::

## The deleteTask function

#### I🎓 nstructions

1. Open the `src/app/task.service.ts` file.

2. Add the following code to the file:

```typescript ins={"Add the deleteTask function": 20-23}
import { Injectable } from '@angular/core';

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
  
  
  deleteTask(uuid: string) {
    this.tasks = this.tasks.filter(task => task.uuid !== uuid);
  }
}
```

## ✔️ What you learned

In this chapter, you learned how to delete a task from the list in an Angular application. You learned how to create a `deleteTask` function in the `TaskService` class to remove a task from the list.

