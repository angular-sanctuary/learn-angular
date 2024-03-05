---
title: Dependency injection
description: Learn how to use dependency injection in an Angular application.
---

:::note
Learn how to use dependency injection in an Angular application.
:::

## Remove the tasks list from the TaskListComponent

The `TaskListComponent` class is currently responsible for managing the tasks list.

We want to move this responsibility to a service.

Open the `src/app/task-list.component.ts` file.

Remove the `tasks` variable from the `TaskListComponent` class:

```typescript del={"remove the task list": 8-18}
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {


    tasks: Task[] = [
        {
            title: 'Task 1',
            description: 'Description of task 1'
        },
        {
            title: 'Task 2',
            description: 'Description of task 2'
        }
    ];
}
```

## Inject the TaskService in the TaskListComponent

Our TaskListComponent class needs to use the `TaskService` to get the tasks list.
Angular is using the dependency injection system to provide the `TaskService` to the `TaskListComponent` class.

Open the `src/app/task-list.component.ts` file.

Add the following code to the file:

```typescript ins={"import the TaskService": 2-3} ins={"Inject the TaskService in the class constructor": 12-13}
import { Component } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

    
    constructor(private taskService: TaskService) {}
}
```

## What you learned

In this chapter, you learned how to use dependency injection in an Angular application. You learned how to remove the tasks list from the `TaskListComponent` class and how to inject the `TaskService` in the `TaskListComponent` class. You also learned how Angular uses the dependency injection system to provide the `TaskService` to the `TaskListComponent` class.
