---
title: Create uuids for tasks
description: Learn how to create uuids for tasks in an Angular application.
---

:::note
Learn how to create uuids for tasks in an Angular application.
:::

To delete a task, we need a way to identify it uniquely. We could have duplicate titles, so we can't use the title as an identifier.
We will use the `uuid` library to generate unique identifiers for the tasks.

## Install the uuid library

Open a terminal and run the following command:

```bash
npm install uuid
```

## Update the task model

Open the `src/app/task.model.ts` file.

Add the following code to the file:

```typescript ins={"Add the id property": 2-3}
export interface Task {
    
  id: string;
  title: string;
  description: string;
}
```

## Update the Task list

Open the `src/app/task.service.ts` file.

The task list is now underlined in red because its type is not correct anymore.
The model expects each task to include an `id` property.
Thanks to Typescript, such warnings are very helpful.

Add the following code to the file:

```typescript ins={"Add the uuid package import": 3-4} ins={"Add the id property to the task": 12-13} ins={"Add the id property to the task": 18-19}
import { Injectable } from '@angular/core';
import { Task } from './task.model';

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
  
  addTask(task) {
    this.tasks.push(task);
  }
}
```

## What you learned

In this chapter, you learned how to create uuids for tasks in an Angular application. You learned how to install the `uuid` library and use it to generate unique identifiers for the tasks. You also learned how to update the `Task` model to include an `id` property and how to update the `TaskService` class to use the `uuid` library to generate unique identifiers for the tasks.

:::caution
In a real-world application, you would use a database to store the tasks and generate unique identifiers for them. We use the `uuid` library here to keep things simple.
:::
